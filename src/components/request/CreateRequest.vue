<script setup>
import { ref, reactive, computed } from "vue";
import { useUserStore } from "../../stores/user";
import NewRequestInfo from "../NewRequestInfo.vue"

const showRequest = ref(false);

const uStore = useUserStore();
const inputUser = reactive({
  name: "",
  email: "",
  phone: "",
  sum: "",
  status: "",
});
const submitRequest = async () => {
  const user = await {
    id: uStore.getLenght,
    name: inputUser.name,
    phone: inputUser.phone,
    email: inputUser.email,
    sum: inputUser.sum,
    status: inputUser.status,
  };
  uStore.setReques(user);
  inputUser.name = "";
  inputUser.email = "";
  inputUser.phone = "";
  inputUser.sum = "";
  inputUser.status = "";
  
  
};

const choiseStatus = ["Завершено", "Выполняется", "Активна"];

// отключить кнопку создать
const comDisBtn = computed(
  () =>
    inputUser.name === "" ||
    inputUser.email === "" ||
    inputUser.phone === "" ||
    inputUser.sum === "" ||
    inputUser.status === ""
);

</script>

<template>
  <div>
    <div class="modal-wrap"></div>
    <div class="modal-window">
      <v-card >
        <form class="pa" @submit.prevent="submitRequest">
          <v-card >
            <v-text-field label="Имя" v-model="inputUser.name"></v-text-field>
            <v-text-field
              label="email"
              v-model="inputUser.email"
            ></v-text-field>
            <v-text-field
              label="Телефон"
              v-model="inputUser.phone"
            ></v-text-field>
            <v-text-field
              label="Сумма заявки"
              v-model="inputUser.sum"
            ></v-text-field>
            <v-select
              label="Изменить статус"
              :items="choiseStatus"
              v-model="inputUser.status"
            ></v-select>
            <v-card class="d-flex">
              <v-btn
                color="success"
                type="submit"
                :disabled="comDisBtn"
               
                >Создать заявку</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="uStore.setShowRequest(showRequest)"
                >Закрыть</v-btn
              >
            </v-card>
          </v-card>


       
        </form>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.pa {
  padding: 30px;
}
.modal-window {
  width: 400px;
  height: 300px;
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
