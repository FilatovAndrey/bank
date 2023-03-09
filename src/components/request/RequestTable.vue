<script setup>
import { computed, ref } from "vue-demi";
import { useUserStore } from "../../stores/user";
import Modal from '../modal.vue' 
const uStore = useUserStore();

// modal
let showInfo = ref(false);
const ChengeTitleFromAcom = () => {
  showInfo.value = !showInfo.value;
  console.log("showInfo.value",showInfo.value);
};

const classStatus = ref("");
const choiseStatus = ["Завершено", "Выполняется", "Активна"];
const sort = ref("");

const showSort = computed(() => {
  uStore.setRefSort(sort.value);
});

// Создать заявку
const showReq = ref(true);
</script>
<template>
  <v-container>
    <div class="wrap">
      <div class="w">
        <h4 v-if="uStore.getUsers.length === 0">Заявок пока нет</h4>
        <div>
          <v-card class="d-flex align-center w pa-8">
            <h1>Количество заявок - {{ uStore.getLenght - 1 }}</h1>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="uStore.setShowRequest(showReq)">
              Создать
            </v-btn>
          </v-card>
        </div>

        <v-card class="d-flex pa-4 w align-center" width="100%" color="accent">
          <v-card width="30%" class="ml-16"
           
          ></v-card>
          <v-spacer></v-spacer>
          <v-card width="30%" class="mr-16">
            <v-select
              @change="showSort"
              label="Найти по статусу"
              :items="choiseStatus"
              v-model="sort"
            ></v-select
          ></v-card>
          <v-btn
            class="small"
            color="success"
            @click="uStore.sortUserForStatus()"
            >Найти</v-btn
          >
        </v-card>

        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in uStore.getUsers" :key="u.id">
              <td>{{ u.id }}</td>
              <td>{{ u.name }}</td>
              <td>{{ u.phone }}</td>
              <td>{{ u.sum }} рубликов</td>
              <td>
                <div
                  :class="{
                    done: u.status === 'Завершено',
                    performed: u.status === 'Выполняется',
                    active: 'Выполняется',
                  }"
                >
                  {{ u.status }}
                </div>
              </td>
              <td>
                <v-btn
                  color="success"
                  @click="uStore.getUserForId(u.id), (showInfo = !showInfo)"
                  >Открыть</v-btn
                >
              </td>
            </tr>
          </tbody>
        </table>
        <Modal
          v-if="showInfo"
          @chengeTitleInHomeComponent="ChengeTitleFromAcom"
        ></Modal>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.active {
  background: rgb(221, 219, 219);
  border-radius: 20px;
  color: rgb(203, 35, 35);
}
.done {
  background: rgb(221, 219, 219);
  border-radius: 20px;
  color: rgb(31, 125, 28);
}
.performed {
  background: rgb(221, 219, 219);
  border-radius: 20px;
  color: rgb(1, 41, 141);
}

.w {
  background: #e0e0e0;
}
.wrap {
  background: #e0e0e0;
  position: relative;
}
</style>
