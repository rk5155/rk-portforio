<template>
    <div id="app">

        <MainVisual></MainVisual>

        <Title title="プロフィール" en="profile" name="fas fa-user"></Title>

        <Content1 img='/img/IMG_4933.f3421192.jpg'>
            <div class="content1__text">
                <h3>Ryu-ki</h3>

                <p>フリーランスエンジニア</p>

                <p>大学卒業後アパレル会社にて勤務▶︎契約社員でプログラミングの仕事を始める▶︎フリーランス独立</p>

                <p>Vue.jsを使用した、高速なWEBサイト制作が得意<br>顧客を待たせない、高速なサイトをお作りいたします。</p>

                
                <router-link class="nav-link" to="/profile" active-class="link-active" exact>詳しい経歴プロフィールはこちら</router-link>

            </div>
        </Content1>

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


export default {
  name: 'App',
  components: {
    // HelloWorld
    MainVisual,
    Title,
    Content1,
    Content2,
    Chart,
    TablePrice
  },
  data: function() {
    return {
      servises: [
                    { id: 1, h3: "Webサイト制作・カスタマイズ", p: 'テキストテキストテキストテキスト', list1: 'テキスト', list2: 'テキスト', list3: 'テキストテキスト', list4: 'テキスト', class: 'content2__title--red' },
                    { id: 2, h3: "Webサイト制作・カスタマイズ", p: 'テキストテキストテキストテキスト', list1: 'テキスト', list2: 'テキスト', list3: 'テキストテキスト', list4: 'テキスト', class: 'content2__title--perple'  },
                    { id: 3, h3: "Webサイト制作・カスタマイズ", p: 'テキストテキストテキストテキスト', list1: 'テキスト', list2: 'テキスト', list3: 'テキストテキスト', list4: 'テキスト', class: 'content2__title--yellow'  },
                    { id: 4, h3: "Webサイト制作・カスタマイズ", p: 'テキストテキストテキストテキスト', list1: 'テキスト', list2: 'テキスト', list3: 'テキストテキスト', list4: 'テキスト', class: 'content2__title--pink'  }
                ],
      prices: [
                    { id: 1, name: "aaa", price: '200,000円〜' },
                    { id: 2, name: 'aaa', price: '200,000円〜' },
                    { id: 3, name: 'aaa', price: '200,000円〜' },
                    { id: 4, name: 'aaa', price: '200,000円〜' },
                    { id: 5, name: 'aaa', price: '200,000円〜' },
                    { id: 6, name: 'aaa', price: '200,000円〜' },
                    { id: 7, name: 'aaa', price: '200,000円〜' },
                 ]
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