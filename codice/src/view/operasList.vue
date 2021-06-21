<template>
  <v-list two-line dark>
    <v-list-item-group v-model="selected" active-class="amber accent-4--text">
      <template v-for="visiblePage in visiblePages">
        <v-list-item :key="visiblePage.id">
          <ShowOpera :visiblePage="visiblePage" />
          <v-list-item-action>
            <editOpera :visiblePage="visiblePage" />
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="visiblePage.id" />
      </template>
    </v-list-item-group>
    <v-row class="pa-3">
       <v-col cols="6"
        sm="12"
        md="6">
    <v-pagination v-model="page" :length="Math.ceil(pages.length / perPage)" color="amber accent-4" />
    </v-col>
    <v-col>
<v-btn router :to="links[0].uploadOpera" color="amber accent-4" class="black--text">
          Carica una nuova opera
        </v-btn>
    </v-col>
    </v-row>
  </v-list>
</template>

<script>
import ShowOpera from "@/components/ShowOpera.vue";
import editOpera from "@/components/editOpera.vue";

export default {
  components: {
    ShowOpera,
    editOpera
  },
  data() {
    return {
      links: [
        {
          uploadOpera: "/uploadOpera"
        }
      ],
      selected: [],
      page: 1,
      perPage: 4,
      pages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    };
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/operas"];
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
    this.$store.dispatch("nftService/userOperas");
  }
};
</script>
