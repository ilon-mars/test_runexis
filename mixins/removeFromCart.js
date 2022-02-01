export default {
  methods: {
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id)
    }
  }
}