<template>
    
        <div class="content2__box">
            <h3>{{ servise.h3 }}</h3>
            <p>{{ servise.p }}</p>

            <ul>
                <li>{{ servise.list1 }}</li>
                <li>{{ servise.list2 }}</li>
                <li>{{ servise.list3 }}</li>
                <li>{{ servise.list4 }}</li>
            </ul>

            <a href="">詳しく見る</a>
        </div>

        

        
    
</template>

<script>
export default {
    props: ['servise'],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
.content2__box {
    width: 50%;
    padding: 40px;
}
.content2__box ul {
    display: flex;
    flex-flow: wrap;
}
.content2__box li {
    list-style: none;
    width: 50%;
}
.content2__box p {
    text-align: left;
}
</style>