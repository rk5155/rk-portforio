<template>
    <div class="content2">
        <Content2 v-for="servise in servises" v-bind:key="servise.id" v-bind:servise="servise"></Content2>
    </div>
</template>


<script>
import Content2 from '../components/Content2.vue'
// @ は省略記法 src 配下を省略できる
// import { serviseData } from '../serviseData.js' と同じ
import { serviseData } from '@/serviseData.js'


export default {
  components: {
    Content2
  },
  mixins: [ serviseData ]
}
</script>