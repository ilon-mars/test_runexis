<template>
  <section class="filter">
    <h2 class="filter__title">Filter by category:</h2>
    <ul class="filter__category-list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="filter__category"
        :class="{ active: category.id === selectedCategoryId }"
        @click="selectCategory(category.id)"
      >
        {{ category.title }}
      </li>
    </ul>

    <select class="filter__category-select" @change="selectHandler">
      <option
        v-for="category in categories"
        :key="category.id"
        :selected="category.id === selectedCategoryId"
        :value="category.id"
      >
        {{ category.title }}
      </option>
    </select>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      selectedCategoryId: 0
    }
  },

  computed: {
    ...mapGetters(['getCategories']),
    categories() {
      return [{ id: 0, title: 'all' }, ...this.getCategories]
    }
  },

  methods: {
    selectCategory(categoryId) {
      this.selectedCategoryId = categoryId
      this.$nuxt.$emit('selectCategory', categoryId)
    },
    selectHandler(e) {
      this.selectCategory(+e.target.value)
    }
  }
}
</script>

<style lang="sass">
.filter
  display: flex
  align-items: center
  margin-bottom: 20px

  &__title
    font-size: 20px

  &__category-list
    max-width: 80%
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto

  &__category-select
    display: none
    padding: 10px
    border-radius: 15px
    font-size: 16px
    font-family: inherit
    border-color: $main-color

  &__category
    padding: 10px 15px
    border: 1px solid $main-color
    border-radius: 15px
    cursor: pointer
    transition: all 0.3s ease-in-out

    &:hover
      background-color: $main-color
      color: $light-color

    &:not(:last-of-type)
      margin-right: 15px

    &.active
      background-color: $main-color
      color: $light-color
      font-weight: 500

  @media screen and ( max-width: 800px )
    flex-direction: column

    &__title
      margin-bottom: 15px

    &__category-list
      max-width: 100%

  @media screen and ( max-width: 580px )
    &__category
      &:not(:last-of-type)
        margin-right: 10px

    &__category-list
      display: none

    &__category-select
      display: block
</style>