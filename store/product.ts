import _ from 'lodash'

export const state = () => ({
  product: {
    id: 0,
    name: 'Свитшот Nike',
    nameFull: 'Свитшот оверсайз со спущенной линией плеча.',
    composition: '80% хлопок, 20% полиэстер.',
    recommendations: 'Только ручная стирка при температуре не выше 30 градусов, нейтральными моющими средствами; не тереть; не отжимать; отбеливание запрещено; не стирать моющими средствами содержащие отбеливатель; химчистка запрещена; гладить при низкой температуре до 100 градусов; сушить в тени на горизонтальной поверхности.',
    amount: 1,
    price: 3999,
    sale: 33,
    image: require('@/static/product/image43.png'),
    sizes: {
      selected: 4,
      size: [
        {
          id: 1,
          name: 'S',
        },
        {
          id: 2,
          name: 'M',
        },
        {
          id: 3,
          name: 'XL',
        },
        {
          id: 4,
          name: 'XXL',
        }
      ]
    },
    colors: {
      selected: 2,
      color: [
        {
          id: 1,
          name: 'Красный',
        },
        {
          id: 2,
          name: 'Зеленый',
        },
        {
          id: 3,
          name: 'Синий',
        },
        {
          id: 4,
          name: 'Розовый',
        }
      ]
    },
    images: [
      {
        src: require('@/static/product/image43.png'),
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      }
    ]

  }
})

export const mutations = {
  setProduct (state, data):void {
    state.product = data
  },
  setValue (state, data): void {
    _.set(state.product, data.path, data.value)
  },
  deleteValueByPath (state, path) {
    _.unset(state.product, path)
  }
}

export const getters = {
  getValue: state => path => {
    return _.get(state.product, path)
  }
}

export const actions = {}
