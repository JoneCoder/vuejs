<template>
    <div id="">
      <gallery></gallery>
      <AppContent></AppContent>
    </div>
</template>

<script>
import Gallery from './food/Gallery'
import AppContent from './food/Content'
export default {
  name: 'Food',
  components: {
    'gallery': Gallery,
    'AppContent': AppContent
  }
}
</script>

<style scoped>

</style>
