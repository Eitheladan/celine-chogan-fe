<script>
import NewsSingle from "../components/projects/NewsSingle.vue";

export default {
  name: "News",
  components: {
    NewsSingle,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Projects grid -->
    <section class="pt-10 sm:pt-14">
      <!-- Projects grid title -->
      <div class="text-center">
        <p
          class="
            font-general-semibold
            text-2xl
            sm:text-5xl
            font-semibold
            mb-2
            text-ternary-dark
            dark:text-ternary-light
          "
        >
          {{ newsHeading }}
        </p>
      </div>
      <!-- News single -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
      >
        <div v-for="news in this.$store.state.news" :key="news.id">
          <NewsSingle :news="news" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
