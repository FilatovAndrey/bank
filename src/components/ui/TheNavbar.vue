<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";
const uStore = useUserStore() 

const a = true

</script>
<template>
  <nav class="navbar">
    <h3>Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/help">Помощь</router-link>
      </li>
      <li>
        <a @click="uStore.setShowSideBar(a)" href="#">Сообщения</a>
      </li>
      <li>
        <a >Выход</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
