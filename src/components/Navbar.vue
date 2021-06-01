<template>
  <nav class="grey darken-4">
    <v-app-bar class="grey darken-4">
      <v-toolbar-title>
        <img src="@/assets/logo.jpg" alt="logo" height="40" />
        <span class="white--text">NTFLab</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn router :to="links[0].login">
        <span>{{ btnWorld }}</span>
        <v-icon right>{{ icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      icon: "login",
      btnWorld: "Log in",
      name: "",
      links: [{ login: "/login" }],
      userData: localStorage.getItem("User"),
    };
  },
  methods: {
    logOut() {
      localStorage.clear("User");
    },
  },
};
</script>
