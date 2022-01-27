<template>
  <li class="item">
    <nuxt-link class="item__link" to="/items/1">
      <h3 class="item__title">Item name</h3>
      <p class="item__description">item description</p>
      <span class="item__price">cost</span>
      <ul class="item__category-list">
        <li class="item__category"></li>
      </ul>
    </nuxt-link>
  </li>
</template>

<style lang="sass">
.item
  &__link
    display: flex
    flex-direction: column
    padding: 15px
    color: $dark-color
    transition: all 0.3s ease-in-out
    border: 1px solid $main-color

    &:hover
      background-color: shade($light-color, 3%)
      transform: translate(-5px, -5px)
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
      border-color: transparent

  &__title
    font-size: 20px
    font-weight: 500
    margin-bottom: 10px

  &__description
    margin-bottom: 10px
    font-size: 16px

  &__price
    margin-bottom: 10px
    font-size: 18px

  &__category-list
    display: flex
    font-size: 16px
</style>