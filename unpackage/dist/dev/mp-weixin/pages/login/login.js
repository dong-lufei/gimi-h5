"use strict";
const common_vendor = require("../../common/vendor.js");
const config_index = require("../../config/index.js");
const stores_useAuthStore = require("../../stores/useAuthStore.js");
const api_index = require("../../api/index.js");
require("../../utils/request.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const store = stores_useAuthStore.useAuthStore();
    const phoneInfo = common_vendor.reactive({
      account: "",
      // 表单双向绑定
      mobileArea: "+86",
      type: 2
    });
    const loginInfo = common_vendor.reactive({
      callback: config_index.callbackURL,
      code: "",
      // 表单双向绑定
      mobile: common_vendor.computed(() => phoneInfo.account),
      mobileArea: "+86",
      sourceCode: 601
    });
    const waitCode = common_vendor.ref(60);
    const canSend = common_vendor.ref(true);
    const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
    const checkPhone = common_vendor.computed(() => reg.test(phoneInfo.account));
    const getCode = async () => {
      const getCodeRes = await api_index.postPhoneCode(phoneInfo);
      console.log("短信验证码 getCodeRes: ", getCodeRes);
      if (getCodeRes.code === 200) {
        common_vendor.index.showToast({
          title: "验证码发送到您的手机",
          icon: "none"
        });
      }
      waitCode.value = 60;
      canSend.value = false;
      const timeID = setInterval(() => {
        if (waitCode.value <= 0) {
          clearTimeout(timeID);
          canSend.value = true;
        } else {
          waitCode.value--;
        }
      }, 1e3);
    };
    const login = async () => {
      const loginRes = await api_index.postLogin(loginInfo);
      console.log("登录 loginRes：", loginRes);
      if (loginRes.code === 200) {
        common_vendor.index.setStorageSync("token", loginRes.data.passToken);
        store.getUser();
        common_vendor.index.switchTab({
          url: "/pages/user/user"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: phoneInfo.account,
        b: common_vendor.o(($event) => phoneInfo.account = $event.detail.value),
        c: loginInfo.code,
        d: common_vendor.o(($event) => loginInfo.code = $event.detail.value),
        e: common_vendor.t(canSend.value ? "" : ` ( ${waitCode.value} ) `),
        f: common_vendor.unref(checkPhone) && canSend.value ? 1 : "",
        g: common_vendor.o(getCode),
        h: !common_vendor.unref(checkPhone) || !canSend.value,
        i: common_vendor.unref(checkPhone) && loginInfo.code ? 1 : "",
        j: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "E:/uni-app/gimi/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
