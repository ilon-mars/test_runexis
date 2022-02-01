<template>
  <button
    type="button"
    class="add-to-cart"
    @click.prevent="$emit('addToCart')"
  >
    Add to cart
  </button>
</template>

<style lang="sass">
.add-to-cart
  padding: 10px 15px
  border-radius: 15px
  background-color: $success-color
  color: $light-color
  margin-top: auto
  align-self: center
</style>