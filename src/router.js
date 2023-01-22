import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import TV from './views/TV.vue'
import Bookmark from './views/Bookmark.vue'

const routes = [
   { name: 'home', path: '/', component: Home },
   { name: 'movies', path: '/movies', component: Movies },
   { name: 'tv', path: '/tv', component: TV },
   { name: 'bookmark', path: '/bookmark', component: Bookmark },
   
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router