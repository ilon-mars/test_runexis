<template>
  <button
    type="button"
    class="btn remove-from-cart"
    @click.prevent="$emit('removeFromCart')"
  >
    Remove
  </button>
</template>

<style lang="sass">
.remove-from-cart
  background-color: $warning-color
  color: $light-color
  margin-top: auto
  align-self: center
</style>