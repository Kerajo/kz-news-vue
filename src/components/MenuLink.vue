<script setup>
defineProps({
  categoryId: String,
  label: String,
  isActive: Boolean,
})
defineEmits(['click'])
</script>

<template>
  <router-link
    :to="`/category/${categoryId}`"
    :class="[
      isActive ? 'header__menu-link--active' : '',
      'header__menu-link',
      'Font-Body-Normal-Regular',
    ]"
    @click.prevent="$emit('click')"
  >
    {{ label }}
  </router-link>
</template>
