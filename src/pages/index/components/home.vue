<template>
  <div class="home-list">
    <div class="left">
      <div class="sys-tip">平台简介</div>
      <div class="sys-text">
        "金域自助服务系统"是金域检验为客户打造的一站式服务平台，力求为客户提供高品质的服务。
      </div>
      <div class="left-banner">
        <div class="test-item">
          <div class="test-item-logo"></div>
          <div class="test-name">搜索项目</div>
          <div class="text-detail">
            客户可在线查询金域检验开展的2200余项检验项目
          </div>
        </div>
        <div class="result-item">
          <div class="result-item-logo"></div>
          <div class="result-name">查询结果</div>
          <div class="text-detail">客户可在登录后实时关注检验情况。</div>
        </div>
        <div class="concat-item">
          <div class="concat-item-logo"></div>
          <div class="concat-name">咨询建议</div>
          <div class="text-detail">
            客户可通过【咨询与建议】将需求传递至金域检验客服中心。
          </div>
        </div>
      </div>
      <div class="sys-text">
        金域检验始终以客户为中心，不断提升服务质量，为客户打造一个全方位、全视角、全生命周期的服务圈。
      </div>
      <div class="service-img"></div>
      <div class="phone">全国统一服务热线：<span>4001-111-120</span></div>
    </div>
    <div class="right">
      <div class="login">
        <a-form>
          <a-tabs
            :activeKey="customActiveKey"
            :tabBarStyle="{ textAlign: 'center' }"
            @change="handleTabClick"
          >
            <a-tab-pane key="loginPhone" tab="验证码登录"> </a-tab-pane>
            <a-tab-pane key="loginAccount" tab="账号密码登录"> </a-tab-pane>
          </a-tabs>
          <login-account
            :activeTab="customActiveKey"
            ref="alogin"
            :showTip="true"
            :styleForm="{
              marginTop: '10px',
            }"
            :loginEnterToHome="true"
          ></login-account>
        </a-form>
      </div>
      <div class="qrcode">
        <div class="way-title">其它体验方式</div>
        <div class="code-img">
          <div class="code-detail">
            <div class="code-title">金域云检医生端</div>
            <div class="code-detail-text">
              享受实时报告推送服务，请微信扫码访问医生端小程序
            </div>
          </div>
          <img src="../../../assets/img/kmc_qrcode.png" />
        </div>
        <div class="code-img">
          <div class="code-detail">
            <div class="code-title">金域服务小程序</div>
            <div class="code-detail-text">个人报告查询</div>
          </div>
          <img src="../../../assets/img/kmos_qrcode.png" />
        </div>
        <div class="code-bt">
          <div class="code-logo"></div>
          <div class="code-bt-text">桌面版下载（XP推荐使用）</div>
        </div>
        <div class="code-green-bt">
          <div class="code-green-logo"></div>
          <div class="code-bt-green-text">金域在线服务（旧系统）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginAccount from "../../login/components/loginForm";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    LoginAccount,
  },
  setup() {
    const alogin = ref();
    const router = useRouter();
    const customActiveKey = ref("loginPhone");
    const handleTabClick = (key) => {
      customActiveKey.value = key;
      alogin.value.resetForm(key);
    };
    const toLogin = () => {
      router.push({ name: "login" });
    };
    return {
      alogin,
      customActiveKey,
      handleTabClick,
      toLogin,
    };
  },
});
</script>

<style lang="less" scoped>
.home-list {
  display: flex;
  flex: 1;
  padding-top: 43px;
  padding-bottom: 43px;
  width: 1200px;
  align-items: center;
  justify-content: center;
  z-index: 0;
  .left {
    width: 840px;
    height: 920px;
    background: #ffffff;
    box-shadow: 0px 1px 16px 1px rgba(233, 236, 239, 0.8);
    opacity: 1;
    border-radius: 10px;
    .sys-tip {
      padding-left: 35px;
      padding-top: 26px;
      font-size: 24px;
      font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
      font-weight: bold;
      color: #fd9941;
    }
    .sys-text {
      padding-left: 35px;
      padding-top: 10px;
      font-size: 16px;
      font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
      font-weight: bold;
      color: #323741;
    }
    .service-img {
      width: 770px;
      height: 407px;
      border-radius: 20px;
      background: url("../../../assets/img/service_img.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-left: 35px;
      margin-top: 20px;
    }
    .phone {
      padding-left: 35px;
      padding-top: 20px;
      font-size: 18px;
      font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
      font-weight: bold;
      color: #323741;
      text-align: center;
      span {
        color: #00b388;
      }
    }
    .left-banner {
      display: flex;
      justify-content: space-between;
      padding-top: 25px;
      padding-bottom: 15px;
      .test-item {
        width: 240px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #f2fcfc;
        border-radius: 20px 20px 20px 20px;
        opacity: 0.9;
        cursor: pointer;
        &:hover {
          background: #f4fdfd;
          box-shadow: 0px 9px 24px 1px rgba(71, 227, 99, 0.4);
          border-radius: 20px 20px 20px 20px;
          opacity: 0.9;
          border: 1px solid #00b388;
        }
        .text-detail {
          font-size: 14px;
          font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
          font-weight: 400;
          color: #323741;
          text-align: center;
          padding: 20px;
        }
        .test-item-logo {
          width: 55px;
          height: 54px;
          background: url("../../../assets/img/contact_ico.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .test-name {
          font-size: 20px;
          font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
          font-weight: bold;
          color: #1cd74b;
        }
        &:first-child {
          margin-left: 35px;
        }
        &:last-child {
          margin-right: 35px;
        }
      }
      .result-item {
        width: 240px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #ecfbff;
        border-radius: 20px 20px 20px 20px;
        opacity: 0.9;
        cursor: pointer;
        &:hover {
          background: #ecfbff;
          box-shadow: 0px 4px 24px 1px rgba(47, 178, 236, 0.4);
          border-radius: 20px 20px 20px 20px;
          opacity: 0.9;
          border: 1px solid #2fb2ec;
        }
        .text-detail {
          font-size: 14px;
          font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
          font-weight: 400;
          color: #323741;
          text-align: center;
          padding: 20px;
        }
        .result-item-logo {
          width: 55px;
          height: 54px;
          background: url("../../../assets/img/report_ico.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .result-name {
          font-size: 20px;
          font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
          font-weight: bold;
          color: #2fb2ec;
        }
        &:first-child {
          margin-left: 35px;
        }
        &:last-child {
          margin-right: 35px;
        }
      }
      .concat-item {
        width: 240px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #fffbf3;
        border-radius: 20px 20px 20px 20px;
        opacity: 0.9;
        cursor: pointer;
        &:hover {
          background: #fffbf4;
          box-shadow: 0px 9px 24px 1px rgba(245, 166, 35, 0.4);
          border-radius: 20px 20px 20px 20px;
          opacity: 0.9;
          border: 1px solid #fcb145;
        }
        .text-detail {
          font-size: 14px;
          font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
          font-weight: 400;
          color: #323741;
          text-align: center;
          padding: 20px;
        }
        .concat-item-logo {
          width: 55px;
          height: 54px;
          background: url("../../../assets/img/chat_ico.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-bottom: 20px;
        }
        .concat-name {
          font-size: 20px;
          font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
          font-weight: bold;
          color: #f5a623;
        }
        &:first-child {
          margin-left: 35px;
        }
        &:last-child {
          margin-right: 35px;
        }
      }
    }
  }
  .right {
    width: 350px;
    .login {
      width: 350px;
      height: 390px;
      background: #ffffff;
      box-shadow: 0px 1px 16px 1px rgba(233, 236, 239, 0.8);
      opacity: 1;
      margin: 0 0 0 10px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .qrcode {
      width: 350px;
      height: 520px;
      background: #ffffff;
      box-shadow: 0px 1px 16px 1px rgba(233, 236, 239, 0.8);
      opacity: 1;
      margin: 10px 0 0 10px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      .code-img {
        width: 310px;
        height: 140px;
        background: #f2fcfc;
        border-radius: 20px 20px 20px 20px;
        opacity: 0.9;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        .code-detail {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 8px;
          .code-title {
            font-size: 18px;
            font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
            font-weight: bold;
            color: #3a465a;
          }
          .code-detail-text {
            padding-top: 10px;
            font-size: 14px;
            font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
            font-weight: 400;
            color: #77808c;
          }
        }
      }
      .code-bt {
        width: 280px;
        height: 50px;
        border-radius: 25px 25px 25px 25px;
        opacity: 1;
        border: 1px solid #2fbffb;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        .code-logo {
          width: 18px;
          height: 19px;
          background: url("../../../assets/img/microsoft_logo.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-left: 12px;
        }
        .code-bt-text {
          font-size: 18px;
          font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
          font-weight: bold;
          color: #2fbffb;
        }
      }
      .code-green-bt {
        width: 280px;
        height: 50px;
        border-radius: 25px 25px 25px 25px;
        opacity: 1;
        border: 1px solid #00b388;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        .code-green-logo {
          width: 18px;
          height: 19px;
          background: url("../../../assets/img/Union.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-left: 12px;
        }
        .code-bt-green-text {
          font-size: 18px;
          font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
          font-weight: bold;
          color: #00b388;
        }
      }
      .way-title {
        width: 350px;
        height: 57px;
        background: #ffffff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 1px solid rgba(233, 236, 239, 0.8);
        opacity: 1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
        font-weight: bold;
        color: #323741;
      }
    }
  }
}
</style>
