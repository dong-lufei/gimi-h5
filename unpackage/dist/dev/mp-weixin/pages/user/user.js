"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const stores_useAuthStore = require("../../stores/useAuthStore.js");
require("../../api/index.js");
require("../../utils/request.js");
require("../../config/index.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const store = stores_useAuthStore.useAuthStore();
    const {
      userInfo
    } = common_vendor.storeToRefs(store);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userInfo) && common_vendor.unref(userInfo).nickName
      }, common_vendor.unref(userInfo) && common_vendor.unref(userInfo).nickName ? {
        b: common_vendor.t(common_vendor.unref(userInfo).nickName),
        c: common_vendor.unref(userInfo).headImgUrl
      } : {
        d: common_assets._imports_0
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "E:/uni-app/gimi/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
