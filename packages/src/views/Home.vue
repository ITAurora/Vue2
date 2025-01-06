<!-- 全部组件展示  -->
<template>
    <div class="home">
        <div class="page">
            <div class="title">表单相关组件</div>
            <div class="form">
                <table>
                    <tr class="useWidth">
                        <td v-for="i in 4"></td>
                    </tr>
                    <tr>
                        <td>
                            单击空白区域打对钩：
                            <ClickCheckBox v-model="list.input1"></ClickCheckBox>
                        </td>
                        <td>
                            方块复选框单选：
                            <SquareCheckbox :options="['测试1', '测试2'].map(item => ({ label: item, value: item }))"
                                v-model="list.input2">
                            </SquareCheckbox>
                        </td>
                        <td>
                            方块复选框多选：
                            <SquareCheckbox :options="['测试1', '测试2'].map(item => ({ label: item, value: item }))"
                                :multiple=true v-model="list.input3">
                            </SquareCheckbox>
                        </td>
                        <td>
                            两行日期：
                            <TwoData v-model="list['input4']" format="yyyy-MM-dd HH:mm" value-format="yyyy-MM-dd HH:mm"
                                type="datetime">
                            </TwoData>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            下拉选择显示图标部分:
                            <SelectInput v-model="temp" separator="/" :options="nursingMeasuresOption"
                                @change="inputChange"></SelectInput>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </div>
</template>

<script>
import { createNamesObject } from "@/src/utils/tool.js";
import { printHTML } from "@/src/utils/print.js";
import ClickCheckBox from '../components/未分类的组件/单击打对钩.vue';//@iframe/components/护理表单/单击对勾.vue
import SquareCheckbox from '../components/未分类的组件/方块复选框.vue';//@iframe/components/护理表单/复选框.vue
import TwoData from '../components/时间相关组件/两行日期.vue';//import DateTimeInput from "@iframe/components/护理表单/日期时间两行.vue";
import SelectInput from '../components/输入框相关组件/下拉选择显示图标部分.vue';//import SelectInput from "@iframe/components/护理表单/下拉输入框.vue";
export default {
    props: {

    },
    name: '',
    components: {
        ClickCheckBox, SquareCheckbox, TwoData, SelectInput
    },
    data() {
        return {
            list: '',
            temp: '',
            nursingMeasuresOption: [
                { value: 'A', label: '挂防止管路滑脱标识' },
                { value: 'B', label: '对患者及家属进行教育' },
                { value: 'C', label: '稳善固定各种管道' },
                { value: 'D', label: '适当保护性约束' },
                { value: 'E', label: '使用镇静剂' },
                { value: 'F', label: '起床有人搀扶' },
                { value: 'G', label: '翻身、移动患者时注意保护，防止过度牵拉、滑脱' },
                { value: 'H', label: '加强巡视，做好交接班' },
                { value: 'I', label: '其他' },
            ]
        };
    },
    computed: {

    },
    watch: {

    },
    created() {
        this.list = createNamesObject('input', 40)
    },
    mounted() {

    },
    methods: {
        print() {
            let printHtml = document.body.querySelector('.home').innerHTML
            printHTML(printHtml)
        },
        inputChange(el) {
            console.log(el);
        }
    },
};
</script>

<style lang="scss" scoped>
.home {
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
}
</style>
