<template>
  <v-container class="my-5">
    <v-row>
      <v-col
        v-for="opera in operas"
        :key="opera.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="text-center">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title v-text="opera.title" />

              <v-list-item-subtitle
                class="text--primary"
                v-text="opera.description"
              />
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            >
              <img
                src="@/assets/3.jpg"
              >
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions class="justify-center">
            <v-btn
              router
              :to="links[0].operaDetails"
              rounded
            >
              Visualizza opera
            </v-btn>
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
      selected: [],
      links: [{
        operaDetails: "/viewOperaData",
      }],
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
  },
};
</script>
