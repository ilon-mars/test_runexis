export default {
  methods: {
    addToCart(item) {
      this.$store.commit('ADD_TO_CART', item)
    },
  },
}
