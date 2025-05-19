<script setup>
import iconEyeLine from './icons/IconEyeLine.vue'
import iconHeartLine from './icons/IconHeartLine.vue'

defineProps({
  label: String,
  date: String,
  views: Number,
  like: Number,
  isEnd: Boolean,
})
</script>
<template>
  <router-link to="/article/1" :class="['sidebar-news', isEnd ? 'sidebar-news--end' : '']">
    <span class="sidebar-news__title Font-Body-Normal-Regular">{{ label }}</span>
    <div class="sidebar-news__meta">
      <span class="Font-Body-Small-Medium">{{ date }}</span>
      <div class="sidebar-news__meta-right">
        <div class="sidebar-news__views">
          <iconEyeLine />
          <span class="Font-Body-Small-Medium">{{ views }}</span>
        </div>

        <div class="sidebar-news__like">
          <iconHeartLine />
          <span class="Font-Body-Small-Medium">{{ like }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>
