import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '@/views/EventDetails.vue'
import About from '../views/About.vue'
import NotFound from '@/views/NotFound'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    ///:catchAll(.*)
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
