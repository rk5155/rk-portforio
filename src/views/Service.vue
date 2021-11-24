<template>
    <div class="service">
        <div class="content2" v-if="$route.params.id == 'all'">
            <Content2 v-for="servise in servises" v-bind:key="servise.name" v-bind:servise="servise"></Content2>
        </div>

        <ServiceDetail v-if="$route.params.id == 1" :title='contentList[0].title' :topText="contentList[0].topText" :prices='contentList[0].prices'></ServiceDetail>

        <ServiceDetail v-if="$route.params.id == 2" :title='contentList[1].title' :topText="contentList[1].topText" :prices='contentList[1].prices'></ServiceDetail>

        <ServiceDetail v-if="$route.params.id == 3" :title='contentList[2].title' :topText="contentList[2].topText" :prices='contentList[2].prices'>
          <p>※アップデートが原因でないシステムの不具合の場合には別途料金が必要となります。</p>
          <p>※SEO対策の提案は必ずSEOが最適化されるものではありません</p>
        </ServiceDetail>

        <ServiceDetail v-if="$route.params.id == 4" :title='contentList[3].title' :topText="contentList[3].topText" :prices='contentList[3].prices'></ServiceDetail>

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
          title: 'WEBサイト制作・カスタマイズ',
          topText: `WEBサイトのフルコーディネートから部分的な修正・カスタマイズを承っております。`,
          prices: [
                        { name: "基本料金", price: '200,000円', bold: 'td-bold' },
                        { name: '基本料金に含まれるもの', price: '', bold: 'td-bold' },
                        { name: 'デザイン（お任せ）', price: '' },
                        { name: 'お問い合わせフォーム', price: '' },
                        { name: 'TOP画像の制作', price: '' },
                        { name: 'SSL化', price: '' },
                        { name: 'HTML,CSSコーディング', price: '' },
                        { name: 'TOPページ構築', price: '' },
                        { name: '下層ページ構築（4ページ）', price: '' },
                        { name: '追加オプション', price: '', bold: 'td-bold' },
                        { name: 'スマホ対応のコーディング', price: '30,000円' },
                        { name: '１ページ追加', price: '30,000円' },
                        { name: 'オリジナルデザイン（TOP、下層4ページ）', price: '50,000円' },
                        { name: 'Googleアナリティクスの設置', price: '5,000円' },
                        { name: 'アニメーションの追加', price: '20,000円' },
                        { name: 'サーバー・ドメインの代行契約', price: '10,000円' },
          ]
        },
        {
          title: 'LP制作',
          topText: `LP（ランディングページ）はコンバージョン獲得に特化したWebページで、１枚の縦長のページになります。<br>
                   特定の商品、サービスの特設ページ、企業紹介ページなどにお勧めです。`,
          prices: [
                        { name: "基本料金", price: '150,000円', bold: 'td-bold' },
                        { name: '基本料金に含まれるもの', price: '', bold: 'td-bold' },
                        { name: 'デザイン', price: '' },
                        { name: 'お問い合わせフォーム', price: '' },
                        { name: 'TOP画像の制作', price: '' },
                        { name: 'SSL化', price: '' },
                        { name: 'HTML,CSSコーディング', price: '' },
                        { name: '追加オプション', price: '', bold: 'td-bold' },
                        { name: 'スマホ対応のコーディング', price: '30,000円' },
                        { name: '１ページ追加', price: '30,000円' },
                        { name: 'Googleアナリティクスの設置', price: '5,000円' },
                        { name: 'アニメーションの追加', price: '20,000円' },
                        { name: 'サーバー・ドメインの代行契約', price: '10,000円' },
          ]
        },
        {
          title: 'サイトの保守管理',
          topText: `WEBサイトは公開して終わりというわけにはいきません。<br>
                    Webサイトのために用意した「ドメイン」「サーバー」などは定期的に契約更新が必要です。<br>
                    またブラウザのバージョンアップや、PC、スマートフォン、タブレットなどの仕様変更は頻繁に起こります。<br>
                    定期的なメンテナンスを代行させていただきます。`,
          prices: [
                        { name: "基本料金", price: '9,800円/月', bold: 'td-bold' },
                        { name: '基本料金に含まれるもの', price: '', bold: 'td-bold' },
                        { name: '定期的なデータ・ファイルのバックアップ', price: '' },
                        { name: 'アップデートによるシステムの不具合を対処', price: '' },
                        { name: 'デザインの修正やテキストの修正（月に3箇所まで）', price: '' },
                        { name: '最新のブラウザ、端末への対応', price: '' }
          ]
        },
        {
          title: 'SPA(シングルページアプリケーション)制作',
          topText: `SPAとは単一のWEBページでアプリケーションを構成する設計構造の名称です。<br>
                    単一のWebページでコンテンツ切り替えを行うことで、ページ遷移の必要がなく、高速なWEBサイト作りが可能です。<br>
                    詳細はお問い合わせ下さい。`,
          prices: [
                        { name: "基本料金", price: '300,000円', bold: 'td-bold' },
                        { name: '基本料金に含まれるもの', price: '', bold: 'td-bold' },
                        { name: 'デザイン（お任せ）', price: '' },
                        { name: 'お問い合わせフォーム', price: '' },
                        { name: 'TOP画像の制作', price: '' },
                        { name: 'SSL化', price: '' },
                        { name: 'HTML,CSSコーディング', price: '' },
                        { name: 'TOPページ構築', price: '' },
                        { name: '下層ページ構築（4ページ）', price: '' },
                        { name: '追加オプション', price: '', bold: 'td-bold' },
                        { name: 'スマホ対応のコーディング', price: '30,000円' },
                        { name: '１ページ追加', price: '30,000円' },
                        { name: 'オリジナルデザイン（TOP、下層4ページ）', price: '50,000円' },
                        { name: 'Googleアナリティクスの設置', price: '5,000円' },
                        { name: 'アニメーションの追加', price: '20,000円' },
                        { name: 'サーバー・ドメインの代行契約', price: '10,000円' },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.service {
  margin: 100px 0 50px;
}
</style>