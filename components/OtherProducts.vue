<template>
  <v-container class="other-products__block mb-10">
      <h2 class="mb-4">
        Смотрите также
      </h2>
      <v-row>
        <v-col
          v-for="otherProduct in otherProducts"
          class="other-products__block text-center"
        >
          <div>
            <v-img
              :src=otherProduct.src
              width="100%"
              contain
            ></v-img>
          </div>
          <p class="mt-3 mb-1">{{ otherProduct.name }}</p>
          <p><b>{{ otherProduct.price }} ₽</b></p>
        </v-col>
      </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BaseComponent from '~/modules/BaseComponent'

  @Component
  export default class OtherProducts extends BaseComponent {

    otherProducts = [
      {
        name: 'Свитшот Nike Fire On',
        price: '2320',
        src: require('@/assets/images/other-products/image 34.png'),
      },
      {
        name: 'Пуловер Nike Pullover Hoodie Gold',
        price: '1040',
        src: require('@/assets/images/other-products/image 36.png'),
      },
      {
        name: 'Cвитшот Nike SVB',
        price: '2560',
        src: require('@/assets/images/other-products/image 35.png'),
      }
    ]

    constructor () {
      super()
    }

  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .other-products {
    &__block:not(:last-child) {
      padding-right: 15px;
    }
  }
</style>
