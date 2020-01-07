<template>
  <div class="">
    <slider></slider>
    <AppContent></AppContent>
    <button type="button" @click="newFunction" class="btn btn-success">Api Response</button>
    <h3>{{ value }}</h3>
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
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    newFunction: function () {
      this.$http.get('http://127.0.0.1:8000/api/test')
        .then(function (res) {
          this.value = res.body
        })
    }
  }
}
</script>

<style scoped>

</style>
