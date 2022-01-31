<template>
  <li class="item">
    <nuxt-link class="item__link" :to="`/items/${item.id}`">
      <div class="item__details">
        <h3 class="item__title">{{ item.name }}</h3>
        <p class="item__description">{{ item.descr }}</p>

        <ul class="item__category-list">
          <li
            v-for="category in item.fullCategories"
            :key="category.id"
            class="item__category"
          >
            #{{ category.title }}
          </li>
        </ul>

        <button
          type="button"
          class="item__add-to-cart"
          @click.prevent="addToCart(item)"
        >
          Add to cart
        </button>
      </div>

      <span class="item__price">{{ item.cost }}</span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    addToCart(item) {
      this.$store.commit('ADD_TO_CART', item)
    }
  }
}
</script>

<style lang="sass">
.item
  &__link
    display: grid
    grid-template-columns: 2fr 1fr
    color: $dark-color
    transition: all 0.3s ease-in-out
    border-radius: 15px
    background-color: shade($light-color, 3%)
    height: 100%
    overflow: hidden

    &:hover
      transform: translate(-5px, -5px)
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
      border-color: transparent

  &__details
    padding: 15px
    display: flex
    flex-direction: column
    justify-content: center

  &__title
    font-size: 18px
    font-weight: 500
    margin-bottom: 10px

  &__description
    margin-bottom: 15px
    font-size: 16px
    line-height: 1.3

  &__price
    font-size: 20px
    font-weight: 500
    display: flex
    align-items: center
    justify-content: center
    font-size: 18px
    border-left: 1px solid $main-color
    padding: 15px
    background-color: transparentize($main-color, 0.7)

  &__category-list
    display: flex
    font-size: 16px
    margin-bottom: 15px
    margin-top: auto

  &__category
    padding: 5px 0
    border-radius: 20px
    color: $main-color

    &:not(:last-of-type)
      margin-right: 10px

  &__add-to-cart
    padding: 10px 15px
    border-radius: 15px
    background-color: $success-color
    color: $light-color
    margin-top: auto
    align-self: center
</style>