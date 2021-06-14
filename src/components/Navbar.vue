<template>
  <nav class="grey darken-4">
    <v-app-bar class="grey darken-4">
      <v-toolbar-title>
        <router-link to="/">
          <v-img src="@/assets/logo.jpg" alt="logo" height="40" width="100" />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <p v-if="isLogged" class="white--text">Ciao, {{ userData.name }}!</p>
      <v-spacer />
      <div v-if="isLogged">
        <v-btn router :to="links[0].userPage" class="mx-2">
          Pagina personale
        </v-btn>
        <v-btn @click="logOut">
          <span>Log out</span>
          <v-icon right>
            logout
          </v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn router :to="links[0].login" class="mx-2">
          <span>Log in</span>
          <v-icon right>
            login
          </v-icon>
        </v-btn>
        <v-btn router :to="links[0].signup">
          <span>Sign up</span>
          <v-icon right>
            login
          </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import router from "../router/router";
export default {
  data() {
    return {
      links: [
        {
          login: "/login",
          signup: "/signup",
          userPage: "/userPage"
        }
      ]
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters["CurrentUser/isAuthenticated"];
    },
    userData: {
      get() {
        return JSON.parse(localStorage.getItem("user"));
      }
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("CurrentUser/logOut");
      router.push("/");
    }
  }
};
</script>
