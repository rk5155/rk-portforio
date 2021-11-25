<template>
    <div>
        <Content1 :img="img">
            <div class="content1__text">
                <h3>Ryu-ki</h3>

                <p>フリーランスエンジニア</p>

                <p>大学卒業後アパレル会社にて勤務▶︎契約社員でプログラミングの仕事を始める▶︎フリーランス独立</p>

                <p>Vue.jsを使用した、高速なWEBサイト制作が得意<br>顧客を待たせない、高速なサイトをお作りいたします。</p>

            </div>
        </Content1>

        <table class="table table-striped">
                <tbody>
                
                    <TablePrice v-for="price in prices" v-bind:key="price.id" v-bind:price="price"></TablePrice>
                </tbody>
        </table>

    </div>
    

</template>

<script>
import Content1 from '../components/Content1.vue'
import TablePrice from '../components/TablePrice.vue'

export default {
  components: {
    Content1,
    TablePrice
    
  },
  data() {
      return {
          img: require('@/assets/IMG_4933.jpg'),
          prices: [
                    { id: 1, name: "出身", price: '埼玉' },
                    { id: 2, name: '趣味', price: 'ゴルフ、野球観戦、ピアノ、温泉、ゲーム' },
                    { id: 3, name: '職業', price: 'WEBエンジニア、デザイナー' },
                    { id: 4, name: '経歴', price: `→大学卒業後大手アパレルメーカーにて勤務(2年)<br>→独学でプログルミングの勉強を始める(半年)<br>→派遣社員でプログラミングの仕事を始める<br>→1年後フリーランス独立<br>→フリーランス独立暦2年`}
                 ]
      }
  }
}
</script>

<style scoped>
.content1 {
    padding-top: 140px;
}
</style>