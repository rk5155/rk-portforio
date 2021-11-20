<template>
    <div>
        <div class="content2" v-if="$route.params.id == 'all'">
            <Content2 v-for="servise in servises" v-bind:key="servise.id" v-bind:servise="servise"></Content2>
        </div>

        <ServiceDetail v-if="$route.params.id == 1" :title='contentList[0].title' :topText="contentList[0].topText" :h3='contentList[0].h3' :flows='contentList[0].flows' :prices='contentList[0].prices'></ServiceDetail>

        <ServiceDetail v-if="$route.params.id == 2" :title='contentList[1].title' :topText="contentList[1].topText" :h3='contentList[1].h3' :flows='contentList[1].flows' :prices='contentList[1].prices'></ServiceDetail>

        <ServiceDetail v-if="$route.params.id == 3" :title='contentList[2].title' :topText="contentList[2].topText" :h3='contentList[2].h3' :flows='contentList[2].flows' :prices='contentList[2].prices'></ServiceDetail>

        <ServiceDetail v-if="$route.params.id == 4" :title='contentList[3].title' :topText="contentList[3].topText" :h3='contentList[3].h3' :flows='contentList[3].flows' :prices='contentList[3].prices'></ServiceDetail>

    </div>

</template>


<script>
import Content2 from '../components/Content2.vue'
// @ は省略記法 src 配下を省略できる
// import { serviseData } from '../serviseData.js' と同じ
import { serviseData } from '@/serviseData.js'
import ServiceDetail from '../components/ServiceDetail.vue'


export default {
  components: {
    Content2,
    ServiceDetail
  },
  mixins: [ serviseData ],
  data () {
    return {
      contentList: [
        {
          title: 'WEB制作',
          topText: `WordPressサイトのフルコーディネートから部分的な修正・カスタマイズを承っております。<br>
                    実務経験、個人のブログ運営のノウハウを活かしSEOに強いサイト制作が得意です。<br>
                    WordPressは世界の約30%のサイトで用いられているCMS（コンテンツマネジメントシステム）です。<br>
                    記事の更新がしやすいことが最大のメリットで、うまく運用すればSEOに強いサイトを構築することができ、コンバージョンの獲得につながります。`,
          h3: 'LP（ランディングページ）制作の流れ',
          flows: ['お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい'],
          prices: [
                        { id: 1, name: "aaa", price: '200,000円〜' },
                        { id: 2, name: 'ssss', price: '200,000円〜' },
                        { id: 3, name: 'aaa', price: '200,000円〜' },
                        { id: 4, name: 'aaa', price: '200,000円〜' },
                        { id: 5, name: 'aaa', price: '200,000円〜' },
                        { id: 6, name: 'aaa', price: '200,000円〜' },
                        { id: 7, name: 'aaa', price: '200,000円〜' },
          ]
        },
        {
          title: 'LP制作',
          topText: `WordPressサイトのフルコーディネートから部分的な修正・カスタマイズを承っております。<br>
                    実務経験、個人のブログ運営のノウハウを活かしSEOに強いサイト制作が得意です。<br>
                    WordPressは世界の約30%のサイトで用いられているCMS（コンテンツマネジメントシステム）です。<br>
                    記事の更新がしやすいことが最大のメリットで、うまく運用すればSEOに強いサイトを構築することができ、コンバージョンの獲得につながります。`,
          h3: 'LP（ランディングページ）制作の流れ',
          flows: ['お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい'],
          prices: [
                        { id: 1, name: "aaa", price: '200,000円〜' },
                        { id: 2, name: 'ssss', price: '200,000円〜' },
                        { id: 3, name: 'aaa', price: '200,000円〜' },
                        { id: 4, name: 'aaa', price: '200,000円〜' },
                        { id: 5, name: 'aaa', price: '200,000円〜' },
                        { id: 6, name: 'aaa', price: '200,000円〜' },
                        { id: 7, name: 'aaa', price: '200,000円〜' },
          ]
        },
        {
          title: 'サイトの保守管理',
          topText: `WordPressサイトのフルコーディネートから部分的な修正・カスタマイズを承っております。<br>
                    実務経験、個人のブログ運営のノウハウを活かしSEOに強いサイト制作が得意です。<br>
                    WordPressは世界の約30%のサイトで用いられているCMS（コンテンツマネジメントシステム）です。<br>
                    記事の更新がしやすいことが最大のメリットで、うまく運用すればSEOに強いサイトを構築することができ、コンバージョンの獲得につながります。`,
          h3: 'LP（ランディングページ）制作の流れ',
          flows: ['お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい'],
          prices: [
                        { id: 1, name: "aaa", price: '200,000円〜' },
                        { id: 2, name: 'ssss', price: '200,000円〜' },
                        { id: 3, name: 'aaa', price: '200,000円〜' },
                        { id: 4, name: 'aaa', price: '200,000円〜' },
                        { id: 5, name: 'aaa', price: '200,000円〜' },
                        { id: 6, name: 'aaa', price: '200,000円〜' },
                        { id: 7, name: 'aaa', price: '200,000円〜' },
          ]
        },
        {
          title: 'xxxxxxxxx',
          topText: `WordPressサイトのフルコーディネートから部分的な修正・カスタマイズを承っております。<br>
                    実務経験、個人のブログ運営のノウハウを活かしSEOに強いサイト制作が得意です。<br>
                    WordPressは世界の約30%のサイトで用いられているCMS（コンテンツマネジメントシステム）です。<br>
                    記事の更新がしやすいことが最大のメリットで、うまく運用すればSEOに強いサイトを構築することができ、コンバージョンの獲得につながります。`,
          h3: 'LP（ランディングページ）制作の流れ',
          flows: ['お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい', 'お問い合わせフォームからお問い合わせ下さい'],
          prices: [
                        { id: 1, name: "aaa", price: '200,000円〜' },
                        { id: 2, name: 'ssss', price: '200,000円〜' },
                        { id: 3, name: 'aaa', price: '200,000円〜' },
                        { id: 4, name: 'aaa', price: '200,000円〜' },
                        { id: 5, name: 'aaa', price: '200,000円〜' },
                        { id: 6, name: 'aaa', price: '200,000円〜' },
                        { id: 7, name: 'aaa', price: '200,000円〜' },
          ]
        }
      ]
    }
  }
}
</script>