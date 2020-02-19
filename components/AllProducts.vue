<template>
  <v-container>
    <v-row>
      <v-col
        v-if="getData"
        v-for="product in getData"
        :key="product.id"
        cols="3"
        class="all-products text-center px-2"
        @click="redirectToProduct(product.id, product)"
      >
        <div class="all-products__image">
          <v-img
            :src=product.images[0].src
            :height="400"
            contain
          />
          <span
            v-if="product.sale"
            class="all-products__image__sale"
          >
            -{{ product.sale }} %
          </span>
        </div>

        <v-divider class="mt-2 mb-1"></v-divider>
        <div>
          <b>{{ product.name }} </b><br>
          <span
            v-if="product.sale"
            class="all-products__sale"
          >
            {{ product.price }} ₽
          </span>
          <span :class="{ 'red--text' : product.sale }">
            {{ product.sale ?
            (product.price * ((100 - product.sale) / 100)).toFixed(2) :
            product.price }} ₽
          </span>
        </div>
        <v-divider class="mt-2 mb-2"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import BaseComponent from '~/modules/BaseComponent'

  const data = namespace('data')

  @Component
  export default class AllProducts extends BaseComponent {

    constructor () {
      super()
    }
    @data.Getter getData

  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .all-products {
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 4px 1px $color--grey-light;
    }

    &__sale {
      font-weight: 600;
      text-decoration-line: line-through;
      color: $color--grey;
    }

    &__image {
      position: relative;

      &__sale {
        position: absolute;
        top: 10px;
        right: 10px;
        font-weight: 600;
        background: $color--red;
        color: $color--white;
        border-radius: 24px;
        padding: 2px 6px;
      }
    }
  }
</style>
