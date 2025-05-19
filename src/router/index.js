import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import CategoryView from '../pages/CategoryView.vue'
import ArticleView from '../pages/ArticleView.vue'
import Page404View from '../pages/Page404View.vue'
import NewView from '@/pages/NewView.vue'
import PrivacyView from '@/pages/PrivacyView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/category/:categoryId', name: 'category', component: CategoryView },
  { path: '/article/:articleId', name: 'article', component: ArticleView },
  { path: '/new/1', name: 'new', component: NewView },
  { path: '/privacy', name: 'privacy', component: PrivacyView },
  { path: '/404', name: '404', component: Page404View },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
