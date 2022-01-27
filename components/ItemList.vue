<template>
  <ul class="items">
    <item-card></item-card>
  </ul>
</template>

<script>
import ItemCard from '~/components/ItemCard'

export default {
  components: { ItemCard }
}
</script>

<style lang="sass">
.items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  justify-content: space-between
  grid-row-gap: 5px
  grid-column-gap: 5px
</style>