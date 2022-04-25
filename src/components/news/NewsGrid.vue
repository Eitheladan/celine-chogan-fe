<script>
import NewsSingle from "./NewsSingle.vue";
export default {
  components: { NewsSingle },
  data: () => {
    return {
      newsHeading: "Dernières Actualités",
    };
  },
};
</script>

<template>
  <!-- News grid -->
  <section class="pt-10 sm:pt-14">
    <!-- News grid title -->
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div v-for="news in this.$store.state.news.slice(0, 3)" :key="news.id">
        <NewsSingle :news="news" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
