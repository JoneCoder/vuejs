<template>
  <div class="">
    <slider></slider>
    <AppContent></AppContent>
    <gallery></gallery>
    <support></support>
  </div>
</template>

<script>
import Content from './home/Content'
import Slider from './home/Slider'
import Gallery from './home/Gallery'
import Support from './home/Support'
export default {
  name: 'home',
  components: {
    'slider': Slider,
    'AppContent': Content,
    'support': Support,
    'gallery': Gallery
  }
}
</script>

<style scoped>

</style>
