<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <UserCard />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="8"
        lg="9"
      >
        <v-card>
          <v-card-title>使用者清單</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="user in userStore.users"
                :key="user.id"
              >
                {{ user.name }}
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
</script>
