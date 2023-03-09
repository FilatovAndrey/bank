<script setup>
import { useUserStore } from '../stores/user';
const uStore = useUserStore()
</script>
<template>
  <v-card>
    <h3>Новая заявка создана</h3>
    <p>Имя - {{ uStore.getUsers[0].name }}</p>
    <p>Телефон - {{ uStore.getUsers[0].phone }}</p>
    <p>Сумма - {{ uStore.getUsers[0].sum }}</p>
    <p>Статус - {{ uStore.getUsers[0].status }}</p>
    <v-btn
      @click="uStore.setShowRequest(showRequest)"
      color="success"
      class="mt-8"
      >Закрыть</v-btn
    >
  </v-card>
</template>
<style scoped></style>
