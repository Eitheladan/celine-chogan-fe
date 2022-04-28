<script>
import Tiptap from "../reusable/Tiptap.vue";
export default {
  props: ["news"],
  components: { Tiptap },
};
</script>

<template>
  <router-link
    :to="'/news/single-news/' + news._id"
    class="
      rounded-xl
      shadow-lg
      hover:shadow-xl
      cursor-pointer
      mb-10
      md:mb-0
      bg-secondary-light
      dark:bg-ternary-dark
    "
    aria-label="Single News"
  >
    <div>
      <img
        :src="this.$store.state.url + '/' + news.image"
        :alt="news.title"
        class="rounded-l border-none"
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
      >
        <Tiptap :data="news.description"
      /></span>
    </div>
  </router-link>
</template>

<style scoped>
img {
  width: 540px;
  height: 330px;
}
</style>
