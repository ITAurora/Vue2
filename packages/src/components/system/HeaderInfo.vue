<!-- 头部框  -->
<template>
    <div class='header-info'>
        <div style="padding: 10px;padding-left: 18px;">
            <img style="width: 30px;" src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
        </div>
        <div v-if="!$store.state.leftMenu">
            {{ $route.meta.title }}
        </div>
        <div style="cursor: pointer;line-height: 70px;">
            <i style="font-size: 30px;" class="el-icon-s-fold" v-if="!$store.state.leftMenu" @click="openMenu"></i>
            <i style="font-size: 30px;" class="el-icon-s-unfold" v-if="$store.state.leftMenu" @click="closeMenu"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    name: 'header-info',
    components: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        openMenu() {
            this.$store.commit('leftMenuActive')
        },
        closeMenu() {
            this.$store.commit('leftMenuActive')
        },
    },
};
</script>

<style scoped lang="scss">
.header-info {
    width: 100%;
    height: 60px;
    color: white;
    background: #409EFF;
    overflow: hidden;
    display: inline-flex;

    div {
        line-height: 60px;
    }
}
</style>
