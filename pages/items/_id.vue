<template>
  <section class="item-page">
    <h2 class="item-page__header">{{ item.name }}</h2>

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
      @addToCart="addToCart(item)"
    >
      Add to cart
    </AddToCartBtn>
  </section>
</template>

<script>
import AddToCartBtn from '@/components/UI/AddToCartBtn.vue'

export default {
  components: { AddToCartBtn },

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

  methods: {
    addToCart(item) {
      this.$store.commit('ADD_TO_CART', item)
    }
  }
}
</script>

<style lang="sass">
.item-page
  &__header
    font-size: 24px
    font-weight: 600
    margin-bottom: 20px

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