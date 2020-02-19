<template>
  <v-container class="footer">
    <v-row>
      <v-col>
        FOOTER
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BaseComponent from '~/modules/BaseComponent'

  @Component
  export default class FooterComponent extends BaseComponent {
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .footer {
    background: $color--grey-light;
  }
</style>
