<template>
  <div class="user-layout-wrapper">
    <div class="container">
      <div class="content">
        <div class="top-bg">
          <div class="top">
            <img class="logo" src="../../assets/img/home_logo.png" />
            <div class="tab-page">
              <a-tabs
                :activeKey="homeActiveKey"
                :tabBarGutter="9"
                :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                @tabClick="topTabClick"
              >
                <a-tab-pane key="0" tab="首页"> </a-tab-pane>
                <a-tab-pane key="1" tab="下载中心"> </a-tab-pane>
                <a-tab-pane key="2" tab="项目查询"> </a-tab-pane>
                <a-tab-pane key="3" tab="操作说明"> </a-tab-pane>
              </a-tabs>
            </div>
            <a-button
              class="login-bt"
              type="primary"
              @click="toLogin()"
              v-if="!isLogin"
              >登录</a-button
            >
          </div>
        </div>
        <div class="search-img"></div>
        <div class="search">
          <div class="serchInput">
            <select class="search-select" value="0">
              <option value="0">全部</option>
              <option value="1">部分</option></select
            ><input
              class="search-input"
              placeholder="搜索项目"
              @keydown="toProjectSearch"
            /><a-button class="search-bt" @click="toProjectSearch">
              <template #icon><SearchOutlined /></template>查询</a-button
            >
          </div>
        </div>
        <img
          v-if="homeActiveKey === '2'"
          class="suggest"
          @click="showSuggestModal"
          src="../../assets/img/chat_ico.png"
        />
        <div
          @click="showSuggestModal"
          v-if="homeActiveKey === '2'"
          class="suggest-text"
        >
          咨询建议
        </div>
        <Home v-if="homeActiveKey === '0' && !isLogin" />
        <ProjectSearch v-if="homeActiveKey === '2'" />
        <ProjectSearch v-if="homeActiveKey === '1'" />
        <LoginHome v-if="homeActiveKey === '0' && isLogin" />
        <!-- 咨询建议弹窗 -->
        <SuggestModal :visible="show" @update-visible="updateVisible" />
        <div class="footer">
          金域官网 &nbsp;|&nbsp; 法律声明 &nbsp;|&nbsp;
          联系我们&nbsp;&nbsp;&nbsp;&nbsp; 版权所有© 金域检验
          2013-2016。保留一切权利。粤ICP备05086624号-1
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchOutlined } from "@ant-design/icons-vue";
import Home from "../index/components/home";
import SuggestModal from "../index/components/suggestModal";
import LoginHome from "../index/components/loginHome";
import ProjectSearch from "../index/components/projectSearch";
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    Home,
    LoginHome,
    ProjectSearch,
    SearchOutlined,
    SuggestModal,
  },
  setup() {
    const router = useRouter();
    const show = ref(false);
    const homeActiveKey = ref("0");
    const isLogin = ref(false);
    const toLogin = () => {
      router.push({ name: "login" });
    };
    const topTabClick = (key) => {
      homeActiveKey.value = key;
    };
    const toProjectSearch = () => {
      homeActiveKey.value = "2";
    };
    // 打开咨询弹窗
    const showSuggestModal = () => {
      show.value = true;
    };
    // 关闭咨询弹窗
    const updateVisible = (val) => {
      show.value = false;
    };
    onMounted(() => {
      if (localStorage.getItem("isLogin")) {
        isLogin.value = true;
      } else {
        isLogin.value = false;
      }
    });
    return {
      topTabClick,
      toLogin,
      homeActiveKey,
      isLogin,
      show,
      toProjectSearch,
      showSuggestModal,
      updateVisible,
    };
  },
});
</script>

<style lang="less" scoped>
.user-layout-wrapper {
  height: 100vh;
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
    position: relative;
    z-index: 0;
    opacity: 1;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: #ffff;
    .top-bg {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 230px;
      background: url("../../assets/img/home_bg.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .top {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        .logo {
          width: 166px;
          height: 36px;
          margin-top: 30px;
        }
        .tab-page {
          z-index: 9999;
          padding-left: 460px;
          /deep/.ant-tabs-nav .ant-tabs-tab {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            height: 100%;
            margin-top: 30px;
            padding: 6px 6px;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          }
        }
        .login-bt {
          margin-top: 30px;
          width: 70px;
          height: 33px;
          border-radius: 100px;
        }
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
      .search {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 0;
        .serchInput {
          flex: 1;
          padding-left: 100px;
          .search-select {
            width: 73px;
            text-align: center;
            height: 45px;
            background: #ffffff;
            opacity: 1;
            border-top-left-radius: 22.5px;
            border-bottom-left-radius: 22.5px;
            border: 2px solid #f5a623;
            border-right: none;
            &:focus {
              outline: none;
              border: 2px solid #f5a623;
              border-right: none;
            }
          }
          .search-input {
            width: 777px;
            height: 45px;
            background: #ffffff;
            opacity: 1;
            border: 2px solid #f5a623;
            border-top-right-radius: 22.5px;
            border-bottom-right-radius: 22.5px;
            border-left: none;
            padding-left: 20px;
            &:focus {
              outline: none;
              border: 2px solid #f5a623;
              border-left: none;
            }
          }
          .search-bt {
            position: relative;
            right: 125px;
            width: 120px;
            border-radius: 22.5px;
            background: @orangeColor;
            border: none;
            color: #ffffff;
          }
        }
      }
    }
    .search-img {
      position: absolute;
      margin: 0 auto;
      top: 115px;
      width: 416px;
      height: 116px;
      background: url("../../assets/img/home_banner.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .suggest {
      position: fixed;
      cursor: pointer;
    }
    .suggest-text {
      position: fixed;
      font-size: 18px;
      font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
      font-weight: 400;
      color: #f5a623;
      cursor: pointer;
    }
    .footer {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: #f8f9fa;
      opacity: 0.9;
      position: relative;
      bottom: 0;
      text-align: center;
      font-size: 14px;
      font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
      font-weight: 400;
      color: #323741;
    }
  }
}
</style>
