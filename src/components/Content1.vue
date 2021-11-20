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
    border: 2px solid #42B983;
    display: inline-block;
    padding: 10px;
    color: #212529;
}
.content1__text {
    width: 60%;
}
</style>