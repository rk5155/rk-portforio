<template>
    <div class="container">
        <div class="row">
            <a class="col-sm" v-for="list in navList" :key="list.text" :href="list.url">
                <div class="container__img">
                    <img :src="list.img" alt="">
                </div>
                
                <p>{{ list.text }}</p>
            </a>
        </div>
    </div>
</template>

<script>


export default {
  data () {
    return {
      navList: [
        {
          text: 'アメリカ大統領選挙 | NHK',
          img: require('@/assets/production/img_01.png'),
          url: 'https://www3.nhk.or.jp/news/special/presidential-election_2020/'
        },
        {
          text: 'ニュース報道の約束 | NHK',
          img: require('@/assets/production/img_02.png'),
          url: 'https://www3.nhk.or.jp/news/special/promise/'
        },
        {
          text: '新型コロナウイルス | NHK',
          img: require('@/assets/production/img_03.png'),
          url: 'https://www3.nhk.or.jp/news/special/coronavirus/'
        },
        {
          text: 'nishikawa | ふとん',
          img: require('@/assets/production/img_04.png'),
          url: 'https://shop.nishikawa1566.com/shop/default.aspx'
        },
        {
          text: 'TSUTSUMI | ジュエリー',
          img: require('@/assets/production/img_05.png'),
          url: 'https://www.tsutsumishop.jp/shop/default.aspx'
        },
        {
          text: 'ヒュミラ情報ネット | 医療',
          img: require('@/assets/production/img_06.png'),
          url: 'https://www.e-humira.jp/patient/order'
        }
      ]
    }
  }
}
</script>

<style>
.container {
    text-align: center;
    margin: 80px auto;
}
.container__img {
    height: 310px;
}
.container img {
    width: 300px;
    text-align: center;
}
.col-sm {
    margin-bottom: 40px;
}
</style>