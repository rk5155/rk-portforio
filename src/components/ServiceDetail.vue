<template>
    <div class="service_detail">
        <h2>{{ title }}</h2>
        <p v-html="topText"></p>
        
        <h3>価格表</h3>

        <table class="table table-striped">
            <tbody>
            
            <TablePrice v-for="price in prices" v-bind:key="price.id" v-bind:price="price"></TablePrice>
            </tbody>
        </table>

        <slot>
            <div class="service_detail__text">
                <p>※サーバー・ドメインのご契約はお客様負担、お客様ご自身でご契約していただきます。（代行でも可能）</p>
                <p>※ロゴ画像、使用する画像はお客様ご自身でご用意ください（制作する場合別途料金必要）</p>
                <p>※デザイン案提出後の大幅なデザイン変更には別途料金が発生いたします。</p>
                <p>※納期目安は3~4週間となります</p>
                <p>※制作の内容によっては別途追加料金が発生する場合がございます。</p>
            </div>
        </slot>

        

    </div>
</template>

<script>
import TablePrice from '../components/TablePrice.vue'

export default {
    props: ['title', 'topText', 'prices'],
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
@media screen and (max-width: 580px) {
    .service_detail {
        width: 95%;
        padding: 40px 20px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 22px;
    }
    .service_detail__text {
        font-size: 14px;
    }
}
</style>