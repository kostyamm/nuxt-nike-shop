<template>
  <v-app>
    <div class="page">
      <header-component/>
      <v-content class="content mt-10" style="width: 1280px; margin: 0 auto;">
        <nuxt />
      </v-content>
      <footer-component/>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from '~/components/HeaderComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'

@Component({
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
})
export default class Default extends Vue {
}
</script>

<style lang="scss" scoped>
  .page {
    @media (min-width: 960px) {
      .content {
        min-height: calc(100vh - 137px);
        min-height: -moz-calc(100vh - 137px);
        min-height: -webkit-calc(100vh - 137px);
      }
    }
  }
</style>
