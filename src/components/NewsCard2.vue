<script setup>
import IconEyeLine from './icons/IconEyeLine.vue'
import IconHeartLine from './icons/IconHeartLine.vue'

defineProps({
  id: String,
  label: String,
  image: String,
  date: String,
  views: Number,
  like: Number,
})
</script>

<template>
  <router-link :to="`/new/1`" class="new-news">
    <div class="new-news__container">
      <img :src="image" :alt="label" class="new-news__img" />
    </div>
    <div class="new-news__content">
      <div class="new-news__meta">
        <span class="new-news__date Font-Body-Small-Medium">{{ date }}</span>
        <div class="new-news__views">
          <IconEyeLine />
          <span class="Font-Body-Small-Medium">{{ views }}</span>
        </div>

        <div class="new-news__like">
          <IconHeartLine />
          <span class="Font-Body-Small-Medium">{{ like }}</span>
        </div>
      </div>
      <h4 class="new-news__title">
        {{ label }}
      </h4>
    </div>
  </router-link>
</template>
