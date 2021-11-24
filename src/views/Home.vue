<template>
    <div id="app">

        <MainVisual></MainVisual>

        <Title title="プロフィール" en="profile" name="fas fa-user"></Title>

        <Content1 :img='img'>
            <div class="content1__text">
                <h3>Ryu-ki</h3>

                <p>フリーランスエンジニア</p>

                <p>大学卒業後アパレル会社にて勤務▶︎契約社員でプログラミングの仕事を始める▶︎フリーランス独立</p>

                <p>Vue.jsを使用した、高速なWEBサイト制作が得意<br>顧客を待たせない、高速なサイトをお作りいたします。</p>

                
                <router-link class="nav-link" to="/profile" active-class="link-active" exact>詳しい経歴プロフィールはこちら</router-link>

            </div>
        </Content1>

        <Title title="メリット" en="merit" name="fas fa-american-sign-language-interpreting"></Title>

        <TwoBox :meritImg="meritImg" title="大手制作会社にて制作実績あり" text="私は大手制作会社にての制作実績が多数あります。そのノウハウを活かし、優れたWEBサイト制作が可能です。"
                :meritImg2="meritImg2" title2="訪問者を待たせない高速なWEBサイト作りが可能" text2="最近流行のSPA(シングルページアプリケーション)でのWEBサイト制作が可能です。詳細はお問い合わせ下さい。">
        </TwoBox>

        <Title title="スキル" en="Skills" name="fas fa-laptop"></Title>

        <Chart></Chart>

        <Title title="サービス内容" en="Services" name="fas fa-taxi"></Title>

        <div class="content2">
        <Content2 v-for="servise in servises" v-bind:key="servise.id" v-bind:servise="servise"></Content2>
        </div>

        <Title title="価格表" en="Price" name="fas fa-yen-sign"></Title>

        <table class="table table-striped">
            <tbody>
            
            <TablePrice v-for="price in prices" v-bind:key="price.id" v-bind:price="price"></TablePrice>
            </tbody>
        </table>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainVisual from '../components/MainVisual.vue'
import Title from '../components/Title.vue'
import Content1 from '../components/Content1.vue'
import Content2 from '../components/Content2.vue'
import Chart from '../components/Chart.vue'
import TablePrice from '../components/TablePrice.vue'
import TwoBox from '../components/TwoBox.vue'
// @ は省略記法 src 配下を省略できる
// import { serviseData } from '../serviseData.js' と同じ
import { serviseData } from '@/serviseData.js'

export default {
  name: 'App',
  mixins: [ serviseData ],
  components: {
    // HelloWorld
    MainVisual,
    Title,
    Content1,
    Content2,
    Chart,
    TablePrice,
    TwoBox
  },
  data() {
      return {
          img: require('@/assets/IMG_4933.jpg'),
          meritImg: require('@/assets/img_01.jpg'),
          meritImg2: require('@/assets/img_02.jpg')
      }
  }
}
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
  }
  .content2 {
    display: flex;
    flex-flow: wrap;
    text-align: center;
  }
  .table {
    width: 980px;
    margin: 50px auto;
  }
</style>