import { createRouter, createWebHistory } from 'vue-router'
import HistoryStarWarsComponent from './components/HistoryStarWarsComponent.vue'
import CharacterComponent from './components/CharacterComponent.vue'



const routes = [
  {
    path: '/historySW',
    name: 'HistoryStarWars',
    component: HistoryStarWarsComponent
  },
  {
    path: '/characters',
    name: 'Character',
    component: CharacterComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes // ⬅️ передається масив з правильними об'єктами
})

export default router