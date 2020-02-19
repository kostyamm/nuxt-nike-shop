import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import axios from 'axios'
import _ from 'lodash'

const data = namespace('data')

@Component
export default class Base extends Vue {
  protected readonly axios
  protected readonly lodash

  constructor () {
    super()

    this.axios = axios
    this.lodash = _
  }
  @data.Mutation setData

  async getApi () {
    let { data: products } = await this.axios.get('testAPI.json')
    this.setData(products)
  }
}
