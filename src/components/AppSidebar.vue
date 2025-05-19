<script setup>
import SidebarLists from './SidebarLists.vue'

defineProps({
  massPopular: Object,
  massNew: Object,
})
</script>

<template>
  <aside class="main__sidebar sidebar">
    <SidebarLists label="🔥 Популярные" :data="massPopular" />
    <SidebarLists label="🕐 Новые" :data="massNew" />
  </aside>
</template>
