<script setup>
import { ref, computed, inject } from 'vue'

import AppSidebar from '../components/AppSidebar.vue'
import NewsCard from '../components/NewsCard.vue'
import NewsCard2 from '../components/NewsCard2.vue'

const activeCategory = ref('New')

const categories = ref([
  {
    id: 'New',
    name: '🕐 Новое',
  },
  {
    id: 'Popular',
    name: '🔥 Популярное',
  },
  {
    id: 'Politics',
    name: '🏛️ Политика',
  },
  {
    id: 'Economy',
    name: '💰 Экономика',
  },
  {
    id: 'Society',
    name: '👥 Общество',
  },
])

const massNewsToday = [
  {
    key: 0,
    label: 'Антикор написал заявление в полицию на блогера Сарсенбаева: что известно',
    image: '../News/img-new-1.jpg',
    date: '16.05.2025',
    views: '960',
    like: '450',
  },
  {
    key: 1,
    label: 'Какие пенсионные изменения ждут россиян в 2025 году',
    image: '../News/img-new-7.jpg',
    date: '16.05.2025',
    views: '960',
    like: '450',
  },
]

const massSidebarPopularNews = inject('massSidebarPopularNews')
const massNewsCategory = inject('massNewsCategory')
console.log(massNewsCategory)

const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}

const filteredArticles = computed(() => {
  return massNewsCategory.value.filter((article) => article.category === activeCategory.value)
})
</script>

<template>
  <div class="main__container">
    <section class="news-feed">
      <div class="news-feed__popular">
        <h2 class="news-feed__title">Новости сегодня</h2>
        <div class="news-feed__new">
          <NewsCard2
            v-for="mass in massNewsToday"
            :key="mass.key"
            :id="mass.key"
            :label="mass.label"
            :image="mass.image"
            :date="mass.date"
            :views="mass.views"
            :like="mass.like"
          />
        </div>
      </div>
      <div class="news-feed__category news-category">
        <div class="news-category__tabs">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            :class="[
              'news-category__button',
              'Font-Body-Normal-Semibold',
              { 'news-category__button--active': activeCategory === category.id },
            ]"
          >
            {{ category.name }}
          </button>
        </div>
        <div class="news-category__grid">
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
          />
        </div>
      </div>
    </section>
    <appSidebar :massPopular="massSidebarPopularNews" :massNew="massSidebarPopularNews" />
  </div>
</template>
