<script setup>
import { inject } from 'vue'
import MenuLink from './MenuLink.vue'
import IconWeatherPartlyCloud from './icons/IconWheaterPartlyCloudy.vue'

const activeMenu = inject('activeMenu')
const menuItems = inject('menuItems')
</script>
<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__top">
        <img src="../assets/logo.svg" alt="KZ-NEWS" class="footer__logo" />

        <nav class="footer__nav">
          <ul class="footer__menu">
            <li v-for="item in menuItems" :key="item.id" class="footer__menu-item">
              <MenuLink
                :categoryId="item.id"
                :label="item.name"
                :isActive="activeMenu === item.id"
                @click="activeMenu = item.id"
              />
            </li>
          </ul>
        </nav>

        <div class="footer__weather">
          <span class="header__weather-temp Font-Body-Normal-Regular">24°C</span>
          <div class="header__weather-icon">
            <IconWeatherPartlyCloud />
          </div>
        </div>
      </div>
      <div class="footer__down">
        <router-link to="/privacy" class="footer__link-down Font-Normal-Regular"
          >Политика конфиденциальности</router-link
        >
        <span class="footer__copyright">© 2024—2025 ТОО «KZ-NEWS»</span>
        <router-link to="/404" class="footer__link-down">Учебный проект</router-link>
      </div>
    </div>
  </footer>
</template>
