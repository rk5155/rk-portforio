<template>
    <tr>
        <td :class="price.bold">{{ price.name }}</td>
        <td v-html="price.price"></td>
    </tr>
</template>
<script>
export default {
    props: ['price']
}
</script>

<style>
td {
    line-height: 2.0;
}
.td-bold {
    font-weight: bold;
    font-size: 20px;
}
</style>