<template>
  <div id="app">
    <Header></Header>
    <MainVisual></MainVisual>
    <Title title="プロフィール" en="profile" name="fas fa-user"></Title>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import MainVisual from './components/MainVisual.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    MainVisual,
    Title
  }
}
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
  }
</style>
