<template>
  <a-modal
    title="咨询建议"
    v-model:visible="modalVisible"
    @ok="setModaVisible(false)"
    :style="dialogStyle"
    ok-text="发送"
    closeIcon="—"
    @cancel="setModaVisible(false)"
  >
    <a-form>
      <a-form-item :style="styleForm">
        <a-input
          class="login-input"
          size="large"
          placeholder="请输入手机号"
          autocomplete="off"
        >
          <template #prefix>
            <img src="../../../assets/img/login_phone.png" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item :style="styleForm">
        <a-input
          class="login-input"
          size="large"
          placeholder="请输入手机号"
          autocomplete="off"
        >
          <template #prefix>
            <img src="../../../assets/img/login_phone.png" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item :style="styleForm">
        <a-input
          class="login-input"
          size="large"
          placeholder="请输入手机号"
          autocomplete="off"
        >
          <template #prefix>
            <img src="../../../assets/img/login_phone.png" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item :style="styleForm">
        <a-input
          class="login-input"
          size="large"
          placeholder="请输入手机号"
          autocomplete="off"
        >
          <template #prefix>
            <img src="../../../assets/img/login_phone.png" />
          </template>
        </a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    watch(props, (newProps) => {
      modalVisible.value = newProps.visible;
    });
    const modalVisible = ref(false);
    const dialogStyle = {
      top: "400px",
      right: "-100px",
      position: "fixed",
    };
    const setModaVisible = (show) => {
      ctx.emit("update-visible", show);
      modalVisible.value = show;
    };
    return {
      modalVisible,
      dialogStyle,
      setModaVisible,
    };
  },
});
</script>

<style lang="less">
.ant-modal-header {
  padding: 16px 24px;
  color: #ffffff;
  background: @green;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 4px 4px 0 0;
  .ant-modal-title {
    margin: 0;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
  }
}
.ant-modal-body {
  padding: 24px;
  font-size: 14px;
  height: 320px;
  line-height: 1.5715;
  word-wrap: break-word;
}
.ant-modal-close-x {
  display: block;
  width: 56px;
  height: 56px;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  color: #ffff;
}
.ant-modal-content {
  width: 380px;
  height: 437px;
  background: #ffffff;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
}
.ant-modal-footer {
  padding: 16px 16px;
  text-align: right;
  background: transparent;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 4px 4px;
}
</style>