<!--  左侧边栏 -->
<template>
    <div class='left-menu'>
        <el-menu :collapse="$store.state.leftMenu" :default-active="active" class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="1">
                <i class="el-icon-location"></i>
                <span slot="title">全部组件展示</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-location"></i>
                <span slot="title">表格基础模板</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-location"></i>
                <span slot="title">验证token</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-location"></i>
                <span slot="title">登录窗口</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-location"></i>
                <span slot="title">异步弹框</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {

    },
    name: 'left-menu',
    components: {

    },
    data() {
        return {
            active: '1',
            info: '',
            temp: true
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
        getMenuList() {
            axios.get('api/users/show').then(response => {
                console.log('用户列表:', response.data);
                this.info = response.data;
            })
                .catch(error => {
                    console.error('请求出错:', error);
                })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.active = key;
            if (key == '1') {
                this.$router.push({
                    path: '/',
                })
            } else if (key == '2') {
                this.$router.push({
                    path: '/form',
                })
            } else if (key == '3') {
                this.$router.push({
                    path: '/input',
                })
            }else if (key == '4') {
                this.$router.push({
                    path: '/login',
                })
            }
        }
    },
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}

.left-menu {
    background-color: white;

}
</style>
