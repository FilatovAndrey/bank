<script setup>
import { useRouter } from "vue-router";
import Sidebar from "./components/ui/TheSidebar.vue";
import RequestTable from "./components/request/RequestTable.vue";
import Navbar from "./components/ui/TheNavbar.vue";
import CreateRequest from "./components/request/CreateRequest.vue";
import { useUserStore } from "./stores/user";
import { computed, ref } from "vue";

const uStore = useUserStore();
uStore.userJson();
const a = computed(()=>{
  return uStore.getShowReq
})
</script>

<template>
  <v-app class="w">
    <v-app-bar>
      <Navbar></Navbar>
    </v-app-bar>

    <v-main>
      <RouterView />
      <Sidebar v-if="uStore.getShowSideBar"></Sidebar>
      <CreateRequest v-if="a"></CreateRequest>
    </v-main>
  </v-app>
</template>

<style scoped>
.w {
  background: #616161;
}
</style>
