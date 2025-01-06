<!-- form表单展示  -->
<template>
    <div class="form-page" v-if="v">
        <!--第一页-->
        <div class="page">
            <div class="title"> {{ hospitalName }}</div>
            <div class="title">住院患者首次护理评估单</div>
            <div class="patient">
                <div class="item">
                    <span class="name">病区：</span>
                    <span class="value">
                        <input type="text" style="width: 130px" v-model="form.wardName" @change="inputChange" />
                    </span>
                </div>
                <div class="item">
                    <span class="name">床号：</span>
                    <span class="value">
                        <input type="text" v-model="form.bedNo" @change="inputChange" />
                    </span>
                </div>
                <div class="item">
                    <span class="name">姓名：</span>
                    <span class="value">
                        <input type="text" v-model="form.name" @change="inputChange" />
                    </span>
                </div>
                <div class="item">
                    <span class="name">性别：</span>
                    <span class="value">
                        <input type="text" v-model="form.gender" @change="inputChange" />
                    </span>
                </div>
                <div class="item">
                    <span class="name">年龄：</span>
                    <span class="value">
                        <input type="text" v-model="form.age" @change="inputChange" />
                    </span>
                </div>
                <div class="item">
                    <span class="name">ID/住院号：</span>
                    <span class="value">
                        <input type="text" v-model="form.patientNumber" @change="inputChange" />
                    </span>
                </div>
                <br />
            </div>
            <div class="form">
                <table>
                    <tr class="useWidth">
                        <td v-for="i in 6"></td>
                    </tr>
                    <tr>
                        <td v-for="i in 6">{{ i }}</td>
                    </tr>
                </table>
            </div>
            <div style="page-break-before: always;"></div>
        </div>
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
            v: true,
            hospitalName: '医院名称',
            form: {
                wardName: '病区名称',
                bedNo: '床号',
                name: '姓名',
                gender: '性别',
                age: '年龄',
                patientNumber: '病区名称',
            }
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
        print() {
           
        },
        inputChange(el) {
            console.log(el);
        }
    },
};
</script>

<style lang="scss" scoped>
@media print {
    @page {
        size: portrait;
        margin-top: 3mm;
        margin-bottom: 3mm;
    }
}

.form-page {
    width: 900px;
    margin: 0 auto;
    overflow: hidden;
    font-family: SimSong;

    .page {
        .title {
            margin-top: 10px;
            font-size: 26px;
            text-align: center;
            font-weight: bold;
        }

        .patient {
            .item {
                margin-top: 10px;
                margin-right: 10px;
                display: inline-flex;
                align-items: center;
                font-size: 14px;

                .name {
                    font-weight: bold;
                }

                .value {
                    input {
                        width: 130px;
                        border: none;
                        background-color: white;
                        outline: none;
                        outline: 0
                    }

                }
            }
        }
    }

    .form {
        .useWidth {
            td {
                height: 0;
                border: none;
            }
        }

        table {
            margin-top: 10px;
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;

            td {
                box-sizing: border-box;
                border: 1px solid #000;
                font-size: 13px;
                text-align: center;
                padding: 2px 0;
                overflow: hidden;
            }
        }
    }

}
</style>
