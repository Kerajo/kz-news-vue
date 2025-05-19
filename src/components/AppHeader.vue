<script setup>
import { inject, ref } from 'vue'

import { useDark, useToggle } from '@vueuse/core'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

// Используем хук useDark из VueUse для определения текущей темы
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark-theme',
  valueLight: '',
})

// Используем хук useToggle для переключения темы
const toggleDark = useToggle(isDark)

import MenuLink from './MenuLink.vue'

import IconWeatherPartlyCloud from './icons/IconWheaterPartlyCloudy.vue'
import IconMenuFill from './icons/IconMenuFill.vue'
import IconCloseLine from './icons/IconCloseLine.vue'

const activeMenu = inject('activeMenu')
const menuItems = inject('menuItems')

console.log(menuItems)
</script>

<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__left">
        <div class="header__logo">
          <RouterLink to="/" href="/" class="header__logo-link" @click="activeMenu = null">
            <img src="../assets/logo.svg" alt="KZ-NEWS" />
          </RouterLink>
        </div>

        <nav class="header__nav">
          <ul class="header__menu">
            <li v-for="item in menuItems" :key="item.id" class="header__menu-item">
              <MenuLink
                :categoryId="item.id"
                :label="item.name"
                :isActive="activeMenu === item.id"
                @click="activeMenu = item.id"
              />
            </li>
          </ul>
        </nav>
      </div>

      <div class="header__right">
        <button
          @click="toggleDark()"
          class="header__theme-switcher"
          :title="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
        >
          <span class="header__theme-switcher-text Font-Body-Normal-Regular">{{
            isDark ? 'Светлая' : 'Темная'
          }}</span>
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="theme-switcher__icon"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="theme-switcher__icon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <a href="https://yandex.ru/pogoda/ru" class="header__weather">
          <span class="header__weather-temp Font-Body-Normal-Regular">24°C</span>
          <div class="header__weather-icon">
            <IconWeatherPartlyCloud />
          </div>
        </a>
      </div>

      <button class="header__burger-menu" @click="toggleMenu"><IconMenuFill /></button>
    </header>
    <div class="open-menu" v-show="isOpen" v-auto-animate>
      <div class="wrapper">
        <div class="open-menu__close" @click="toggleMenu"><IconCloseLine /></div>
        <div class="open-menu__content">
          <nav class="open-menu__nav">
            <ul class="open-menu__menu">
              <li v-for="item in menuItems" :key="item.id" class="open-menu__menu-item">
                <MenuLink
                  :categoryId="item.id"
                  :label="item.name"
                  :isActive="activeMenu === item.id"
                  @click="toggleMenu"
                />
              </li>
            </ul>
          </nav>

          <div class="open-menu__down">
            <button
              @click="toggleDark()"
              class="header__theme-switcher"
              :title="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
            >
              <span class="header__theme-switcher-text Font-Body-Normal-Regular">{{
                isDark ? 'Светлая' : 'Темная'
              }}</span>
              <svg
                v-if="isDark"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="theme-switcher__icon"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="theme-switcher__icon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>

            <a href="https://yandex.ru/pogoda/ru" class="header__weather">
              <span class="header__weather-temp Font-Body-Normal-Regular">24°C</span>
              <div class="header__weather-icon">
                <IconWeatherPartlyCloud />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
