<template>
    <div class="title" data-aos="fade-up" data-aos-duration="1000">
        <i :class="name"></i>
        <h2>{{ title }}</h2>
        <p>{{ en }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'en', 'name'],
    data: function() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .title {
        text-align: center;
        background-color: #FAFAFA;
        padding: 34px 0;
    }
    .title i {
        font-size: 30px;
        margin-bottom: 12px;
    }
    .title h2 {
        font-size: 28px;
        margin-bottom: 4px;
    }
    .title p {
        font-size: 20px;
        margin-bottom: 0;
    }

    @media screen and (max-width: 580px) {
        .title {
            padding: 12px 0;
        }
        .title i {
        font-size: 20px;
        margin-bottom: 12px;
        }
        .title h2 {
            font-size: 24px;
            margin-bottom: 4px;
        }
        .title p {
            font-size: 16px;
            margin-bottom: 0;
        }

    }
</style>