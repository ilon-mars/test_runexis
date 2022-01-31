<template>
  <ul class="items">
    <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCard from '~/components/ItemCard'

export default {
  components: { ItemCard },

  data() {
    return {
      filteredItems: []
    }
  },

  computed: {
    ...mapGetters({
      items: 'getItems'
    })
  },

  mounted() {
    this.filteredItems = this.items
    this.$nuxt.$on('selectCategory', this.filterItems)
  },

  methods: {
    filterItems(categoryId) {
      if (categoryId === 0) {
        this.filteredItems = this.items
      } else {
        this.filteredItems = this.items.filter(item =>
          item.categories.includes(categoryId)
        )
      }
    }
  }
}
</script>

<style lang="sass">
.items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  justify-content: space-between
  grid-row-gap: 15px
  grid-column-gap: 15px

  @media screen and ( max-width: 1200px )
    grid-template-columns: repeat(3, 1fr)
  @media screen and ( max-width: 800px )
    grid-template-columns: repeat(2, 1fr)
  @media screen and ( max-width: 580px )
    grid-template-columns: 1fr
</style>