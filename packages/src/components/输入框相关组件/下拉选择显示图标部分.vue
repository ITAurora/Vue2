<template>
    <el-popover trigger="click">
      <div v-for="option of options" class="option" @click="select(option)"
           :class="{ active: valueArr.indexOf(option.value) !== -1 }">
        {{ option.value }}.{{ option.label }}
      </div>
      <div slot="reference" class="show-result">
        {{ valueArr.join(separator) }}
      </div>
    </el-popover>
  </template>
  
  <script>
  import {deepClone} from "../../utils/tool.js";
  
  
  export default {
    props: {
      options: {type: Array, default: () => []},
      value: {type: [Array, String], default: () => []},
      separator: {type: String, default: ','},
      multiple: {type: Boolean, default: true},
    },
    data() {
      return {
        valueArr: typeof this.value === "string" ? // 如果是字符串
            (this.value ? this.value.split(',') : []) :
            deepClone(this.value)
      }
    },
    methods: {
      select(option) {
        let index = this.valueArr.indexOf(option.value);
        if (index === -1) { // 没有
          if (this.multiple) { // 开启多选
            this.valueArr.push(option.value)
          } else {
            this.valueArr = [option.value]
          }
        } else { // 有就删除
          this.valueArr.splice(index, 1);
        }
        let emitValue = typeof this.value === 'string' ? // 字符串
            this.valueArr.join(',') :
            deepClone(this.valueArr);
        this.$emit('input', emitValue);
        this.$emit('change', emitValue)
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .option {
    cursor: pointer;
    font-size: 12px;
  
    &:hover,
    &.active {
      color: burlywood;
    }
  }
  
  .show-result {
    min-height: 20px;
    line-height: 20px;
    cursor: pointer;
    word-wrap: break-word;
  }
  </style>