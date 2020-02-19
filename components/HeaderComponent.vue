<template>
  <v-container>
    <v-row class="align-center mt-3">
      <v-col cols="1">
        <v-img
          :src="require('assets/images/logo.png')"
          :height="26"
          contain
          class="cursor-pointer"
          @click="goToStartPage()"
        ></v-img>
      </v-col>
      <v-col
        class="text-center"
        cols="9"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <a
              v-on="on"
            >
              Все товары
              <img
                class="mr-3"
                :src="require('assets/images/down.png')"
                :height="7.5"
                contain
              />
            </a>
          </template>

          <v-list>
            <v-list-item
              v-for="(product, index) in getData"
              :key="index"
              @click="redirectToProduct(product.id, product)"
            >
              <v-list-item-title>{{ product.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <a
              v-on="on"
            >
              Одежда
              <img
                class="mr-3"
                :src="require('assets/images/down.png')"
                :height="7.5"
                contain
              />
            </a>
          </template>

          <v-list>
            <v-list-item
              @click=""
            >
              <v-list-item-title>example</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <a
              class="mr-3"
              v-on="on"
            >
              Аксессуары
              <img
                class="mr-3"
                :src="require('assets/images/down.png')"
                :height="7.5"
                contain
              />
            </a>
          </template>

          <v-list>
            <v-list-item
              @click=""
            >
              <v-list-item-title>example</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <a
              class="mr-3"
              v-on="on"
            >
              Коллекции
              <img
                class="mr-3"
                :src="require('assets/images/down.png')"
                :height="7.5"
                contain
              />
            </a>
          </template>

          <v-list>
            <v-list-item
              @click=""
            >
              <v-list-item-title>example</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col
        class="text-right"
        cols="2"
      >
        <v-row class="justify-end">
          <div class="mr-3">
            <v-img
              :src="require('assets/images/search.png')"
              :height="25"
              contain
            ></v-img>
          </div>
          <div class="basket">
            <v-img
              @click.stop="drawer = !drawer"
              :src="require('assets/images/basket.png')"
              :height="21"
              contain
              class="cursor-pointer"
            ></v-img>
            <span
              v-if="getBasket.length"
              class="basket__sum"
            >
              {{ getBasket.length }}
            </span>
          </div>
        </v-row>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
          class="basket-window"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between w-100 px-3">
                <div>Корзина</div>
                <div
                  class="cursor-pointer"
                  @click="drawer = !drawer"
                >X
                </div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-row
            v-for="product in getBasket"
            :key="product.name"
            class="pa-5"
          >
              <v-col cols="2">
                <div>
                  <v-img
                    @click.stop="drawer = !drawer"
                    :src=product.image
                    :height="100"
                    contain
                  ></v-img>
                </div>
              </v-col>
              <v-col cols="10" class="text-right">
                <div>{{ product.name }}</div>
                <div>Количество: {{ product.amount }}</div>
                <div>Цена: {{ product.price }} ₽</div>
              </v-col>
          </v-row>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import BaseComponent from '~/modules/BaseComponent'

  const basket = namespace('basket')
  const data = namespace('data')

  @Component
  export default class HeaderComponent extends BaseComponent {
    drawer = null

    constructor () {
      super()
    }

    @basket.Getter getBasket
    @data.Getter getData

    goToStartPage () {
      this.$router.push('/')
    }

  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .basket {
    position: relative;

    &__sum {
      position: absolute;
      top: -10px;
      right: -10px;
      font-size: 12px;
      font-weight: 600;
      background: $color--red--opacity;
      color: $color--white;
      border-radius: 50%;
      min-width: 20px;
      min-height: 20px;
      text-align: center;
      padding: 2px;
    }
  }

  .basket-window {
    width: 40% !important;

    &__basket-buttons {
      min-width: 40px;
      min-height: 40px;
      background: $color--grey-light;
      border-radius: 8px;

      &__minus, &__plus {
        cursor: pointer;
      }
    }
  }
</style>
