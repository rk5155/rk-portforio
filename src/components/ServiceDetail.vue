<template>
    <div class="service_detail">
        <h2>{{ title }}</h2>
        <p v-html="topText"></p>
        <h3>{{ h3 }}</h3>
        <ul>
            <li v-for="flow in flows" :key="flow">{{ flow }}</li>
        </ul>
        <h3>価格表</h3>

        <table class="table table-striped">
            <tbody>
            
            <TablePrice v-for="price in prices" v-bind:key="price.id" v-bind:price="price"></TablePrice>
            </tbody>
        </table>

    </div>
</template>

<script>
import TablePrice from '../components/TablePrice.vue'

export default {
    props: ['title', 'topText', 'h3', 'flows', 'prices'],
    components: {
        TablePrice
    }
}
</script>

<style scoped>
.service_detail {
    width: 980px;
    margin: 50px auto;
    padding: 80px 50px;
    background-color: #FAFAFA;
}
h2 {
    text-align: center;
    margin-bottom: 50px;
    border-bottom: 3px solid #3B4452;
    padding-bottom: 30px;
    font-weight: bold;
}
p {
    line-height: 2.0;
}
h3 {
    margin: 70px 0 40px;
    background-color: #3B4452;
    color: #ffffff;
    padding: 10px 30px;
    font-size: 26px;
    border-radius: 6px;
}
.table {
    width: 100%;
}
</style>