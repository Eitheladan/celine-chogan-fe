<script>
import Button from "../reusable/Button.vue";
export default { components: { Button } };
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
      <form action="#" class="font-general-regular space-y-7">
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
          <textarea
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
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
          ></textarea>
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
