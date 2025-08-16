import { createRouter, createWebHistory } from 'vue-router'
import HistoryStarWarsComponent from './components/HistoryStarWarsComponent.vue'



const routes = [
  {
    path: '/historySW',
    name: 'HistoryStarWars',
    component: HistoryStarWarsComponent
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes // ⬅️ передається масив з правильними об'єктами
})

export default router