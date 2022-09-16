<template>
  <a-form
    ref="formRef_loginPhone"
    name="custom-validation"
    v-if="activeTab === 'loginPhone'"
    :model="formState_loginPhone"
    :rules="rules_loginPhone"
    @finish="handleFinish_loginPhone"
    @validate="handleValidate_loginPhone"
    @finishFailed="handleFinishFailed_loginPhone"
  >
    <a-form-item name="phone" :style="styleForm">
      <a-input
        v-model:value="formState_loginPhone.phone"
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
    <a-form-item label="" name="code">
      <a-input
        v-model:value="formState_loginPhone.code"
        class="login-input"
        size="large"
        placeholder="请输入短信验证码"
        autocomplete="off"
      >
        <template #prefix>
          <img src="../../../assets/img/login_captcha.png" />
        </template>
        <template #suffix>
          <a-button class="getCode">获取验证码</a-button>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button class="login-bt" size="large" type="primary" html-type="submit"
        >登录系统</a-button
      >
    </a-form-item>
    <a class="forge-password"> 忘记密码? </a>
    <a-form-item v-if="showTip">
      <div class="tip">
        <div class="tip-logo"></div>
        <div class="tip-text">
          推荐使用谷歌浏览器或IE11以上版本浏览器浏览本网站。
        </div>
      </div>
    </a-form-item>
  </a-form>
  <a-form
    ref="formRef_loginAccount"
    name="custom-validation"
    v-else
    :model="formState_loginAccount"
    :rules="rules_loginAccount"
    @finish="handleFinish_loginAccount"
    @validate="handleValidate_loginAccount"
    @finishFailed="handleFinishFailed_loginAccount"
  >
    <a-form-item label="" name="username" :style="styleForm">
      <a-input
        v-model:value="formState_loginAccount.username"
        class="login-input"
        size="large"
        placeholder="请输入用户名"
        autocomplete="off"
      >
        <template #prefix>
          <img src="../../../assets/img/login_phone.png" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item label="" name="password">
      <a-input
        v-model:value="formState_loginAccount.password"
        type="password"
        class="login-input"
        size="large"
        placeholder="请输入密码"
        autocomplete="off"
      >
        <template #prefix>
          <img src="../../../assets/img/login_captcha.png" />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button class="login-bt" size="large" type="primary" html-type="submit"
        >登录系统</a-button
      >
    </a-form-item>
    <a class="forge-password"> 忘记密码? </a>
    <a-form-item v-if="showTip">
      <div class="tip">
        <div class="tip-logo"></div>
        <div class="tip-text">
          推荐使用谷歌浏览器或IE11以上版本浏览器浏览本网站。
        </div>
      </div>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "LoginForm",
  props: {
    activeTab: {
      type: String,
      default: "loginPhone",
    },
    showTip: {
      type: Boolean,
      default: false,
    },
    styleForm: {
      type: Object,
      default: {
        marginTop: "30px",
      },
    },
    loginEnterToHome: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    // 手机号验证码登录
    const formRef_loginPhone = ref();
    const formState_loginPhone = reactive({
      phone: "",
      code: "",
    });

    let validatePass = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入手机号");
      } else {
        if (
          !new RegExp(
            /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
          ).test(value)
        ) {
          return Promise.reject("请输入正确的手机号");
        } else {
          if (formState_loginPhone.code !== "") {
            formRef_loginPhone.value.validateFields("code");
          }
          return Promise.resolve();
        }
      }
    };

    let validatePass2 = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入短信验证码");
      } else {
        return Promise.resolve();
      }
    };

    const rules_loginPhone = {
      phone: [
        {
          required: true,
          validator: validatePass,
          trigger: "change",
        },
      ],
      code: [
        {
          validator: validatePass2,
          trigger: "change",
        },
      ],
    };

    const loginAction = (params) => store.dispatch("loginAction", params);

    const handleFinish_loginPhone = (values) => {
      console.log(values, formState_loginPhone);
      loginAction(values).then((res) => {
        console.log(res);
        if (props.loginEnterToHome) {
          location.reload();
        } else {
          router.push({ path: "/" });
        }
      });
    };

    const handleFinishFailed_loginPhone = (errors) => {
      console.log(errors);
    };

    const handleValidate_loginPhone = (...args) => {
      console.log(args);
    };

    // 用户名密码登录
    const formRef_loginAccount = ref();
    const formState_loginAccount = reactive({
      username: "",
      password: "",
    });

    let validatePass_loginAccount = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入用户名");
      } else {
        if (formState_loginAccount.password !== "") {
          formRef_loginAccount.value.validateFields("password");
        }
        return Promise.resolve();
      }
    };

    let validatePass2_loginAccount = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码");
      } else {
        return Promise.resolve();
      }
    };

    const rules_loginAccount = {
      username: [
        {
          required: true,
          validator: validatePass_loginAccount,
          trigger: "change",
        },
      ],
      password: [
        {
          validator: validatePass2_loginAccount,
          trigger: "change",
        },
      ],
    };

    const handleFinish_loginAccount = (values) => {
      console.log(values, formState_loginAccount);
      loginAction(values).then((res) => {
        console.log(res);
        if (props.loginEnterToHome) {
          location.reload();
        } else {
          router.push({ path: "/" });
        }
      });
    };

    const handleFinishFailed_loginAccount = (errors) => {
      console.log(errors);
    };
    // 清空表单
    const resetForm = (flag) => {
      if (flag === "loginPhone") {
        formRef_loginAccount.value.resetFields();
      } else {
        formRef_loginPhone.value.resetFields();
      }
    };

    const handleValidate_loginAccount = (...args) => {
      console.log(args);
    };
    return {
      formState_loginPhone,
      formRef_loginPhone,
      rules_loginPhone,
      handleFinishFailed_loginPhone,
      handleFinish_loginPhone,
      resetForm,
      handleValidate_loginPhone,
      formState_loginAccount,
      formRef_loginAccount,
      rules_loginAccount,
      handleFinishFailed_loginAccount,
      handleFinish_loginAccount,
      handleValidate_loginAccount,
    };
  },
};
</script>

<style lang="less" scoped>
.login-input {
  width: 302px;
  height: 41px;
  border-radius: 20px 20px 20px 20px;
  opacity: 0.9;
  font-size: 14px;
  background: #f8f9fa;
  font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
  font-weight: 400;
  .getCode {
    border-radius: 20px 20px 20px 20px;
    opacity: 1;
    border: 1px solid #00b388;
    text-align: center;
    color: #00b388;
  }
}
/deep/.ant-input-affix-wrapper > input.ant-input {
  padding: 0;
  border: none;
  outline: none;
  font-size: 14px;
  background: #f8f9fa;
}
.login-bt {
  width: 302px;
  height: 41px;
  border-radius: 100px 100px 100px 100px;
  opacity: 1;
  font-size: 14px;
  font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
  font-weight: 400;
}
.tip {
  height: 60px;
  background: #fff5e5;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  border: 1px solid #ffd995;
  text-align: center;
  font-size: 14px;
  font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
  font-weight: 400;
  color: #fd9941;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tip-logo {
    width: 26px;
    height: 26px;
    background: url("../../../assets/img/notice.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-left: 12px;
  }
  .tip-text {
    width: 255px;
    padding-left: 6px;
    text-align: left;
  }
}
.forge-password {
  font-size: 14px;
  font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
  font-weight: 400;
  color: #00b388;
  display: flex;
  margin-left: 5px;
  padding-bottom: 20px;
}
</style>
