<template>
  <div id="app">
    <header-info></header-info>
    <div class="page">
      <left-menu></left-menu>
      <router-view class="app-page"></router-view>
    </div>
  </div>
</template>
<script>
import LeftMenu from "@/src/components/system/LeftMenu.vue";
import HeaderInfo from "@/src/components/system/HeaderInfo.vue";
export default {
  components: { HeaderInfo, LeftMenu },
}
</script>
<style>
body {
  margin: 0;
}
</style>
<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  background: #F5F5F5;
  flex-direction: column;
}

.page {
  display: flex;
  flex: 1;
  .app-page {
    background-color: white;
  }
}
</style>
