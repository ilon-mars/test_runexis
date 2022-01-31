<template>
  <section v-if="items.length">
    <CategoryList />
    <ItemList />
  </section>

  <Loader v-else />
</template>

<script>
import { mapGetters } from 'vuex'
import ItemList from '@/components/ItemList'
import Loader from '@/components/Loader'
import CategoryList from '@/components/CategoryList'

export default {
  components: { Loader, ItemList, CategoryList },

  computed: {
    ...mapGetters({
      items: 'getItems'
    })
  }
}
</script>
