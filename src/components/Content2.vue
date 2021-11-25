<template>
    
        <div class="content2__box">
            <h3 class="content2__title" v-bind:class="servise.class">{{ servise.h3 }}</h3>
            <p>{{ servise.p }}</p>

            <ul>
                <li>{{ servise.list1 }}</li>
                <li>{{ servise.list2 }}</li>
                <li>{{ servise.list3 }}</li>
                <li>{{ servise.list4 }}</li>
            </ul>

            
            
            <router-link class="nav-link content2__btn" :to="servise.url" active-class="link-active" exact>詳しく見る</router-link>
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
    padding: 80px 50px;
}
.content2__box:nth-child(odd) {
    border-right: 1px solid #F2F2F2;
}
.content2__box:nth-child(1), .content2__box:nth-child(2) {
    border-bottom: 1px solid #F2F2F2;
} 
.content2__title {
    margin-bottom: 40px;
    display: inline-block;
    padding-bottom: 10px;
    font-weight: bold;
    position: relative;
    text-align: center;
    font-size: 26px;
}
.content2__title::before {
    position: absolute;
    bottom: -10px;
    left: calc(50% - 30px);
    width: 60px;
    height: 5px;
    content: '';
    border-radius: 3px;
    background: #3B4452;
}
/* .content2__title--red::before {
    background: #FA5858;
}
.content2__title--perple::before {
    background: #AC58FA;
}
.content2__title--yellow::before {
    background: #F2F5A9;
}
.content2__title--pink::before {
    background: #F781F3;
} */
.content2__box ul {
    display: flex;
    flex-flow: wrap;
    margin: 30px 0;
    padding: 0;
}
.content2__box li {
    list-style: none;
    width: calc(50% - 4px);
    border: 1px dotted;
    margin-bottom: 4px;
}
.content2__box li:nth-child(even) {
    margin-left: 4px;
}
.content2__box li:nth-child(odd) {
    margin-right: 4px;
}
.content2__box p {
    height: 42px;
}
.content2__btn {
  color: #ffffff;
  background-color: #3B4452;
  border-radius: 100vh;
  padding: 10px 40px;
  display: inline-block;
}
.content2__btn:hover {
    opacity: 0.8;
}
@media screen and (max-width: 580px) {
    .content2__box {
        width: 100%;
        margin: 0 auto;
        border-bottom: 1px solid #F2F2F2;
        padding: 60px 50px;
    }
    .content2__box:last-child {
        border-bottom: none;
    }
    .content2__title {
        font-size: 22px;
    }
    .content2__box:nth-child(odd) {
        border-right: none;
    }
    .content2__box p {
        height: auto;
    }
}

</style>