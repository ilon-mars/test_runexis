<template>
  <section v-if="items.length">
    <ItemList />
  </section>

  <Loader v-else />
</template>

<script>
import { mapGetters } from 'vuex'
import ItemList from '@/components/ItemList'
import Loader from '@/components/Loader'

export default {
  components: { Loader, ItemList },

  computed: {
    ...mapGetters({
      items: 'getItems'
    })
  }
}
</script>
