<script setup>
import { useUserStore } from "../stores/user";
import { computed, ref } from "vue";

const uStore = useUserStore();
// emit
const emit = defineEmits(["chengeTitleInHomeComponent"]);
const chengeTitleInHomeComponent = () => {
  emit("chengeTitleInHomeComponent");
};
// status
const choiseStatus = ["Завершено", "Выполняется", "Активна"];
const status = uStore.getUserStatus[0].status;

// chenge status
const chengeStatus = ref("");
const comShowBtnRefresh = computed(() => {
  return chengeStatus.value !== "";
});
const a = false;

const rem = ref(true);
</script>
<template>
  <div >
    <div class="modal-wrap"></div>
    <div class="modal-window ">
      <v-card  class="pa" v-if="rem">
        <v-card v-for="u in uStore.getUserId" :key="u.id">
          <h2>Заявка № {{ u.id }}</h2>
          <div>Имя владельца: {{ u.name }}</div>
          <div>Телефон: {{ u.phone }}</div>
          <div>Сумма: {{ u.sum }} рублей</div>
          <div
            :class="{
              done: u.status === 'Завершено',
              active: u.status === 'Активна',
              performed: u.status === 'Выполняется',
            }"
          >
            Статус: {{ u.status }}
          </div>
          <v-card class="d-flex align-center" width="100%">
            <v-card width="50%">
              <v-select
                label="Изменить статус"
                :items="choiseStatus"
                v-model="chengeStatus"
              ></v-select>
            </v-card>

            <v-spacer></v-spacer>
            <v-card v-if="comShowBtnRefresh" width="50%" class="ml-4"
              ><v-btn
                size="small"
                @click="
                  uStore.setRefStatus(chengeStatus), uStore.chengeStatus(u.id)
                "
                color="success"
                >Обновить статус</v-btn
              >
            </v-card>

            <v-btn
            size="small"
              @click="uStore.removeRequest(u.id), (rem = !rem)"
              color="#E53935"
            >
              Удалить заявку
            </v-btn>
          </v-card>
          <v-btn
            class="d-flex align-center justify-center mt-8"
            color="success"
            @click="chengeTitleInHomeComponent"
            >Закрыть</v-btn
          >
        </v-card>
      </v-card>

      <v-card
        height="100%"
        class="d-flex align-center justify-center flex-column"
        v-else
      >
        <v-card>
          <h1>Заявка № {{ uStore.getUserId[0].id }} удалена</h1>
        </v-card>
        <v-divider></v-divider>
        <v-card
          ><v-btn class="" color="success" @click="chengeTitleInHomeComponent"
            >Закрыть</v-btn
          ></v-card
        >
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.pa{
  padding: 20px;
}
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
.modal-window {
  width: 600px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.modal-wrap {
  width: 100%;
  height: 100%;
  background: rgb(129, 125, 125);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
