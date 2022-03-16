<script>
import AppBanner from "@/components/shared/AppBanner";
import NewsGrid from "../components/projects/NewsGrid.vue";

export default {
  name: "Home",
  components: {
    AppBanner,
    NewsGrid,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8" />

    <!-- News -->
    <NewsGrid />
  </div>
</template>

<style scoped></style>
