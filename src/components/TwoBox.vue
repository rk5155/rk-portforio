<template>
    <div class="two-box">
        <div class="two-box__box">
            <img :src="meritImg">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
        </div>

        <div class="two-box__box">
            <img :src="meritImg2">
            <h3>{{ title2 }}</h3>
            <p>{{ text2 }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['meritImg', 'title', 'text', 'meritImg2', 'title2', 'text2'],
    data: function() {
        return {
            
        }
    }
}
</script>

<style scoped>
.two-box {
    width: 980px;
    margin: 70px auto;
    display: flex;
    justify-content: space-between;
}
.two-box__box {
    width: 48%;
}
.two-box__box img {
    width: 100%;
    height: 300px;
}
h3 {
    
    height: 64px;
    margin-top: 24px;
    font-size: 24px;
}
@media screen and (max-width: 580px) { 
    .two-box {
        display: block;
        width: 90%;
    }
    .two-box__box {
        width: 100%;
    }
    .two-box__box:nth-child(1) {
        margin-bottom: 60px;
    }
    h3 {   
        font-size: 22px;
        height: auto;
        margin: 16px 0;
    }
}

</style>