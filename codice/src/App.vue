<template>
  <v-app class="grey darken-4">
    <navbar v-if="!['login', 'signup'].includes($route.name)" />
    <v-main class="grey darken-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
