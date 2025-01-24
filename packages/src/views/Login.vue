<template>
    <div class="login">
        <div class="img">
            <img style="width: 60px;" src="https://v2.cn.vuejs.org/images/logo.svg" alt="">
        </div>
        <div class="inputBox">
            <el-input v-model="ruleForm.userName" placeholder="请输入账号" autocomplete="off"></el-input>
        </div>
        <div class="inputBox">
            <el-input type="password" v-model="ruleForm.passWord" placeholder="请输入密码" autocomplete="off"></el-input>
        </div>
        <div class="buttonBox">
            <el-button v-if="!optionShow" type="primary" size="small" @click="login">登录</el-button>
            <el-button type="primary" size="small" @click="register">注册</el-button>
        </div>
        <div class="optionBox" v-if="optionShow">
            <span class="optionContent" @click="optionShow = false"> 已有账号？点击去登录</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                userName: '',
                passWord: ''
            },
            optionShow: false
        }
    },
    methods: {
        login() {

            this.utils.post('api/src/login', { userName: this.ruleForm.userName, passWord: this.ruleForm.passWord }).then((data) => {
                console.log(data);
                this.$message.success(data.data.msg);
                if (data.data.token) {
                    window.localStorage.setItem('token', data.data.token)
                }
                if (data.data.msg == '登录成功') {
                    this.$router.push({
                        path: '/input',
                    })
                }

            }
            ).catch((err) => {
                console.log(err);
                this.$message.error(err.message);
            })
            // this.utils.post('api/requestExample/home', { user: '测试' }).then((data) => {
            //     console.log(data);
            //     this.$message.success('请求成功');
            // }
            // ).catch((err) => {
            //     console.log(err);
            //     this.$message.error(err.message);
            // })

            // axios.get('api/users').then(response => {
            //     console.log('用户列表:', response.data);
            //     this.info = response.data;
            // })
            //     .catch(error => {
            //         console.error('请求出错:', error);
            //     });
            // this.$notify({
            //     title: '成功',
            //     message: '这是一条成功的提示消息',
            //     type: 'success'
            // });
        },
        register() {
            if (this.optionShow) {

            } else {
                this.optionShow = !this.optionShow;
            }
        },
    }
}
</script>

<style scoped lang="scss">
.login {
    margin: auto;
    height: 300px;
    width: 600px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px rgba(66, 66, 75, 0.2);

    .img {
        text-align: center;
        padding-top: 30px;
    }

    .inputBox {
        padding: 10px 100px;
    }

    .buttonBox {
        padding-top: 20px;
        text-align: center;
    }

    .optionBox {
        padding-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: gray;
        font-size: 12px;

        .optionContent:hover {
            color: #409EFF;
            cursor: pointer;

        }
    }
}
</style>