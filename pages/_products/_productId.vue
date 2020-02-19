<template>
  <div class="fill-height">
    <product/>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BasePage from '~/modules/BasePage'
  import Product from '~/components/Product.vue'

  @Component({
    components: {
      Product
    }
  })
  export default class ProductId extends BasePage {

  }
</script>
