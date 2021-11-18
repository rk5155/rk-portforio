<template>
    <li class="nav-item">
        <router-link class="nav-link" :to="list.url" active-class="link-active" exact>{{list.text}}</router-link>
    </li>
</template>

<script>
export default {
props: ['list']
}
</script>
