<template>
  <v-list width="70%">
    <v-list-item class="white--text" v-for="opera in operas" :key="opera.name">
      <v-list-item-title> {{ opera.name }}</v-list-item-title>
      <v-list-item-icon>
        <v-icon>
          edit
        </v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
  <!--<ul>
    <li class="white--text" v-for="opera in operas" :key="opera.name">
      {{ opera.name }}
    </li>
  </ul>-->
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
        return this.$store.getters["CurrentUser/operas"];
      }
    }
  },
  created() {
    this.$store.dispatch("CurrentUser/userOperas");
  }
};
</script>
