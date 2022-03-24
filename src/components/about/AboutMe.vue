<script>
import Tiptap from "../reusable/Tiptap.vue";
export default {
  components: { Tiptap },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-2/6 mb-7 sm:mb-0">
      <img src="@/assets/images/profile.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-4/6 text-left">
      <p
        v-for="i in $store.state.adminInfos"
        :key="i._id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        <Tiptap :data="i.infos" />
      </p>
    </div>
  </div>
</template>
