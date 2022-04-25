<script>
import Button from "../../components/reusable/Button.vue";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
export default {
  components: { Button, Editor },
  data() {
    return {
      infos: "",
      numero: "",
      rue: "",
      CP: "",
      ville: "",
    };
  },
  mounted() {
    let infos = this.$store.state.adminInfos;
    console.log(infos);
    if (this.$store.state.login === false) {
      this.$router.push("/");
    }
    infos.forEach((i) => {
      if (i._id == this.$route.params.id) {
        this.infos = i.infos;
        console.log(this.infos);
        this.numero = i.adresse.numero;
        console.log(this.numero);
        this.rue = i.adresse.rue;
        console.log(this.rue);
        this.CP = i.adresse.CP;
        console.log(this.CP);
        this.ville = i.adresse.ville;
        console.log(this.ville);
      }
    });
  },

  methods: {
    async updateInfos() {
      let id = this.$route.params.id;
      console.log(id);
      let infos = {
        infos: this.infos,
        adresse: {
          numero: this.numero,
          rue: this.rue,
          CP: this.CP,
          ville: this.ville,
        },
      };
      try {
        await axios.put(
          this.$store.state.url + "api/infos/update/" + id,
          infos
        );
        console.log(infos);
        this.$router.push("/admin/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <div v-for="i in $store.state.adminInfos" :key="i._id">
        <div v-if="i._id == $route.params.id">
          <form
            @submit.prevent="updateInfos"
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
                for="numero"
                >Adresse</label
              >
              <div>
                <input
                  class="
                    w-1/4
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
                  id="numero"
                  name="numero"
                  v-model="numero"
                  type="text"
                  required=""
                  placeholder="numero"
                  aria-label="numero"
                />
                <input
                  class="
                    w-3/4
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
                  id="rue"
                  name="rue"
                  v-model="rue"
                  type="text"
                  required=""
                  placeholder="rue"
                  aria-label="rue"
                />
              </div>
              <div>
                <input
                  class="
                    w-1/4
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
                  id="CP"
                  name="CP"
                  v-model="CP"
                  type="number"
                  required=""
                  placeholder="CP"
                  aria-label="CP"
                />
                <input
                  class="
                    w-3/4
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
                  id="ville"
                  name="ville"
                  v-model="ville"
                  type="text"
                  required=""
                  placeholder="ville"
                  aria-label="ville"
                />
              </div>
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
                >Infos Admin</label
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
                v-model="infos"
              />
            </div>

            <div>
              <Button
                title="Envoyé"
                class="
                  px-4
                  py-2.5
                  text-white
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