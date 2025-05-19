<script setup>
import { ref, inject } from 'vue'

import appSidebar from '../components/AppSidebar.vue'
import InflationChart from '../components/InflationChart.vue'
import InflationTable from '../components/InflationTable.vue'

import iconEyeLine from '../components/icons/IconEyeLine.vue'
import iconHeartLine from '../components/icons/IconHeartLine.vue'

const massSidebarPopularNews = inject('massSidebarPopularNews')

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

  console.log(submissions)
}

const images = [
  {
    image: 'https://picsum.photos/id/1015/600/400',
    thumbnail: 'https://picsum.photos/id/1015/100/60',
  },
  {
    image: 'https://picsum.photos/id/1025/600/400',
    thumbnail: 'https://picsum.photos/id/1025/100/60',
  },
  {
    image: 'https://picsum.photos/id/1035/600/400',
    thumbnail: 'https://picsum.photos/id/1035/100/60',
  },
]

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 2,
  },
]
</script>
<template>
  <div class="main__container article__main-container" v-auto-animate>
    <div class="article__main-content">
      <article class="article">
        <div class="article__head">
          <div class="article__image-container">
            <img src="../../public/News/img-new-1.jpg" alt="Фото" />
          </div>

          <div class="article__info-container">
            <div class="article__meta">
              <span class="article__date Font-Body-Normal-Medium">30.04.2025</span>
              <div class="article__views">
                <iconEyeLine />
                <span class="Font-Body-Normal-Medium">980</span>
              </div>
              <div class="article__like">
                <iconHeartLine />
                <span class="Font-Body-Normal-Medium">460</span>
              </div>
            </div>
            <h2 class="article__title">
              Антикор написал заявление в полицию на блогера Сарсенбаева: что известно
            </h2>
          </div>
        </div>

        <div class="article__content">
          <div class="article__section">
            <h3 class="article__section-title">Что произошло</h3>
            <div class="article__text">
              <p class="Font-Body-Normal-Regular">
                Казахстанский блогер Азамат Сарасенбаев написал пост, в котором говорится, что одной
                из точек общепита в Актау покровительствует сотрудник Антикоррупционной службы. Он
                заявил, что донерная построена на месте автобусной остановки, отметив, что
                "невозможно просто так увеличить участок с 60 до 650 квадратных метров на территории
                остановки и возвести торговый дом с множеством нарушений". По его словам, здание
                расположено якобы над инженерными коммуникациями. Подобные изменения, по мнению
                блогера, вряд ли могли произойти без чьего-либо содействия.
              </p>
              <p class="Font-Body-Normal-Regular">
                Позже блогер написал, что департамент антикоррупционной службы Мангистауской области
                подал на него в суд "в защиту чести и достоинства".
              </p>
            </div>
          </div>
          <div class="article__quote">
            <div class="article__text">
              <p class="Font-Body-Normal-Regular">
                "Сотрудники антикоррупционной службы Мангистауской области показали свою полную
                некомпетентность, оформив на меня административный протокол по статье 73-3 часть 2
                КоАП ("Клевета, то есть распространение заведомо ложных сведений, порочащих честь и
                достоинство другого лица или подрывающих его репутацию"). Во первых, с каких пор
                государственный институт стал воспринимать себя как конкретную личность? Во вторых,
                с каких пор гражданам Казахстана нельзя говорить, рассуждать и конструктивно
                критиковать о деятельности госорганов и институтов?" - возмутился ранее блогер.
              </p>
            </div>
          </div>
          <InflationChart />
          <div class="article__section">
            <h3 class="article__section-title">Что говорят в Антикоре</h3>
            <div class="article__text">
              <p class="Font-Body-Normal-Regular">
                30 апреля в ведомстве прокомментировали ситуацию.
              </p>
            </div>
          </div>
          <InflationTable />
          <div class="article__quote">
            <div class="article__text">
              <p class="Font-Body-Normal-Regular">
                "Ранее была публикация блогера Сарсенбаева в части покровительства точки общепита
                (донерная) со стороны сотрудников Антикоррупционной службы. По данному случаю
                Антикор уже комментировал, что информация не соответствует действительности. Я сам
                лично размещал ответ от своего имени", - сказал официальный представитель Антикора
                Данияр Бигайдаров на брифинге в Астане.
              </p>
            </div>
          </div>
          <div class="card">
            <Galleria
              :value="images"
              :responsiveOptions="responsiveOptions"
              :numVisible="5"
              containerStyle="max-width: 640px; margin: auto"
              :circular="true"
              :autoPlay="true"
              :transitionInterval="3000"
            >
              <template #item="slotProps">
                <img
                  :src="slotProps.item.image"
                  class="w-full"
                  style="max-height: 400px; object-fit: cover"
                />
              </template>
              <template #thumbnail="slotProps">
                <img
                  :src="slotProps.item.thumbnail"
                  style="width: 100px; height: 60px; object-fit: cover"
                />
              </template>
            </Galleria>
          </div>
          <div class="article__section">
            <h3 class="article__section-title"></h3>
            <div class="article__text">
              <p class="Font-Body-Normal-Regular">
                Также в Антикоре заверили, что департамент ведомства по Мангистауской области
                задолго до публикации направил запрос в акимат Актау, чтобы установить
                обоснованность выдачи земельных участков.
              </p>
              <p class="Font-Body-Normal-Regular">
                Сообщается, что после письма департамента выдача расширенного земельного участка
                была отменена.
              </p>
              <p class="Font-Body-Normal-Regular">
                Одновременно департаментом по управлению земельными ресурсами направлен иск в суд о
                возврате государству земельных участков. В настоящее время идет судебное
                рассмотрение.
              </p>
              <p class="Font-Body-Normal-Regular">
                По данным Антикора, владелец участка подал заявление на блогера, обвинив его в
                распространении ложной информации о якобы покровительстве со стороны сотрудников
                Антикоррупционной службы.
              </p>
              <p class="Font-Body-Normal-Regular">
                "Кроме того, по результатам проверки доводов, изложенных в публикации блогера, факты
                покровительства со стороны сотрудников Антикоррупционной службы не нашли своего
                подтверждения.
              </p>
              <p class="Font-Body-Normal-Regular">
                В департамент полиции Мангистауской области направлено письмо для дачи правовой
                оценки наличия признаков состава административного правонарушения. Органами
                внутренних дел составлен протокол по указанной статье КоАП. Окончательная правовая
                оценка будет дана судом", - заявили в Антикоре.
              </p>
            </div>
          </div>
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
