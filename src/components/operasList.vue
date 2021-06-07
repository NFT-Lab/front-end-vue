<template>
  <ul>
    <li class="white--text" v-for="opera in operas" :key="opera.name">
      {{ opera.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "titolo",
          value: "titolo"
        },
        {
          text: "prezzo",
          value: "prezzo"
        }
      ]
    };
  },
  computed: {
    operas: {
      get() {
        console.log(this.$store.getters["CurrentUser/operas"]);
        return this.$store.getters["CurrentUser/operas"];
      }
    }
  },
  created() {
    this.$store.dispatch("CurrentUser/userOperas");
  }
};
</script>
