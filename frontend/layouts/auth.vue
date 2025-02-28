<template>
  <v-app>
    <div style="padding-top: 52px; padding-bottom: 40px">
      <v-row no-gutters style="width: 100%;">
        <v-col cols="12">
          <div class="d-flex justify-center">
            <div>
              <img src="../public/DXM_bk.svg" alt="" style="height: 32.2px;">
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <div class="log-sub-title">
              Verdor Portal
            </div>
          </div>
        </v-col>
      </v-row>

    </div>

    <v-main>
        <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AuthLayout'
});
</script>

