<script setup>
import SidebarNews from './SidebarNews.vue'

defineProps({
  label: String,
  data: Object,
})
</script>

<template>
  <div class="sidebar__container" v-auto-animate>
    <span class="sidebar__title Font-Body-Normal-Bold">{{ label }}</span>
    <div class="sidebar__news-lists" v-auto-animate>
      <SidebarNews
        v-for="mass in data"
        :key="mass.key"
        :label="mass.label"
        :date="mass.date"
        :views="mass.views"
        :like="mass.like"
        :isEnd="mass.isEnd"
      />
    </div>
  </div>
</template>
