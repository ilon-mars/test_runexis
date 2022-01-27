<template>
  <header class="header">
    <nuxt-link class="header__cart-link" to="/cart" data-counter="10">
      <svg class="header__cart-icon">
        <use xlink:href="~/assets/img/sprite.svg#cart"></use>
      </svg>
    </nuxt-link>
  </header>
</template>

<style lang="sass">
.header
  padding: 10px
  background-color: $main-color
  display: flex
  justify-content: flex-end
  margin-bottom: 20px

  &__cart-link
    display: flex
    width: 40px
    height: 40px
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
      display: flex
      align-items: center
      justify-content: center
      color: $light-color

  &__cart-icon
    width: 100%
    height: 100%
    fill: $light-color
</style>