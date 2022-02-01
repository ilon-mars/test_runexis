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

        <AddToCartBtn
          type="button"
          class="item__add-to-cart"
          :item-id="item.id"
          @addToCart="addToCart(item)"
          @removeFromCart="removeFromCart(item.id)"
        >
          Add to cart
        </AddToCartBtn>
      </div>

      <span class="item__price">{{ item.cost }}</span>
    </nuxt-link>
  </li>
</template>

<script>
import AddToCartBtn from '@/components/UI/AddToCartBtn.vue'
import addToCart from '@/mixins/addToCart'
import removeFromCart from '@/mixins/removeFromCart'

export default {
  components: { AddToCartBtn },

  mixins: [addToCart, removeFromCart],

  props: {
    item: {
      type: Object,
      required: true
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
</style>