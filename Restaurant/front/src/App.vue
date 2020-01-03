<template>
  <div id="app">
    <APPHeader></APPHeader>
      <router-view/>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import Header from './components/layouts/header/Header'
import Footer from './components/layouts/footer/Footer'
export default {
  name: 'App',
  components: {
    'APPHeader': Header,
    'AppFooter': Footer
  }
}
</script>

<style scoped>
</style>
