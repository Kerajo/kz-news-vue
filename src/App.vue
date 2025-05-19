<script setup>
import { provide } from 'vue'
import { activeMenu, massNewsCategory, menuItems, massSidebarPopularNews } from './store'

import AppHeader from './components/AppHeader.vue'

import AppFooter from './components/AppFooter.vue'

provide('activeMenu', activeMenu)
provide('massNewsCategory', massNewsCategory)
provide('menuItems', menuItems)
provide('massSidebarPopularNews', massSidebarPopularNews)
</script>

<template>
  <AppHeader />

  <div class="wrapper">
    <main class="main" v-auto-animate>
      <RouterView />
    </main>
  </div>

  <AppFooter />
</template>

<style scoped></style>
