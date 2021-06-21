<template>
  <v-container fluid>
    <v-row class="pa-1 d-flex justify-center" dense>
      <v-col cols="6"
        sm="12"
        xs="12"
        md="6" class="justify-center align-center">
          <v-card dark>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-avatar size="96">
                    <v-icon size="96" color="amber accent-4">
                      person
                    </v-icon>
                  </v-avatar>
                  {{ userData.name + " " + userData.surname }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Data di nascita:
                  {{ userData.dob }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Email:
                  {{ userData.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Wallet Address:
                  <a :href="'https://www.cointracker.io/wallet/bitcoin?address='+userData.wallet" target="_blank">{{userData.wallet}}</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <editUserData />
            </v-card-actions>
            <v-card-actions>
              <editUserPassword />
            </v-card-actions>
          </v-card>
      </v-col>
      <v-col cols="6"
        sm="12"
        md="6"
        xs="12" class="pa-3">
        <operasList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import operasList from "@/view/operasList.vue";
import editUserData from "@/components/editUserData.vue";
import editUserPassword from "@/components/editUserPassword.vue";

export default {
  name: "UserPage",
  components: {
    operasList,
    editUserData,
    editUserPassword
  },
  data() {
    return {
      links: [
        {
          uploadOpera: "/uploadOpera"
        }
      ]
    };
  },
  computed: {
    userData: {
      get() {
        return this.$store.getters["CurrentUser/user"];
      }
    }
  }
};
</script>
