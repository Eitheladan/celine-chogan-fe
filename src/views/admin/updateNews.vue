<script>
import Button from "../../components/reusable/Button.vue";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
export default {
  components: { Button, Editor },
  data() {
    return {
      title: "",
      image: "",
      description: "",
      selectedFile: "",
      nameFile: "",
    };
  },
  mounted() {
    let news = this.$store.state.news;
    if (this.$store.state.login === false) {
      this.$router.push("/");
    }
    console.log(news);
    news.forEach((n) => {
      if (n._id == this.$route.params.id) {
        this.title = n.title;
        console.log(this.title);
        this.description = n.description;
        console.log(this.description);
      }
    });
  },

  methods: {
    async updateNews() {
      let id = this.$route.params.id;
      const formData = new FormData();
      console.log(this.selectedFile);
      formData.append("file", this.selectedFile);
      console.log(this.title);
      formData.set("title", this.title);
      console.log(this.description);
      formData.set("description", this.description);
      console.log(formData);
      try {
        await axios.put(
          "http://localhost:3030/api/news/update/" + id,
          formData
        );
        this.selectedFile = "";
        this.title = "";
        this.description = "";
        document.getElementById("uploadImage").value = "";
        document.getElementById("uploadPreview").src = "";
        this.$store.dispatch("getNewsAction");
        this.$router.push("/admin/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
    // fonction pour prévisualiser l'image que l'on va uploader
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(event.target.files[0].name);
      var oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
      oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
      };
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <div v-for="n in $store.state.news" :key="n._id">
        <div v-if="n._id == $route.params.id">
          <form
            @submit.prevent="updateNews"
            enctype="multipart/form-data"
            class="input creation"
          >
            <div>
              <label
                class="
                  block
                  description-lg description-primary-dark
                  dark:description-primary-light
                  mb-2
                "
                for="title"
                >Titre de l'actualité</label
              >
              <input
                class="
                  w-full
                  px-5
                  py-2
                  border border-gray-300
                  dark:border-primary-dark
                  border-opacity-50
                  description-primary-dark
                  dark:description-secondary-light
                  bg-ternary-light
                  dark:bg-ternary-dark
                  rounded-md
                  shadow-sm
                  description-md
                "
                id="title"
                name="title"
                v-model="title"
                type="description"
                required=""
                placeholder="Ajouter le titre de l'actualité"
                aria-label="Title"
              />
            </div>
            <div>
              <label
                class="
                  block
                  description-lg description-primary-dark
                  dark:description-primary-light
                  mb-2
                "
                for="image"
                >Image de l'actualité</label
              >
              <input
                type="file"
                ref="image"
                @change="onFileSelected"
                class="
                  w-full
                  px-5
                  py-2
                  border border-gray-300
                  dark:border-primary-dark
                  border-opacity-50
                  description-primary-dark
                  dark:description-secondary-light
                  bg-ternary-light
                  dark:bg-ternary-dark
                  rounded-md
                  shadow-sm
                  description-md
                "
                id="uploadImage"
                name="image"
              />
              <img
                class="previewImage"
                id="uploadPreview"
                style="width: 250px; height: 200px; margin: 15px auto"
              />
            </div>
            <div>
              <label
                class="
                  block
                  description-lg description-primary-dark
                  dark:description-primary-light
                  mb-2
                "
                for="description"
                >Description</label
              >
              <Editor
                api-key="ptfhyceukvseclnx08on1nefttte7ow6l4e52mjhju7trlo7"
                :init="{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
                }"
                v-model="description"
              />
            </div>

            <div>
              <Button
                title="Envoyé"
                class="
                  px-4
                  py-2.5
                  description-white
                  tracking-wider
                  bg-indigo-500
                  hover:bg-indigo-600
                  focus:ring-1 focus:ring-indigo-900
                  rounded-lg
                  duration-500
                "
                type="submit"
                aria-label="Envoyé"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50%;
  margin: 0 auto;
}
input {
  margin-top: 25px;
}
Button {
  margin-top: 25px;
}
label {
  margin-top: 25px;
}
</style>