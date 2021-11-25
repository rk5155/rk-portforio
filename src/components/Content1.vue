<template>
    <div class="content1">
        <div>
            <img :src="img" alt="">
        </div>

        <slot></slot>


    </div>
</template>

<script>
export default {
    props: ['img'],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
.content1 {
    width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 70px 0;
}
.content1 img {
    width: 340px;
    height: auto;
    border-radius: 10%;
}
.content1 a {
    margin-top: 20px;
    border: 1px solid #3B4452;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
    color: #212529;
}
.content1 a:hover {
    background-color: #3B4452;
    color: #ffffff;
}
.content1__text {
    width: 60%;
}
@media screen and (max-width: 580px) { 
    .content1 {
        display: block;
        width: 90%;
        text-align: center;
    }
    .content1 img {
        width: 100%;
        height: auto;
    }
    .content1__text {
        width: 100%;
        text-align: left;
        margin-top: 40px;
    }
}
</style>