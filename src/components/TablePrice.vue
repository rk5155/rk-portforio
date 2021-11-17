<template>
    <tr>
        <td>{{ price.name }}</td>
        <td>{{ price.price }}</td>
    </tr>
</template>
<script>
export default {
    props: ['price']
}
</script>