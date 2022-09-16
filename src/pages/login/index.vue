<template>
  <div id="userLayout" :class="['user-layout-wrapper']">
    <div class="container">
      <img class="logo" src="../../assets/img/home_logo.png" />
      <img class="suggest" src="../../assets/img/chat_ico.png" />
      <div class="tab-page">
        <ul>
          <li><span>首页</span></li>
          <li><span>咨询与建议</span></li>
          <li><span>下载中心</span></li>
          <li><span>项目查询</span></li>
          <li><span>操作说明</span></li>
        </ul>
      </div>
      <div class="suggest-text">咨询建议</div>
      <div class="login">
        <div class="loginImg"></div>
        <div class="login-form">
          <a-form>
            <a-tabs
              :activeKey="customActiveKey"
              :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
              @change="handleTabClick"
            >
              <a-tab-pane key="loginPhone" tab="验证码登录"> </a-tab-pane>
              <a-tab-pane key="loginAccount" tab="账号密码登录"> </a-tab-pane>
            </a-tabs>
            <login-account
              :activeTab="customActiveKey"
              ref="alogin"
              :showTip="false"
            ></login-account>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import LoginAccount from "../login/components/loginForm";
export default defineComponent({
  components: {
    LoginAccount,
  },
  setup() {
    const alogin = ref();
    const customActiveKey = ref("loginPhone");
    const handleTabClick = (key) => {
      customActiveKey.value = key;
      alogin.value.resetForm(key);
    };
    return {
      alogin,
      customActiveKey,
      handleTabClick,
    };
  },
});
</script>
<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;
  .logo {
    position: absolute;
    top: 15px;
    left: 130px;
  }
  .tab-page {
    position: absolute;
    top: 10px;
    right: 110px;
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      li {
        padding: 15px;
        font-size: 14px;
        font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
        color: #3a465a;
        span {
          font-weight: 400;
          cursor: pointer;
          &:hover {
            font-weight: 500;
          }
        }
      }
    }
  }
  .suggest {
    position: absolute;
    bottom: 130px;
    right: 40px;
    cursor: pointer;
  }
  .suggest-text {
    position: absolute;
    bottom: 100px;
    right: 33px;
    font-size: 18px;
    font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
    font-weight: 400;
    color: #f5a623;
    cursor: pointer;
  }
  background: linear-gradient(180deg, #d4f7e4 0%, #ffffff 100%);
  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background-size: contain;
    // padding: 200px 0 144px;
    position: relative;
    background: linear-gradient(180deg, #d4f7e4 0%, #ffffff 100%);
    background-image: url("../../assets/img/bg_lf.png"),
      url("../../assets/img/bg_rt.png");
    background-repeat: no-repeat, no-repeat;
    background-attachment: fixed;
    background-position: -110px 0px, 108% 0%;
    z-index: 1;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }

    .login-top {
      width: 368px;
      position: absolute;
      top: 90px;
      right: 10%;
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(255, 255, 255, 0.45);
        font-size: 14px;
      }
    }
  }
}
.login {
  width: 680px;
  margin: 0px auto;
  background: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  .loginImg {
    width: 340px;
    height: 360px;
    background: url("../../assets/img/login_bg.png") no-repeat;
    background-position: 100% 100%;
    box-shadow: 0px 1px 0px 1px #e9ecef;
    border-radius: 20px 0px 0px 20px;
    opacity: 1;
  }
  .login-form {
    flex: 1;
    display: flex;
    justify-content: center;
  }
}
</style>