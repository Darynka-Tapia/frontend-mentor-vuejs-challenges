import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/404View.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {path:'/404', component: NotFound },
    {path:'/:catchAll(.*)', redirect: '/404' },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rating',
      name: 'rating',
      component: () => import('../components/rating/RatingView.vue')
    }
  ]
})

export default router
