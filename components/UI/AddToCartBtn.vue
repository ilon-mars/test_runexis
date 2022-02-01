<template>
  <RemoveFromCart v-if="isItemInCart" @removeFromCart="$emit('removeFromCart')" />

  <button
    v-else
    type="button"
    class="add-to-cart"
    @click.prevent="$emit('addToCart')"
  >
    Add to cart
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
import RemoveFromCart from '@/components/UI/RemoveFromCart'

export default {
  components: { RemoveFromCart },

  props: {
    itemId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      cart: 'getItemsFromCart'
    }),
    isItemInCart() {
      return this.cart.findIndex(elem => elem.id === this.itemId) >= 0
    }
  }
}
</script>

<style lang="sass">
.add-to-cart
  padding: 10px 15px
  border-radius: 15px
  background-color: $success-color
  color: $light-color
  margin-top: auto
  align-self: center
</style>