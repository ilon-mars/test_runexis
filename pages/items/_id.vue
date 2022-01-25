<template>
  <main></main>
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