<script>
export default {
  props: ["news"],
};
</script>

<template>
  <router-link
    :to="'/projects/single-project/' + news._id"
    class="
      rounded-xl
      shadow-lg
      hover:shadow-xl
      cursor-pointer
      mb-10
      sm:mb-0
      bg-secondary-light
      dark:bg-ternary-dark
    "
    aria-label="Single Project"
  >
    <div>
      <img
        :src="'https://celine-chogan-backend.herokuapp.com/' + news.image"
        :alt="news.title"
        class="rounded-t-xl border-none"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="
          font-general-semibold
          text-xl text-ternary-dark
          dark:text-ternary-light
          font-semibold
          mb-2
        "
      >
        {{ news.title }}
      </p>
      <span
        class="
          font-general-medium
          text-lg text-ternary-dark
          dark:text-ternary-light
        "
        >{{ news.description }}</span
      >
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>
