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
        <div class="h5-bold">Welcome Back</div>
      </div>
      <!-- Input Email -->
      <div>
        <v-text-field
          label="Email"
          placeholder="Enter your email address"
          variant="outlined"
          v-model="emailAddress"
        ></v-text-field>
      </div>
      <!-- Input Password -->
      <div class="dx-row-gap4-spacing">
        <v-text-field
          label="Password"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="showPassword ? 'text' : 'password'"
          hint="At least 8 characters"
          name="input-10-1"
          counter
          @click:append-inner="showPassword = !showPassword"
          placeholder="Enter your Password"
          variant="outlined"
          v-model="password"
        ></v-text-field>

        <div class="primary-500 pointer">Forgot Password?</div>
      </div>
      <!-- Alert -->
      <div v-if="alertFlag">
        <v-alert
          text="Incorrect email or password. Please try again."
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
            @click="handleInvalidAccount"
          >
            Sign In
          </v-btn>
        </div>
        <div class="d-flex justify-center">
          <div class="mr-2">Don't have an account?</div>
          <div class="primary-500 pointer">
            <NuxtLink to="/sign-up">Sign up here</NuxtLink>
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

import googleLogo from '../../assets/css/icons/google-logo.svg';

import { emailLogin_api } from '../../service/auth/apis_emailLogin';
import { emailLogin_msg } from '../../service/auth/msgs_emailLogin';

definePageMeta({
  layout: 'auth',
});

useHead({
  title: 'Sign in',
});

let emailAddress = ref('');
let password = ref('');

let showPassword = ref(false);

let alertFlag = ref(false);

const passwordRules = {
  required: (value: string) => !!value || 'Required.',
  min: (value: string) => value?.length >= 8 || 'Min 8 characters',
  emailMatch: () => `The email and password you entered don't match`,
};

const handleInvalidAccount = () => {
  if (validateEmail(emailAddress.value)) {
    alertFlag.value = false;
    loginFunction(emailAddress.value, password.value);
  } else {
    alertFlag.value = true;
  }
};

const loginFunction = async (emailAddress: string, password: string) => {
  let reqMsg = emailLogin_msg(emailAddress, password);
  try {
    const response = await emailLogin_api(reqMsg);
    if (response.message == '') {
      console.log('response.data::::', response.data);
      return true;
    }
  } catch (error) {
    console.error('loginFunction error:', error);
    throw error;
  }
};
</script>
