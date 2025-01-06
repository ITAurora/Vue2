<template>
    <div class="datetime">
      <el-date-picker v-model="datetime" @change="$emit('input',datetime);$emit('change',datetime)" size="mini"
                      type="datetime" placeholder="" format="yyyy-MM-dd HH:mm:00"
                      value-format="yyyy-MM-dd HH:mm:00"/>
      <p v-if="datetime && !hiddenTime">{{ $dayjs(datetime).format('HH:mm') }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {type: String, default: '',},
      hiddenTime: {type: Boolean, default: false},
    },
    data() {
      return {
        datetime: this.value
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .datetime {
    /deep/ .el-date-editor {
      width: 100%;
  
      .el-input__prefix {
        display: none;
      }
  
      .el-input__inner {
        display: block;
        margin: 0 auto;
        text-indent: 0;
        padding: 0;
        width: 65px;
        border: none;
        height: 24px;
        line-height: 24px;
      }
  
      .el-input__suffix {
        right: 0;
      }
    }
  }
  </style>