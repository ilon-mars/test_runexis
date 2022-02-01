<template>
  <div>
    <AppHeader />

    <main>
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