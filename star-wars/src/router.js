import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/characters',
    name: 'Character',
    component: DangerousridesComponent
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes // ⬅️ передається масив з правильними об'єктами
})

export default router