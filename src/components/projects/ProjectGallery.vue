<script>
import axios from "axios";
export default {
  props: ["projectImages"],
  data() {
    return {
      news: [],
    };
  },

  mounted() {
    axios.get(this.$store.state.url + "/api/news/").then((res) => {
      this.news = res.data;
    });
  },
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
    <div class="mb-10 sm:mb-0" v-for="data in news" :key="data.id">
      <img
        :src="data.image"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        alt="{{ data.title }}"
      />
    </div>
  </div>
</template>
