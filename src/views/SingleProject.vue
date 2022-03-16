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
  methods: {},
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
                >La Date</span
              >
            </div>
          </div>
        </div>
        <div>{{ n.description }}</div>
        <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
          <div class="mb-10 sm:mb-0">
            <img
              :src="'http://localhost:3030/' + n.image"
              :alt="n.title"
              class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
