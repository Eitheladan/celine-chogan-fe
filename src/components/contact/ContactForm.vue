<script>
import Button from "../reusable/Button.vue";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
export default {
  components: { Button, Editor },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      text: "",
    };
  },
  methods: {
    sendMessage() {
      axios
        .post(this.$store.state.url + "api/mailer/message", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          text: this.text,
        })
        .then((res) => {
          this.message = "commande bien envoyé";
          res;
          console.log("ça marche");
        })
        .catch((err) => {
          this.message = "erreur : commande non envoyé";
          err;
          console.log("erreur");
        });
    },
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        Formulaire de contact
      </p>
      <form :action="sendMessage" class="font-general-regular space-y-7">
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Nom - Prénom</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            v-model="name"
            name="name"
            type="text"
            required=""
            placeholder="Nom - Prénom"
            aria-label="Name"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="text"
            required=""
            v-model="email"
            placeholder="Votre Email"
            aria-label="Email"
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="sujet"
            >Sujet</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="sujet"
            name="sujet"
            type="text"
            v-model="subject"
            required=""
            placeholder="Votre sujet"
            aria-label="Sujet"
          />
        </div>

        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="sujet"
            >Message</label
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
            v-model="text"
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
</template>

<style lang="scss" scoped></style>
