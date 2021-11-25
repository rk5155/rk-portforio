<template>
    <ul class="flow">
        <li v-for="flow in flows" :key="flow.num">
            <dl>
                <dt><span class="icon">STEP.0{{ flow.num }}</span>{{ flow.title }}</dt>
                <dd>{{ flow.text }}</dd>
            </dl>
        </li>


        
    </ul>
</template>

<script>
export default {
  data () {
    return {
      flows: [
        {
          num: 1,
          title: 'お問い合わせ',
          text: 'まずはお気軽にご相談を！ホームページってどうやって作るの？ホームページって作成した方がいいの？値段は？など様々な疑問にお答えいたします。'
        },
        {
          num: 2,
          title: 'ヒアリング',
          text: 'ヒアリングどのようなホームページを作成していきたいか、一緒に話し合いを行います。お客様の問題解決ができるホームページとなりますように、念入りに話し合いを行います。'
        },
        {
          num: 3,
          title: 'お見積・ご契約',
          text: 'お客様のご予算に応じて、お見積をご検討させていただきます。ご予算に合わせ、使用するツール等を検討し、作業内容と金額を調整いたします。お見積にご同意いただきましたら、ご契約となります。'
        },
        {
          num: 4,
          title: '制作開始',
          text: 'ホームページのデザインや文章、画像の設定などをお客様のご要望に応じて、制作いたします。'
        },
        {
          num: 5,
          title: '納品/アフターサポート',
          text: 'ホームページの仕上がりの最終確認を行いネット上に公開します。公開後のホームページの修正やお困りごとについての相談は無料で対応させていただきます。'
        }
        
      ]
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
dd {
  margin-left: 0;
}

.flow {
    width: 980px;
    margin: 70px auto;
}
.flow > li {
  position: relative;
}
.flow > li:not(:last-child) {
  margin-bottom: 40px;
}
.flow > li:not(:first-child)::before {
  content: "";
  height: 60px;
  display: block;
  border-left: 4px dotted #e5e5e5;
  position: absolute;
  top: -40px;
  left: -webkit-calc(10% + 30px - 2px);
  left: calc(10% + 30px - 2px);
  z-index: 10;
}
.flow > li dl {
  width: 100%;
  padding: 20px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid rgb(107,144,219);
  border-radius: 10px;
  position: relative;
}
.flow > li:not(:last-child) dl::before,
.flow > li:not(:last-child) dl::after {
  content: "";
  border: solid transparent;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.flow > li:not(:last-child) dl::before {
  border-width: 22px;
  border-top-color: rgb(107,144,219);
}
.flow > li:not(:last-child) dl::after {
  border-width: 20px;
  border-top-color: #fff;
}
.flow > li dl dt {
  font-size: 20px;
  font-weight: 600;
  color: rgb(107,144,219);
  -ms-flex-preferred-size: 20%;
  flex-basis: 20%;
  margin-right: 2vw;
  text-align: center;
}
.flow > li dl dt .icon {
  font-size: 12px;
  color: #fff;
  background: rgb(107,144,219);
  background: -moz-linear-gradient(left, rgba(107,144,219,1) 0%, rgba(102,213,233,1) 100%);
  background: -webkit-linear-gradient(left, rgba(107,144,219,1) 0%,rgba(102,213,233,1) 100%);
  background: linear-gradient(to right, rgba(107,144,219,1) 0%,rgba(102,213,233,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6b90db', endColorstr='#66d5e9',GradientType=1 );
  padding: 5px 10px;
  width: 170px;
  margin-bottom: 10px;
  display: block;
  border-radius: 20px;
  position: relative;
  z-index: 100;
}
</style>