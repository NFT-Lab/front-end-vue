<template>
  <v-container fluid>
    <v-row fill-height>
      <v-col
        v-for="visiblePage in visiblePages"
        :key="visiblePage.title"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="text-center">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title v-text="visiblePage.title" />
              <v-list-item-subtitle v-text="visiblePage.description" />
              <v-list-item-subtitle>
                {{ visiblePage.price + " " + visiblePage.currency }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <img
                src="https://cloudflare-ipfs.com/ipfs/QmX5FkTotxKRziu5a7NXz16YeHrVgYw98RzTgNWvi8HmDC"
              />
              <!--qua metto un id preciso perchè stoplight mi torna parole in latino-->
            </v-list-item-avatar>
          </v-list-item>
          <v-card-actions class="justify-center">
            <ViewOperaHome :visible-page="visiblePage" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="Math.ceil(pages.length / perPage)" />
  </v-container>
</template>

<script>
import ViewOperaHome from "@/components/ViewOperaHome.vue";

export default {
  components: {
    ViewOperaHome
  },
  data() {
    return {
      page: 1,
      perPage: 5,
      pages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      selected: []
    };
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/homeOperas"];
      }
    },
    visiblePages: {
      get() {
        var operaToSee = new Array();
        var init = this.page * this.perPage - this.perPage;
        var end = this.page * this.perPage;
        operaToSee = this.operas.slice(init, end);
        return operaToSee;
      }
    }
  },
  created() {
    this.$store.dispatch("nftService/getHomeOperas");
  }
};
</script>
