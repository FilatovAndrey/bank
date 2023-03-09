import { createRouter, createWebHistory } from 'vue-router'

import RequestTable from '../components/request/RequestTable.vue'
// import mesage from '../components/message/message.vue'
import help from '../components/helpCpmponent.vue'
import sideBar from '../components/ui/TheSidebar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: RequestTable
    },
    {
      path:'/help',
      name: 'help',
      component: help
    },{
      path:'/sideBar',
      name: 'sideBar',
      component: sideBar
    },

  ]
})

export default router
