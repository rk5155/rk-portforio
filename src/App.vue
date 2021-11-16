<template>
  <div id="app">
    <Header></Header>
    <MainVisual></MainVisual>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import MainVisual from './components/MainVisual.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    MainVisual
  }
}
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
  }
</style>
