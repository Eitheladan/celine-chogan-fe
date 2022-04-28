<script>
import Button from "../../components/reusable/Button.vue";
import Tiptap from "../../components/reusable/Tiptap.vue";
import axios from "axios";
import authHeader from "../../service/auth";
export default {
  name: "DashBoard",
  components: { Button, Tiptap },
  data() {
    return {
      login: false,
      showModal: false,
      news: this.$store.state.news,
    };
  },
  mounted() {
    this.$store.dispatch("getNewsAction");
    // vérification si la personne est autorisé à accéder à la page
    if (this.$store.state.login === false) {
      this.$router.push("/");
    }
  },
  methods: {
    // Formatage des données pour réduire le nombre de caractère à l'affichage
    formatNews(news) {
      if (news) {
        return news.slice(0, 15) + "...";
      } else {
        return "Undefined";
      }
    },
    // fonction pour supprimer une news
    deleteNews(id) {
      axios
        .delete(this.$store.state.url + "api/news/" + id, {
          headers: authHeader(),
        })
        .then(() => this.$router.push("/admin"))
        .catch();
    },
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="mt-10 sm:mt-20 flex justify-center">
      <router-link
        to="/admin/addnews"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="Ajout Actualité"
      >
        <Button title="Ajout Actualité" />
      </router-link>
      <router-link
        to="/admin/updateinfos/623c3bc66b237e2061e14add"
        class="
          ml-5
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="update Infos"
      >
        <Button title="update Infos" />
      </router-link>
    </div>
    <div>
      <table
        class="
          table-fixed
          center
          w-4/5
          text-primary-dark
          dark:text-primary-light
        "
      >
        <thead>
          <tr class="bg-indigo-500 text-center">
            <th
              class="
                w-1/12
                min-w-[160px]
                text-lg
                font-semibold
                text-white
                py-4
                lg:py-7
                px-3
                lg:px-4
                border-l border-transparent
              "
            >
              Image
            </th>
            <th
              class="
                w-2/12
                min-w-[160px]
                text-lg
                font-semibold
                text-white
                py-4
                lg:py-7
                px-3
                lg:px-4
                border-l border-transparent
              "
            >
              Titre
            </th>
            <th
              class="
                w-5/12
                min-w-[160px]
                text-lg
                font-semibold
                text-white
                py-4
                lg:py-7
                px-3
                lg:px-4
                border-l border-transparent
              "
            >
              Description
            </th>
            <th
              class="
                w-2/12
                min-w-[160px]
                text-lg
                font-semibold
                text-white
                py-4
                lg:py-7
                px-3
                lg:px-4
                border-l border-transparent
              "
            ></th>
            <th
              class="
                w-2/12
                min-w-[160px]
                text-lg
                font-semibold
                text-white
                py-4
                lg:py-7
                px-3
                lg:px-4
                border-l border-r border-transparent
              "
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in $store.state.news" :key="n.id">
            <td
              class="
                center
                font-medium
                py-5
                px-2
                bg-[#F3F6FF]
                border-b border-l border-[#E8E8E8]
              "
            >
              <img
                :src="$store.state.url + n.image"
                :alt="n.title"
                class="rounded-t-xl border-none"
                width="100"
              />
            </td>
            <td
              class="
                text-center text-dark
                font-medium
                text-base
                py-5
                px-2
                bg-[#F3F6FF]
                border-b border-l border-[#E8E8E8]
              "
            >
              {{ formatNews(n.title) }}
            </td>
            <td
              class="
                text-center text-dark
                font-medium
                text-base
                py-5
                px-2
                bg-[#F3F6FF]
                border-b border-l border-[#E8E8E8]
              "
            >
              <Tiptap :data="n.description" />
            </td>
            <td
              class="
                text-center text-dark
                font-medium
                text-base
                py-5
                px-2
                bg-[#F3F6FF]
                border-b border-l border-[#E8E8E8]
              "
            >
              <router-link :to="'/admin/updatenews/' + n._id">
                <button
                  class="
                    hover:shadow-xl
                    bg-indigo-500
                    hover:bg-indigo-600
                    focus:ring-1 focus:ring-indigo-900
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                  "
                >
                  MAJ
                </button>
              </router-link>
            </td>
            <td
              class="
                text-center text-dark
                font-medium
                text-base
                py-5
                px-2
                bg-[#F3F6FF]
                border-b border-l border-r border-[#E8E8E8]
              "
            >
              <button
                class="
                  hover:shadow-xl
                  bg-indigo-500
                  hover:bg-indigo-600
                  focus:ring-1 focus:ring-indigo-900
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full
                "
                @click="deleteNews(n._id)"
              >
                Suppr.
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  margin: 50px auto;
}
</style>