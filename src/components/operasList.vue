<template>
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
      active-class="amber accent-4--text"
    >
      <template v-for="opera in operas">
        <v-list-item :key="opera.title">
          <template>
            <v-list-item-content>
              <v-list-item-title>
              <ShowOpera v-bind:opera="opera"/>
              </v-list-item-title>
              <v-list-item-subtitle
                class="text--primary"
                v-text="opera.description"
              />
            </v-list-item-content>
            <v-list-item-action>
              <editOpera v-bind:opera="opera"/>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider :key="opera.title"></v-divider>
      </template>
    </v-list-item-group>
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
    }
  },
  computed: {
    operas: {
      get() {
        return this.$store.getters["nftService/operas"];
      }
    },
  },
  created() {
    this.$store.dispatch("nftService/userOperas");
  },
};
</script>
