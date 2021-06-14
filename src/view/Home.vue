<template>
  <v-container class="my-5">
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="opera in operas"
        :key="opera.name"
      >
        <v-card class="text-center">
          <v-card-text>
            <div class=" text-subtitle-1 ">{{ opera.name }}</div>
            <div>{{ opera.price }}</div>
          </v-card-text>
          <v-card-actions class="text-center">
            <v-btn rounded>Visualizza opera</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1
    };
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/homeOperas"];
      }
    }
  },
  created() {
    this.$store.dispatch("nftService/getHomeOperas");
  }
};
</script>
