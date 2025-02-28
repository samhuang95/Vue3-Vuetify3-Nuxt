<template>
  <div
    class="d-flex justify-center"
    style="width: 100%"
  >
    <div
      class="dx-card-container"
      style="width: 400px"
    >
      <!-- Title -->
      <div class="dx-row-gap4-spacing">
        <div class="h5-bold">Verdor Registration</div>
        <div class="body-2">Join our network and get start today!</div>
      </div>
      <!-- Input -->
      <div>
        <v-text-field
          label="Email"
          placeholder="Enter your email address"
          variant="outlined"
          v-model="emailAddress"
        ></v-text-field>
      </div>
      <!-- Alert -->
      <div v-if="alertFlag">
        <v-alert
          text="This email is invalid or already registered. Please use a different email to continue."
          type="error"
          variant="tonal"
        ></v-alert>
      </div>
      <!-- button -->
      <div class="dx-row-gap16-spacing">
        <div>
          <v-btn
            variant="flat"
            color="#5167f6"
            class="dx-lg-button"
            @click="handleInvalidEmail()"
          >
            Continue
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <div class="mr-2">Already have an account?</div>
          <div class="primary-500 pointer">
            <NuxtLink to="/sign-in">Sign in here</NuxtLink>
          </div>
        </div>
      </div>
      <!-- OR -->
      <div class="d-flex align-center">
        <div class="divider-line" />
        <div class="mx-3 neutral-400">OR</div>
        <div class="divider-line" />
      </div>
      <!-- Google Login -->
      <div class="dx-row-gap16-spacing">
        <v-btn
          class="dx-lg-button"
          variant="outlined"
        >
          <img
            :src="googleLogo"
            alt="Google Logo"
            width="24"
            height="24"
            class="mr-2"
          />
          Continue with Google
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref } from 'vue';

import googleLogo from '../assets/css/icons/google-logo.svg';
import { validateEmail } from '@/utils/validation';

definePageMeta({
  layout: 'auth',
});

useHead({
  title: 'Sign up',
});

const emailAddress = ref('');

let alertFlag = ref(false);

const handleInvalidEmail = () => {
  if (validateEmail(emailAddress.value)) {
    alertFlag.value = false;
  } else {
    alertFlag.value = true;
  }
};
</script>
