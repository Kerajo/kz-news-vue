<script setup>
defineProps({
  title: String,
  text: {
    type: String,
    required: true,
  },
  isQuote: Boolean,
})
</script>
<template>
  <div class="article__quote" v-if="isQuote">
    <h3 class="article__section-title">{{ title }}</h3>
    <div class="article__text" v-html="text"></div>
  </div>
  <div class="article__section" v-else>
    <h3 class="article__section-title">{{ title }}</h3>
    <div class="article__text" v-html="text"></div>
  </div>
</template>
