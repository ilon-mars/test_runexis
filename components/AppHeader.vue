<template>
  <header class="header">
    <nuxt-link
      class="header__cart-link"
      to="/cart"
      :data-counter="itemsInCart"
      :style="isCounterVisible"
    >
      <svg class="header__cart-icon">
        <use xlink:href="~/assets/img/sprite.svg#cart"></use>
      </svg>
    </nuxt-link>

    <span class="header__cart-price">{{itemsInCart ? totalPrice : 'Cart is empty'}}</span>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      itemsInCart: 'getItemsInCartNumber',
      totalPrice: 'getTotalPrice'
    }),
    isCounterVisible() {
      return this.itemsInCart
        ? `--counter-visibility: flex`
        : `--counter-visibility: none`
    }
  }
}
</script>

<style lang="sass">
.header
  padding: 10px
  background-color: $main-color
  display: flex
  justify-content: flex-end
  margin-bottom: 20px

  &__cart-link
    --counter-visibility: flex

    width: 40px
    height: 40px
    display: flex
    position: relative

    &::before
      content: attr(data-counter)
      width: 18px
      height: 18px
      border-radius: 50%
      position: absolute
      top: 0
      right: 0
      background-color: $warning-color
      font-size: 12px
      display: var(--counter-visibility)
      align-items: center
      justify-content: center
      color: $light-color

  &__cart-icon
    width: 100%
    height: 100%
    fill: $light-color

  &__cart-price
    display: flex
    align-items: center
    justify-content: center
    font-size: 20px
    font-weight: 500
    color: #fff
    margin: 0 20px
</style>