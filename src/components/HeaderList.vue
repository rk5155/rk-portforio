<template>
    <li class="nav-item">
        <router-link class="nav-link" to="/" active-class="link-active" exact>{{text}}</router-link>
    </li>
</template>

<script>
export default {
props: ['text']
}
</script>
