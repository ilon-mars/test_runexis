<template>
  <div>
    <AppHeader />

    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: { AppHeader }
}
</script>