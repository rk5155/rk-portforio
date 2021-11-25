<template>
    <div class="container">
        <div class="row" v-if="$route.params.id == 'all'">
            <router-link class="col-sm" v-for="list in navList" :key="list.text" :to="list.id">
                <div class="container__img">
                    <img :src="list.img" alt="">
                </div>
                
                <p>{{ list.text }}</p>
            </router-link>
        </div>


        <ProductionDetail v-if="$route.params.id == 1" :navList="navList[0]">
            <ul>
                <li>業務内容：Webデザイン・コーディング・プログラミング・SEO対策</li>
                <li>URL: <a :href="navList[0].url">{{ navList[0].url }}</a></li>
            </ul>
        </ProductionDetail>

        <ProductionDetail v-else-if="$route.params.id == 2" :navList="navList[1]">
            <ul>
                <li>業務内容：Webデザイン・コーディング・プログラミング・SEO対策</li>
                <li>URL: <a :href="navList[1].url">{{ navList[1].url }}</a></li>
            </ul>
        </ProductionDetail>

        <ProductionDetail v-else-if="$route.params.id == 3" :navList="navList[2]">
            <ul>
                <li>業務内容：Webデザイン・コーディング・プログラミング・SEO対策</li>
                <li>URL: <a :href="navList[2].url">{{ navList[2].url }}</a></li>
            </ul>
        </ProductionDetail>

        <ProductionDetail v-else-if="$route.params.id == 4" :navList="navList[3]">
            <ul>
                <li>業務内容：Webデザイン・コーディング・プログラミング・SEO対策</li>
                <li>URL: <a :href="navList[3].url">{{ navList[3].url }}</a></li>
            </ul>
        </ProductionDetail>

        <ProductionDetail v-else-if="$route.params.id == 5" :navList="navList[4]">
            <ul>
                <li>業務内容：Webデザイン・コーディング・プログラミング・SEO対策</li>
                <li>URL: <a :href="navList[4].url">{{ navList[4].url }}</a></li>
            </ul>
        </ProductionDetail>

        <ProductionDetail v-else-if="$route.params.id == 6" :navList="navList[5]">
            <ul>
                <li>業務内容：Webデザイン・コーディング・プログラミング・SEO対策</li>
                <li>URL: <a :href="navList[5].url">{{ navList[5].url }}</a></li>
            </ul>
        </ProductionDetail>

    </div>
</template>

<script>
import ProductionDetail from '../components/ProductionDetail.vue'


export default {
  components: {
        ProductionDetail
  },
  data () {
    return {
      navList: [
        {
          text: 'アメリカ大統領選挙 | NHK',
          img: require('@/assets/production/img_01.png'),
          id: '/production/1',
          url: 'https://www3.nhk.or.jp/news/special/presidential-election_2020/'
        },
        {
          text: 'ニュース報道の約束 | NHK',
          img: require('@/assets/production/img_02.png'),
          id: '/production/2',
          url: 'https://www3.nhk.or.jp/news/special/promise/'
        },
        {
          text: '新型コロナウイルス | NHK',
          img: require('@/assets/production/img_03.png'),
          id: '/production/3',
          url: 'https://www3.nhk.or.jp/news/special/coronavirus/'
        },
        {
          text: 'nishikawa | ふとん',
          img: require('@/assets/production/img_04.png'),
          id: '/production/4',
          url: 'https://shop.nishikawa1566.com/shop/default.aspx'
        },
        {
          text: 'TSUTSUMI | ジュエリー',
          img: require('@/assets/production/img_05.png'),
          id: '/production/5',
          url: 'https://www.tsutsumishop.jp/shop/default.aspx'
        },
        {
          text: 'ヒュミラ情報ネット | 医療',
          img: require('@/assets/production/img_06.png'),
          id: '/production/6',
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
    margin: 140px auto 70px;
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
@media screen and (max-width: 580px) {
    .container {
        width: 95%;
        margin: 112px auto 60px;
    }
    .container img {
        width: auto;
        height: 300px;
        text-align: center;
    }
    .container .detaill {
        width: 100%;
        padding: 40px 20px;
    }
    .container .detaill img {
        width: auto;
    }
    .container ul {
        width: 100%;
        padding: 0;
    }
    .col-sm {
        margin-bottom: 50px;
    }
}
</style>