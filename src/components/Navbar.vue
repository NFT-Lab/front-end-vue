<template>
  <nav class="grey darken-4">
    <v-app-bar class="grey darken-4">
      <v-toolbar-title>
        <router-link to="/"
          ><v-img src="@/assets/logo.jpg" alt="logo" height="40" width="100"
        /></router-link>
      </v-toolbar-title>
      <v-spacer />
      <p>
        <router-link to="/uploadOpera">
          Carica nuova opera
        </router-link>
      </p>
      <v-spacer />
      <v-btn v-if="isLogged" @click="logOut">
        <span>Log out</span>
        <v-icon right>
          logout
        </v-icon>
      </v-btn>
      <div v-else>
        <v-btn router :to="links[0].login">
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
          signup: "/signup"
        }
      ],
      userData: localStorage.getItem("User")
    };
  },
  computed: {
    isLogged() {
      console.log(this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logOut() {
      this.$store.dispacth("logOut");
      router.push("/");
    }
  }
};
</script>
