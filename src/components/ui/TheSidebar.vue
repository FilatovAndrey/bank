<script setup></script>

<template>
  <v-container>
    <v-card class="sidebar">
    
        <span class="sidebar-close"></span>

        <div class="sidebar-content">
          <p>
            Добро пожаловать в систему по учету заявок в нашем банке. Здесь вы
            найдете исчерпывающую информацию про систему и заявки
          </p>
        </div>
      </v-card>
   
  </v-container>
</template>

<style scoped>
.sidebar {
    position: fixed;
    width: 300px;
    right:0 ;
    top: 50px;
    bottom: 0;
    background: #ccc;
    z-index: 100;
    padding: .5rem;
}

.sidebar-close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 2rem;
    cursor: pointer;
}

.sidebar-content {
    margin-top: 50px;
}

</style>
