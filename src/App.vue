<template>
  <div id="app">
    <Header></Header>

    <MainVisual></MainVisual>

    <Title title="プロフィール" en="profile" name="fas fa-user"></Title>

    <Content1 img='/img/IMG_4933.f3421192.jpg'>
        <div>
            <h3>Ryu-ki</h3>

            <p>フリーランスエンジニア</p>

            <p>大学卒業後アパレル会社にて勤務▶︎IT企業に転職▶︎フリーランス独立</p>

            <p>Vue.jsを使用した、高速なWEBサイト制作が得意<br>顧客を待たせない、高速なサイトをお作りいたします。</p>

            <a href="">詳しい経歴プロフィールはこちら</a>

        </div>
    </Content1>

    <Title title="スキル" en="Skills" name="fas fa-laptop"></Title>

    <Chart></Chart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import MainVisual from './components/MainVisual.vue'
import Title from './components/Title.vue'
import Content1 from './components/Content1.vue'
import Chart from './components/Chart.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    MainVisual,
    Title,
    Content1,
    Chart
  }
}
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
  }
</style>
