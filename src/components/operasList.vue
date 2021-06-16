<template>
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
      active-class="amber accent-4--text"
    >
      <template v-for="opera in operas">
        <v-list-item :key="opera.title">
          <ShowOpera :opera="opera" />
          <v-list-item-action>
            <editOpera :opera="opera" />
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="opera.title" />
      </template>
    </v-list-item-group>
    <v-pagination
      v-model="page"
      :length="Math.ceil(pages.length/perPage)"
    />
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
      selected: [],
      page: 1,
      perPage: 4,
      pages: [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    }
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/operas"];
      }
    },
    visiblePages () {
      return this.pages.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    }
  },
  created() {
    this.$store.dispatch("nftService/userOperas");
  },
};
</script>
