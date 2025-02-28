<template>
  <v-card>
    <v-card-title>
      <v-icon left>mdi-account</v-icon>
      個人資料
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="姓名"
            :value="userStore.username"
            @input="updateName"
            prepend-icon="mdi-account"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="年齡"
            :value="userStore.userAge"
            readonly
            prepend-icon="mdi-calendar"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();

const updateName = (event) => {
  userStore.updateUsername(event.target.value);
};
</script>
