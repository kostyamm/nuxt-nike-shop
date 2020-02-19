export const state = () => ({
  basket: []
})

export const mutations = {
  setProduct (state, data): void {
    state.basket.push(data)
  }
}

export const getters = {
  getBasket: state => {
    return state.basket
  }
}

export const actions = {}
