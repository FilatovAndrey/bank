<script setup>


</script>
<template>
  <v-container class="v c">
    <v-card>
      <div>
        <v-expansion-panels tag="h4">
          <v-expansion-panel 
            title="Что есть в данной системе"
            text="Тут есть все,для того,чтобы смотреть,какие заявки человек добавлял"
          ></v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels variant="accordion" tag="h4">
          <v-expansion-panel
            title="Как тут все реализовано"
            text="Все реализовано на Vuetify 3"
          ></v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
  </v-container>
</template>
<style scoped>
.c{
  background: #E0E0E0;
  height: 100vh;
}
</style>
