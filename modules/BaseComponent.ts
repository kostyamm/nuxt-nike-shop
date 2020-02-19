import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Base from '~/modules/Base'

const product = namespace('product')

@Component
export default class BaseComponent extends Base {

  constructor () {
    super()
  }
  @product.Mutation setProduct

  redirectToProduct (id, product) {
    this.setProduct(product)
    this.$router.push(`${id}`)
  }

}
