import axios from "axios";
import { defineStore } from "pinia";
import _ from "lodash";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [],
    userId: [],
    refStatus: null,
    sort: null,
    sortUser: [],
    showSideBar: false,
    showRequest:null,
  }),
  
  actions: {
    async userJson() {
      const rawUser = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user = await rawUser.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          phone: item.phone,
          email: item.email,
          city: item.address.city,
          sum: _.random(1000, 9000),
          status: item.id < 3 ? "Завершено" : "Выполняется",
        };
      });
      this.users = user;
      this.users.forEach((item) => {
        if (item.id > 6) {
          item.status = "Активна";
        }
      });
    },
    async getUserForId(id) {
      this.userId = await this.users.filter((el) => el.id == id);
      console.log("this.userId ", this.userId[0].id);
    },

    async chengeStatus(id) {
      const my = await this.users.findIndex((el) => el.id === id);
      this.users[my].status = await this.refStatus;
    },
    async setRefStatus(ref) {
      this.refStatus = await ref;
    },
    async removeRequest(id) {
      this.users = await this.users.filter((el) => el.id !== id);
    },
    async setRefSort(el) {
      this.sort = await el;
      console.log("this.sort==============", this.sort);
    },
    async sortUserForStatus() {
      await this.userJson();
      this.users = await this.users.filter((el) => el.status === this.sort);
      console.log("this.sortUser", this.users);
    },
    async getRefStatus() {
      console.log("this.refStatus", this.refStatus);
      return this.refStatus;
    },
    async setShowSideBar(val) {
      this.showSideBar = await !this.showSideBar;
      console.log(" this.showSideBar", this.showSideBar);
    },
    async setReques(obj) {
      await this.users.unshift(obj);
      console.log("obj", this.users);
    },
    async setShowRequest(val){
      this.showRequest = await val
      console.log("SEEEET showRequest",this.showRequest);
    },
   
  },

  getters: {
    getUsers() {
      return this.users;
    },
    getUserId() {
      return this.userId;
    },
    getUserStatus() {
      const uS = this.userId.map((item) => {
        return {
          status: item.status,
        };
      });
      return uS;
    },
    getShowSideBar() {
      return this.showSideBar;
    },
    getLenght(){
      return this.users.length + 1
    },
     getShowReq(){
      console.log("GEEEEET this.showRequest",this.showRequest);
      return this.showRequest
    },
   
  },
});
