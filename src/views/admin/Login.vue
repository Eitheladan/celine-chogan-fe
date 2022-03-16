<template>
  <div>
    <transition name="fade">
      <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
        <!-- Modal body background as backdrop -->
        <div
          v-show="modal"
          @load="showModal()"
          class="
            bg-filter bg-black bg-opacity-50
            fixed
            inset-0
            w-full
            h-full
            z-20
          "
        ></div>
        <!-- Modal content -->
        <main class="flex flex-col items-center justify-center h-full w-full">
          <transition name="fade-up-down">
            <div v-show="modal" class="modal-wrapper flex items-center z-30">
              <div
                class="
                  modal
                  max-w-md
                  mx-5
                  xl:max-w-xl
                  lg:max-w-xl
                  md:max-w-xl
                  bg-secondary-light
                  dark:bg-primary-dark
                  max-h-screen
                  shadow-lg
                  flex-row
                  rounded-lg
                  relative
                "
              >
                <div
                  class="
                    modal-header
                    flex
                    justify-between
                    gap-10
                    p-5
                    border-b border-ternary-light
                    dark:border-ternary-dark
                  "
                >
                  <h5 class="text-primary-dark dark:text-primary-light text-xl">
                    Connection en Administrateur
                  </h5>
                </div>
                <div class="modal-body p-5 w-full h-full">
                  <form @submit.prevent="login" class="max-w-xl m-4 text-left">
                    <div class="mt-6">
                      <input
                        v-model="email"
                        class="
                          w-full
                          px-5
                          py-2
                          border-1 border-gray-200
                          dark:border-secondary-dark
                          rounded-md
                          text-md
                          bg-secondary-light
                          dark:bg-ternary-dark
                          text-primary-dark
                          dark:text-ternary-light
                        "
                        id="login"
                        name="login"
                        type="text"
                        required=""
                        placeholder="Votre Login"
                        aria-label="Login"
                      />
                    </div>
                    <div class="mt-6">
                      <input
                        v-model="password"
                        class="
                          w-full
                          px-5
                          py-2
                          border-1 border-gray-200
                          dark:border-secondary-dark
                          rounded-md
                          text-md
                          bg-secondary-light
                          dark:bg-ternary-dark
                          text-primary-dark
                          dark:text-ternary-light
                        "
                        id="password"
                        name="password"
                        type="password"
                        required=""
                        placeholder="Votre mot de passe"
                        aria-label="Password"
                      />
                    </div>
                    <div class="mt-6 pb-4 sm:pb-1">
                      <Button
                        title="Valider"
                        class="
                          px-5
                          sm:px-6
                          py-2
                          sm:py-2.5
                          text-white
                          bg-indigo-500
                          hover:bg-indigo-600
                          rounded-md
                          focus:ring-1 focus:ring-indigo-900
                          duration-500
                        "
                        type="submit"
                        aria-label="Submit Request"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </transition>
        </main>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
import feather from "feather-icons";
import Button from "../../components/reusable/Button.vue";
export default {
  name: "Login",
  components: { Button },
  data() {
    return {
      role: [],
      email: "",
      password: "",
      success: "",
      error: "",
      modal: true,
    };
  },
  mounted() {
    feather.replace();
    if (this.$store.state.login === true) {
      this.$router.push("/admin/dashboard");
    }
  },
  updated() {
    feather.replace();
  },
  methods: {
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
    // modification du type pour l'input "password"
    // et changement de la classe pour l'icone eye
    changer() {
      if (this.e == true) {
        document.getElementById("typePasswordX").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "fa fa-eye-slash");
        this.e = false;
      } else {
        document
          .getElementById("typePasswordX")
          .setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "fa fa-eye");
        this.e = true;
      }
    },
    login() {
      axios
        .post(this.$store.state.url + "/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data));
            const user = VueJwtDecode.decode(res.data.token);
            this.$store.state.user = user;
            console.log(this.$store.state.user);
            this.$store.state.login = true;
            location.reload();
          }
          return res.data;
        })
        .catch((err) => {
          this.message = "error";
          err;
        });
    },
  },
};
</script>

<style scoped>
</style>