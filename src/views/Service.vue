<template>
    <div class="content2">
        <Content2 v-for="servise in servises" v-bind:key="servise.id" v-bind:servise="servise"></Content2>
    </div>
</template>


<script>
import Content2 from '../components/Content2.vue'

export default {
  components: {
    Content2
    
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