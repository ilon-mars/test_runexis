<template>
  <section></section>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>