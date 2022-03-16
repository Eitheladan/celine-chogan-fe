<script>
import feather from "feather-icons";
export default {
  name: "Projects",
  data() {
    return {};
  },
  mounted() {
    feather.replace();
    console.log(this.$route.params.id);
  },
  updated() {
    feather.replace();
  },
  methods: {
    formatDate(date) {
      if (date) {
        return date.slice(0, 10);
      } else {
        return "Undefined";
      }
    },
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <div v-for="n in $store.state.news" :key="n.id">
      <div v-if="n._id == $route.params.id">
        <div>
          <p
            class="
              font-general-medium
              text-left text-3xl
              sm:text-4xl
              font-bold
              text-primary-dark
              dark:text-primary-light
              mt-14
              sm:mt-20
              mb-7
            "
          >
            {{ n.title }}
          </p>
          <div class="flex">
            <div class="flex items-center mr-10">
              <i
                data-feather="clock"
                class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
              ></i>
              <span
                class="
                  font-general-medium
                  ml-2
                  leading-none
                  text-primary-dark
                  dark:text-primary-light
                "
                >{{ formatDate(n.date) }}</span
              >
            </div>
          </div>
        </div>

        <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
          <div class="w-full sm:w-2/6 mb-7 sm:mb-0">
            <img
              :src="$store.state.url + n.image"
              :alt="n.title"
              class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            />
          </div>
          <div class="w-full sm:w-4/6 text-left">
            <p
              class="
                font-general-regular
                text-lg text-primary-dark
                dark:text-primary-light
              "
            >
              {{ n.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
