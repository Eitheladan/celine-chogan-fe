<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
      modal: false,
      slides: 7,
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.modal = true;
      }
    },
  },
};
</script>

<template>
  <section class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10">
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <img
        style="height: 25%; margin-bottom: 35px"
        src="@/assets/images/emoj.png"
        alt="emoj"
      />
      <h1
        class="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-primary-light
          uppercase
        "
      >
        Bonjour, Je suis Céline
      </h1>
      <p
        class="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        Votre consultante Chogan. Si vous cherchez des produits de qualités au
        prix juste, alors vous êtes sur le bon site.
      </p>
      <div class="flex justify-center sm:block">
        <a
          href="https://www.chogangroup.com/dflip/page_flip.php?doc=1610704336_documents"
          target="_blank"
          class="
            flex
            justify-center
            items-center
            w-36
            sm:w-48
            mt-12
            mb-6
            sm:mb-0
            text-lg
            border border-indigo-200
            dark:border-ternary-dark
            py-2.5
            sm:py-3
            shadow-lg
            rounded-lg
            bg-indigo-50
            focus:ring-1 focus:ring-indigo-900
            hover:bg-indigo-500
            text-gray-500
            hover:text-white
            duration-500
          "
          aria-label="Download Resume"
        >
          <i
            data-feather="arrow-down-circle"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
          ></i>
          <span class="text-sm sm:text-lg font-general-medium duration-100"
            >Catalogue</span
          ></a
        >
      </div>
    </div>

    <!-- Banner right Caroussel -->
    <div class="w-full md:w-2/3 text-right float-right shadow-lg rounded-lg">
      <img
        @click="showModal()"
        class="chogan rounded-lg"
        style="margin: 0 auto"
        v-if="theme === 'light'"
        src="@/assets/images/parfum_chogan.jpg"
        alt="Parfum"
      />
      <img
        @click="showModal()"
        v-else
        class="chogan rounded-lg"
        src="@/assets/images/parfum_chogan.jpg"
        alt="Parfum"
      />
    </div>
  </section>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular absolute inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 absolute inset-0 z-20 h-200"
      ></div>
      <!-- Modal content -->
      <main class="flex flex-col items-center justify-center">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="
                modal
                bg-secondary-light
                dark:bg-primary-dark
                max-h-screen
                shadow-lg
                flex-row
                rounded-lg
                relative
              "
            >
              <div
                class="
                  modal-header
                  flex
                  justify-between
                  gap-10
                  p-5
                  border-b border-ternary-light
                  dark:border-ternary-dark
                "
              >
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <i data-feather="x"></i>
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <img
                  class="modalChogan rounded-lg"
                  style="margin: auto auto"
                  src="@/assets/images/parfum_chogan.jpg"
                  alt="Parfum"
                />
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style scoped>
img {
  margin: 0 auto;
}
.chogan {
  cursor: zoom-in;
}
.modal {
  overflow-y: scroll;
}
</style>
