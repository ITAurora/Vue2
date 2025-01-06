<template>
    <div class="checkbox">
      <div class="option" v-for="option of options" @click="check(option)">
        <i class="check">
          {{ valueArr.indexOf(option.value) === -1 ? '' : '✓' }}
        </i>
        <span class="label"> {{ option.label }} </span>
      </div>
    </div>
  </template>
  <script>
  
  export default {
    props: {
      value: {type: String, default: ""}, // 值
      options: {type: Array, default: () => []}, // 选项
      multiple: {type: Boolean, default: false}, // 单选｜多选
    },
    computed: {
      valueArr() {
        return this.value ? this.value.split(',') : []
      }
    },
    methods: {
      check(option) {
        let valueArr = this.value ? this.value.split(',') : []
        let hasIndex = valueArr.indexOf(option.value);
        console.log(hasIndex)
        if (hasIndex !== -1) { // 已经有
          valueArr.splice(hasIndex, 1);
        } else {
          if (!this.multiple) {
            valueArr = [option.value]
          } else {
            valueArr.push(option.value)
          }
        }
        this.$emit('input', valueArr.length ? valueArr.join(',') : '');
        this.$emit('change', valueArr.length ? valueArr.join(',') : '');
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .checkbox {
    display: flex;
    align-items: center;
  
    .option {
      display: inline-flex;
      align-items: center;
      margin-right: 10px;
      cursor: pointer;
      overflow: hidden;
  
      .check {
        width: 18px;
        height: 18px;
        line-height: 18px;
        border: 1px solid #000;
        text-align: center;
        font-family: 'Noto Sans CJK SC', 'Noto Sans CJK', 'Source Han Sans', 'source-han-sans-simplified-c', 'sans-serif';
        font-size: 20px;
      }
  
      .label {
        margin-left: 4px;
        font-size: 14px;
      }
    }
  }
  </style>