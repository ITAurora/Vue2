<!-- 各种输入框组件  -->
<template>
    <div class='inputs'>
        <el-button type="primary" size="small" @click="check">验证token</el-button>
        <el-button type="primary" size="small" @click="delectToken">删除token</el-button>
    </div>
</template>

<script>
export default {
    props: {

    },
    name: '',
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
        check() {
            const tokenStr = localStorage.getItem('token')
            this.utils.post('api/src//loginCheck', { token: tokenStr }).then((data) => {
                console.log(data);
                this.$message.success(data.data.msg);
                this.$router.push({
                    path: '/input',
                })
            }
            ).catch((err) => {
                console.log(err);
                this.$message.error(err.message);
            })
        },
        delectToken() {
            localStorage.setItem('token', '')
            location.reload();
        }
    },
};
</script>

<style scoped lang="scss">
.inputs {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
</style>
