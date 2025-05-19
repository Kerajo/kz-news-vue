<script setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'

import appSidebar from '../components/AppSidebar.vue'
import NewsCard from '../components/NewsCard.vue'

// экспорт данных
const massNewsCategory = inject('massNewsCategory')
const menuItems = inject('menuItems')
const massSidebarPopularNews = inject('massSidebarPopularNews')

const route = useRoute()

const currentCategory = computed(() => {
  return route.params.categoryId
})

const categoryName = computed(() => {
  return menuItems.value.find((item) => item.id === route.params.categoryId)?.name
})

// Фильтрация новостей по текущей категории
const filteredArticles = computed(() => {
  return massNewsCategory.value.filter((article) => article.category === currentCategory.value)
})
</script>
<template>
  <div class="main__container">
    <div class="news-feed">
      <div class="category-page" v-if="filteredArticles.length >= 1" v-auto-animate>
        <h2 class="category-page__title">{{ categoryName }}</h2>

        <div class="news-category__grid" v-auto-animate>
          <NewsCard
            class="news-category__card"
            v-for="mass in filteredArticles"
            :key="mass.key"
            :id="mass.key"
            :label="mass.label"
            :image="mass.image"
            :date="mass.date"
            :views="mass.views"
            :like="mass.like"
            v-auto-animate
          />
        </div>
      </div>
      <div class="category-page" v-else>
        <h2 class="category-page__title">{{ categoryName }}</h2>
        <span class="Font-Normal-Regular"
          >Здесь пока пусто. Но совсем скоро появятся свежие новости!</span
        >
      </div>
    </div>
    <appSidebar :massPopular="massSidebarPopularNews" :massNew="massSidebarPopularNews" />
  </div>
</template>
