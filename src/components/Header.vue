<template>
    <header id="header">
      <nav class="navbar navbar-expand-sm navbar-light">
        <router-link class="navbar-brand u-font__bold" to="/" exact>Ryu-ki Production</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav4">
            <ul class="navbar-nav">
                <HeaderList v-for="list in navList" :key="list.text" :list="list"></HeaderList>
            </ul>
        </div>
      </nav>

    </header>
</template>

<script>
import HeaderList from '../components/HeaderList.vue'

export default {
  components: {
    HeaderList
  },
  data () {
    return {
      navList: [
        {
          text: 'プロフィール',
          url: '/profile'
        },
        {
          text: '制作実績',
          url: '/production'
        },
        {
          text: 'スキル',
          url: '/skill'
        },
        {
          text: 'サービス内容・価格',
          url: '/profile'
        },
        {
          text: 'お問い合わせ',
          url: '/contact'
        },
      ]
    }
  }
}
</script>


<style scoped>
    #header {
        border-bottom: 2px solid #333333;
    }
    nav {
        width: 80%;
        margin: 0 auto;
    }
</style>