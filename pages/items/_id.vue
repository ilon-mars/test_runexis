<template>
  <section class="item-page">
    <h2 class="item-page__header title">{{ item.name }}</h2>

    <p class="item-page__description">{{ item.descr }}</p>

    <ul class="item-page__category-list">
      <li
        v-for="category in item.fullCategories"
        :key="category.id"
        class="item-page__category"
      >
        {{ category.title }}
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
  </section>
</template>

<script>
import AddToCartBtn from '@/components/UI/AddToCartBtn.vue'
import addToCart from '@/mixins/addToCart'
import removeFromCart from '@/mixins/removeFromCart'

export default {
  components: { AddToCartBtn },

  mixins: [addToCart, removeFromCart],

  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  computed: {
    item() {
      return this.$store.getters.getItemById(+this.id)
    },
    id() {
      return this.$route.params.id
    }
  },
}
</script>

<style lang="sass">
.item-page
  &__description
    margin-bottom: 15px

  &__category-list
    display: flex
    align-items: center
    margin-bottom: 20px

  &__category
    font-weight: 600
    font-size: 18px
    padding: 10px 15px
    border-radius: 20px
    border: 1px solid $main-color

    &:not(:last-of-type)
      margin-right: 15px
</style>