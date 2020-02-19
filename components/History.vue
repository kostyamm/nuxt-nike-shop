<template>
  <v-container class="history mb-10">
    <h2 class="mb-4">История просмотров</h2>
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <v-col
        v-for="product in history"
        cols="3"
      >
        <v-row>
          <div>
            <v-img
              :src=product.src
              :height="100"
              contain
            ></v-img>
          </div>
          <v-col class="pl-3">
            <span
              v-if="product.sale"
              class="history__sale"
            >- {{ product.sale }} % <br> </span>
            <b>{{ product.name }}</b> <br>
            <span
              v-if="product.sale"
              class="history__sale-price"
            >
              <b>{{ +product.price }} ₽ </b>
            </span>
            <b>{{ product.sale ? (+product.price * ((100 - +product.sale) / 100)) : product.price }} ₽</b>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BaseComponent from '~/modules/BaseComponent'

  @Component
  export default class History extends BaseComponent {

    history = [
      {
        name: 'Nike Air Max 270 React ENG',
        price: '2320',
        src: require('@/assets/images/history/image 47.png'),
        sale: ''
      },
      {
        name: 'Nike Pro Flex Rep',
        price: '1040',
        src: require('@/assets/images/history/image 48.png'),
        sale: ''
      },
      {
        name: 'Nike Sportswear Tech Fleece',
        price: '2560',
        src: require('@/assets/images/history/image 49.png'),
        sale: ''
      },
      {
        name: 'Nike Sportswear JDI Heavyweight',
        price: '7800',
        src: require('@/assets/images/history/image 50.png'),
        sale: '30'
      }
    ]

    constructor () {
      super()
    }

  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .history {
    &__sale {
      background: $color--red;
      color: $color--white;
      border-radius: 24px;
      padding: 5px;

      &-price {
        text-decoration-line: line-through;
        color: $color--grey;
      }
    }
  }
</style>
