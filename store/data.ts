export const state = () => ({
  data: []
})

export const mutations = {
  setData (state, data): void {
    state.data = data
  }
}

export const getters = {
  getData: state => {
    return state.data
  }
}

export const actions = {}
