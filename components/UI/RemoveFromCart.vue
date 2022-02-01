<template>
  <button
    type="button"
    class="remove-from-cart"
    @click.prevent="$emit('removeFromCart')"
  >
    Remove
  </button>
</template>

<style lang="sass">
.remove-from-cart
  padding: 10px 15px
  border-radius: 15px
  background-color: $warning-color
  color: $light-color
  margin-top: auto
  align-self: center
</style>