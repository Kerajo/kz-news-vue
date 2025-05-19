<script setup>
// computed, watchEffect
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'
// import { useRouter } from 'vue-router'
const route = useRoute()
// const router = useRouter()

const id = Number(route.params.articleId)

import appSidebar from '../components/AppSidebar.vue'
import ArticleSection from '@/components/ArticleSection.vue'

import iconEyeLine from '../components/icons/IconEyeLine.vue'
import iconHeartLine from '../components/icons/IconHeartLine.vue'

const massSidebarPopularNews = inject('massSidebarPopularNews')
const massNewsCategory = inject('massNewsCategory')

// форма

const name = ref('')
const email = ref('')
const submissions = ref([])

function handleSubmit() {
  submissions.value.push({
    name: name.value,
    email: email.value,
  })
  // Очистка полей формы
  name.value = ''
  email.value = ''

  console.log(submissions.value[0])
}

// Ищем статью по ключу
const filteredNews = massNewsCategory.value.filter((item) => item.key === Number(id))

// watchEffect(() => {
//   if (filteredNews.length === 0) {
//     console.log('non foundet')
//     router.push('/404')
//   }
// })
</script>
<template>
  <div class="main__container article__main-container" v-auto-animate>
    <div class="article__main-content">
      <article class="article">
        <div class="article__head">
          <div class="article__image-container">
            <img :src="filteredNews[0].image" alt="Фото" />
          </div>

          <div class="article__info-container">
            <div class="article__meta">
              <span class="article__date Font-Body-Normal-Medium"> {{ filteredNews[0].date }}</span>
              <div class="article__views">
                <iconEyeLine />
                <span class="Font-Body-Normal-Medium">{{ filteredNews[0].views }}</span>
              </div>
              <div class="article__like">
                <iconHeartLine />
                <span class="Font-Body-Normal-Medium">{{ filteredNews[0].like }}</span>
              </div>
            </div>
            <h2 class="article__title">
              {{ filteredNews[0].label }}
            </h2>
          </div>
        </div>

        <div class="article__content">
          <ArticleSection
            v-for="content in filteredNews[0].content"
            :key="content.key"
            :title="content.title"
            :text="content.text"
            :isQuote="content.isQuote"
          />
        </div>
      </article>
      <div class="subscription">
        <div class="subscription__content">
          <div class="subscription__head">
            <h3 class="subscription__title">Подпишитесь на рассылку, чтобы ничего не пропустить</h3>
            <span class="subscription__description">
              Подпишитесь на рассылку и мы пришлем самое важное
            </span>
          </div>
          <form @submit.prevent="handleSubmit" class="subscription__form">
            <div class="subscription__inputs">
              <input type="text" class="subscription__input" placeholder="Имя" v-model="name" />
              <input type="email" class="subscription__input" placeholder="Почта" v-model="email" />
            </div>
            <button type="submit" class="subscription__button button-secondary">Подписаться</button>
            <span
              v-if="submissions.length >= 1"
              class="Font-Body-Normal-Regular subscription__successful"
              >Подписка успешно оформлена</span
            >
          </form>
        </div>
        <div class="subscription__image-container">
          <img src="../../public/banner.png" alt="" class="subscription__image" />
        </div>
      </div>
    </div>

    <appSidebar :massPopular="massSidebarPopularNews" :massNew="massSidebarPopularNews" />
  </div>
</template>
