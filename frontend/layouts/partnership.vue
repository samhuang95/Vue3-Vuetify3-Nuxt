<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      permanent
      class="px-5 py-6"
      >
      
      <div class="custom-drawer">
        <div class="drawer-header">
          <img src="../public/DXM_bk.svg" alt="" style="height: 29.8px; width: 185px;">
          <p class="text-center neutral-400 font-weight-bold">Vendor Portal</p>
        </div>

        <v-list class="drawer-content">
          <div v-for="item in drawerContentItems" :key="item">
            <v-list-item :prepend-icon="item.props.prependIcon" :title="item.title" :to="item.to" :disabled="item.props.disabled"></v-list-item>
          </div>
          <v-divider></v-divider>
          <div v-for="item in drawerContentItems2" :key="item">
            <v-list-item :prepend-icon="item.props.prependIcon" :title="item.title" :to="item.to" :disabled="item.props.disabled"></v-list-item>
          </div>
        </v-list>

        <v-list class="drawer-footer">
          <v-list-item
            lines="two"
            prepend-avatar=""
            :title="tmpUserName"
            :subtitle="tmpVendorName"
          ></v-list-item>

          <v-divider></v-divider>
          <div v-for="item in drawerFooterItems" :key="item">
            <v-list-item :prepend-icon="item.props.prependIcon" :title="item.title" :to="item.to" :disabled="item.props.disabled"></v-list-item>
          </div>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-app-bar height="96" :elevation="0">
      <div class="d-flex flex-column w-100 h-[96px]">
        <!-- 第一行 -->
        <div class="d-flex align-center flex-1 px-5">
          <p class="font-weight-medium">Hello, {{ tmpUserName }}</p>
          <v-spacer></v-spacer>
          <v-btn prepend-icon="mdi-logout " variant="outlined" size="small">
            Logout
          </v-btn>
        </div>

        <!-- 第二行 -->
        <div class="d-flex align-center flex-1">
          <v-breadcrumbs>
            <template v-for="(item, i) in breadcrumbs">
              <!-- 第一個 Item 顯示 icon -->
              <v-breadcrumbs-item v-if="i === 0" :key="item.text" :href="item.href">
                <span class="d-flex align-center">
                  <v-icon left>{{ item.icon }}</v-icon>
                </span>
              </v-breadcrumbs-item>

              <!-- 後續 Items 不使用 icon，並顯示 "/" 作為間隔 -->
              <template v-else>
                <v-breadcrumbs-divider :key="'divider-' + i">/</v-breadcrumbs-divider>
                <v-breadcrumbs-item :key="item.text" :href="item.href">
                  {{ item.text }}
                </v-breadcrumbs-item>
              </template>
            </template>
          </v-breadcrumbs>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PartnershipLayout'
});

const drawer = true;

const drawerContentItems = [
  {
    title: "Home",
    to: "/",
    props: {
      prependIcon: "mdi-home",
      disabled: true, // 禁用
    },
  },
  {
    title: "Partnership",
    to: "/",
    props: {
      prependIcon: "mdi-account-multiple",
      active: true, // 高亮顯示
    },
  },
  {
    title: "Co-Sales",
    to: "/",
    props: {
      prependIcon: "mdi-briefcase",
    },
  },
  {
    title: "Resources",
    to: "/",
    props: {
      prependIcon: "mdi-folder",
    },
  },
  {
    title: "Projects",
    to: "/",
    props: {
      prependIcon: "mdi-file-multiple",
      disabled: true, // 禁用
    },
  },
  {
    title: "Reports",
    to: "/",
    props: {
      prependIcon: "mdi-file-multiple",
      disabled: true, // 禁用
    },
  },
  {
    title: "Co-Marketing",
    to: "/",
    props: {
      prependIcon: "mdi-email",
      disabled: true, // 禁用
    },
  },
];

const drawerContentItems2 = [
  {
    title: "Messages",
    to: "/",
    props: {
      prependIcon: "mdi-message",
      disabled: true, // 禁用
    },
  },
  {
    title: "Helpdesk",
    to: "/",
    props: {
      prependIcon: "mdi-help-circle",
      disabled: true, // 禁用
    },
  },
  {
    title: "Financial",
    to: "/",
    props: {
      prependIcon: "mdi-currency-usd",
      disabled: true, // 禁用
    },
  },
]

const drawerFooterItems = [
  {
    title: "Profile",
    to: "/",
    props: {
      prependIcon: "mdi-file-table-box-multiple",
      disabled: false, // 禁用
    },
  },
  {
    title: "Settings",
    to: "/",
    props: {
      prependIcon: "mdi-cog-outline",
      disabled: true, // 禁用
    },
  },
]

const breadcrumbs = [
  { text: "Home", href: "/", icon: "mdi-home" },
  { text: "Products", href: "/products", icon: "mdi-slash-forward" },
  { text: "Electronics", href: "/products/electronics", icon: "mdi-slash-forward" },
]

const tmpUserName = "User Name";
const tmpVendorName = "Vendor Name"
</script>

<style scoped>
/* 如果需要更多自定義樣式 */
.custom-drawer {
  display: flex;
  flex-direction: column;
  height: 100%; /* 讓 drawer 內容佔滿整個高度 */
}

.drawer-header {
  width: 185px;
  flex-shrink: 0; /* 避免被壓縮 */
}

.drawer-content {
  flex-grow: 1; /* 讓它填滿剩餘空間 */
  overflow-y: auto; /* 若內容過多，允許滾動 */
}

.drawer-footer {
  flex-shrink: 0; /* 底部區域保持最小高度，不會被壓縮 */
}
</style>
