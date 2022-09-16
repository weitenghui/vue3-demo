<template>
  <a-config-provider :locale="zh_CN">
    <router-view />
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  data() {
    return {
      zh_CN,
    };
  },
};
</script>

<style lang="less">
#app {
  height: 100%;
}
html {
  overflow-y: overlay;
}
</style>
