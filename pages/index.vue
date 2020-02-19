<template>
  <div class="fill-height">
    <all-products/>
  </div>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BasePage from '~/modules/BasePage'

  import AllProducts from '~/components/AllProducts.vue'

  @Component({
    components: {
      AllProducts
    }
  })
  export default class extends BasePage {

    constructor () {
      super()
    }

    created () {
      this.getApi()
    }
  }
</script>
