<template>
  <Carousel :autoplay="8000" :wrap-around="true">
    <Slide v-for="image in images" :key="image.id">
      <div class="carousel__item">
        <img
          class="chogan rounded-lg"
          :src="getImage(image.url)"
          :alt="slide"
        />
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: "http://localhost:8080/src/assets/images/parfum_chogan.jpg",
        },
        { id: 2, url: "parfum.jpg" },
        { id: 3, url: "parfum_chogan.jpg" },
      ],
    };
  },
  methods: {
    getImage(imagePath) {
      return require(imagePath);
    },
  },
});
</script>
<style scoped>
.carousel__item {
  min-height: 200px;
  width: 65%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chogan {
  cursor: zoom-in;
}
</style>