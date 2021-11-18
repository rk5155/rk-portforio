<template>
    <div class="detaill">
        <h2>{{ navList.text }}</h2>
        <img :src="navList.img" alt="">

        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['navList'],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
.detaill {
    background-color: #FAFAFA;
    padding: 100px 0;
}
h2 {
    font-weight: bold;
    margin-bottom: 40px;
}
ul {
    width: 700px;
    margin: 0 auto;
}
li {
    list-style: none;
    margin-bottom: 10px;
    text-align: left;
}
.detaill img {
    width: 700px;
    margin-bottom: 30px;
}
</style>