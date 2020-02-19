<template>
  <v-container class="product">
    <v-row class="product__horizontal-line">
      <v-col
        class="pr-4"
        cols="6"
      >
        <v-carousel
          height="700px"
          cycle
          vertical
          style="border-radius: 8px;"
        >
          <v-carousel-item
            v-for="(item,i) in getValue('images')"
            :key="i"
            :src=item.src
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col
        class="pl-4"
        cols="6"
      >
        <v-row>
          <v-col>
            <p class="product__history">
              Главная / Одежда/ Худи и свитшоты / Худи/ Свитшот Nike
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1>
              {{ getValue('name') }}
            </h1>
          </v-col>
        </v-row>
        <v-row class="product__sale product__horizontal-line">
          <v-col>
            <h3>
              <span
                v-if="getValue('sale')"
                class="product__sale-price mr-4"
              >
                {{ getValue('price').toFixed(2) }} ₽
                <span class="product__sale-price--sale">-{{ getValue('sale') }} %</span>
              </span>
              <span>{{ getValue('sale') ?
                (getValue('price') * ((100 - getValue('sale')) / 100)).toFixed(2) :
                getValue('price') }} ₽</span>
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              Размер:
            </p>
            <v-btn
              v-for="item in getValue('sizes.size')"
              dark
              color="black"
              :outlined="item.id !== getValue('sizes.selected')"
              elevation="0"
              class="custom-btn mr-2"
              @click="setValue({ path: 'sizes.selected', value: item.id})"
            > {{ item.name }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col>
            <p>
              Цвет:
            </p>
            <v-btn
              v-for="item in getValue('colors.color')"
              dark
              color="black"
              :outlined="item.id !== getValue('colors.selected')"
              elevation="0"
              class="custom-btn mr-2"
              @click="setValue({ path: 'colors.selected', value: item.id})"
            > {{ item.name }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-8 product__horizontal-line">
          <v-col cols="3" class="mr-2">
            <v-row class="basket-buttons text-center align-center">
              <v-col
                @click="setValue({ path: 'amount', value: getValue('amount')-1})"
                class="basket-buttons__minus"
              >-
              </v-col>
              <v-col> {{ getValue('amount') }}</v-col>
              <v-col
                @click="setValue({ path: 'amount', value: getValue('amount')+1})"
                class="basket-buttons__plus"
              >+
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-btn
              dark
              color="black"
              elevation="0"
              class="custom-btn mr-2"
              @click="setProduct({
              name: getValue('name'),
              price: getValue('price'),
              amount: getValue('amount'),
              image: getValue('images[0].src')
              })"
            > В корзину
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <p>
            <b>{{ getValue('nameFull') }}</b> <br><br>
            <b>Состав:</b> {{ getValue('composition') }} <br><br>
            <b>Рекомендация по уходу:</b> <br><br>
            {{ getValue('recommendations') }}
          </p>
        </v-row>
      </v-col>
    </v-row>

    <other-products class="product__horizontal-line"/>

    <history/>

  </v-container>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  import BaseComponent from '~/modules/BaseComponent'
  import History from '~/components/History.vue'
  import OtherProducts from '~/components/OtherProducts.vue'

  const product = namespace('product')
  const basket = namespace('basket')
  const data = namespace('data')

  @Component({
    components: {
      History,
      OtherProducts
    }
  })
  export default class Product extends BaseComponent {

    constructor () {
      super()
    }

    @product.Getter getValue
    @product.Mutation setValue
    @product.Mutation('setProduct') setProductPage
    @basket.Mutation setProduct
    @data.Getter getData

    async newProduct (path) {
      await this.getApi()
      this.getData.forEach(item => {
        if (path === item.id) {
          this.setProductPage(item)
        }
      })
    }

    created () {
      let path = +location.pathname.replace(/[^-0-9]/gim, '')
      if (this.getValue('id') === path) {
        return
      } else {
        this.newProduct(path)
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .basket-buttons {
    min-width: 40px;
    min-height: 40px;
    background: $color--grey-light;
    border-radius: 8px;

    &__minus, &__plus {
      cursor: pointer;
    }
  }

  .custom-btn {
    min-width: 40px !important;
    min-height: 40px;
    padding: 0;
    border-radius: 8px;
  }

  .product {
    &__horizontal-line {
      padding-bottom: 48px;
      margin-bottom: 48px;
      border-bottom: 1px solid $color--grey-light;
    }

    &__history {
      font-size: 12px;
      color: $color--text;
    }

    &__sale {
      &-price {
        position: relative;
        text-decoration-line: line-through;
        color: $color--grey;

        &--sale {
          position: absolute;
          top: -12px;
          right: -15px;
          font-size: 14px;
          background: $color--red--opacity;
          color: $color--white;
          border-radius: 24px;
          padding: 2px 5px;
        }
      }
    }
  }
</style>
