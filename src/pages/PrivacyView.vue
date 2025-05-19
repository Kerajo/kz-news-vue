<script setup></script>
<template>
  <div class="main__container">
    <div class="news-feed">
      <div class="category-page" v-auto-animate>
        <h2 class="category-page__title">Политика конфедициальности</h2>

        <div class="article__section">
          <h3 class="article__section-title">Общие положения</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Настоящая политика обработки персональных данных разработана в соответствии с законом
              Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите».
              Этот документ определяет основные принципы, цели и условия обработки персональных
              данных, а также меры по обеспечению безопасности данных на веб-сайте *Домен*.
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Основные термины</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Автоматизированная обработка — использование компьютерных технологий для работы с
              данными.
            </p>
            <p class="Font-Body-Normal-Regular">
              Блокирование — временная приостановка обработки данных, кроме случаев, когда это
              необходимо для уточнения данных.
            </p>
            <p class="Font-Body-Normal-Regular">
              Обезличивание — процесс, делающий невозможным без дополнительной информации определить
              принадлежность данных конкретному пользователю.
            </p>
            <p class="Font-Body-Normal-Regular">
              Персональные данные — любая информация, прямо или косвенно связанная с пользователем
              сайта *Домен*.
            </p>
            <p class="Font-Body-Normal-Regular">
              Трансграничная передача — передача данных в иностранное государств.
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Категории обрабатываемых данных</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Фамилия, имя, отчество пользователя. Контактные данные (электронная почта, номер
              телефона). Данные, собираемые автоматически (cookie, IP-адреса, данные о браузере).
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Цели обработки</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Цель обработки данных — улучшение качества обслуживания пользователей, информирование
              о новостях и специальных предложениях через электронные коммуникации.
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Правовые основания</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Обработка персональных данных осуществляется на основе согласия пользователя, данного
              им при регистрации на сайте или при подписке на новостную рассылку.
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Меры по защите данных</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Оператор принимает все необходимые правовые, организационные и технические меры для
              защиты данных от несанкционированного доступа.
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Трансграничная передача данных</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Передача данных за рубеж осуществляется только в страны, обеспечивающие адекватную
              защиту данных, или при наличии согласия пользователя.
            </p>
          </div>
        </div>

        <div class="article__section">
          <h3 class="article__section-title">Цели обработки</h3>
          <div class="article__text">
            <p class="Font-Body-Normal-Regular">
              Пользователь имеет право на получение информации о своих данных, их корректировку и
              удаление. Политика доступна на сайте Nstyle.kz и может быть обновлена в будущем.
            </p>
          </div>
        </div>
      </div>
    </div>
    <appSidebar :massPopular="massSidebarPopularNews" :massNew="massSidebarPopularNews" />
  </div>
</template>
