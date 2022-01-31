import { ENDPOINTS } from '~/service/api'

const state = () => ({
  items: [],
  categories: [],
  cart: []
})

const mutations = {
  SET_ITEMS: (state, items) => {
    state.items = items
  },

  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },

  ADD_TO_CART: (state, item) => {
    state.cart.push(item)
  }
}

const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('loadData')
  },

  async loadData({ commit }) {
    const values = await Promise.all(
      Object.values(ENDPOINTS).map(endpoint => this.$axios.$get(endpoint))
    )
    const itemsWithCategoryNames = values[0].reduce((acc, item) => {
      const fullCategory = values[1].filter(element =>
        item.categories.includes(element.id)
      )

      item = { ...item, fullCategories: fullCategory }
      acc.push(item)
      return acc
    }, [])

    commit('SET_CATEGORIES', values[1])
    commit('SET_ITEMS', itemsWithCategoryNames)
  },
}

export const getters = {
  getItems: state => state.items,
  getCategories: state => state.categories,
  getItemsFromCart: state => state.cart,
  getItemsInCartNumber: state => state.cart.length
}

export default {
  state,
  mutations,
  actions,
  getters,
}
