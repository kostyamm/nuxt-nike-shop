<template>
  <v-container
    class="error-page"
    container--fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        md5
        lg5
      >
        <v-layout column>
          <v-flex class="error-page__title font-weight-bold text-center">
            404
          </v-flex>
          <v-flex class="error-page__subtitle font-weight-bold text-center">
            Ошибка. Страница не найдена
          </v-flex>
          <v-flex class="error-page__description text-center">
            Возможно, Вы неправильно ввели адрес в адресной строке вашего браузера.
            Пожалуйста, проверьте адрес и пробуйте обновить страницу еще раз.
          </v-flex>
          <v-flex class="text-center">
            <v-btn
              to="/"
              nuxt
              text
              dark
              rounded
              class="error-page__btn white--text"
            >
              ПЕРЕЙТИ НА ГЛАВНУЮ
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
