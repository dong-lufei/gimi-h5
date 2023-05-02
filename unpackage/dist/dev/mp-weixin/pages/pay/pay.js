"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request.js");
require("../../config/index.js");
const _sfc_main = {
  __name: "pay",
  setup(__props) {
    function payMP() {
      common_vendor.wx$1.login({
        async success(res) {
          const {
            openid
          } = await api_index.getMPid({
            code: res.code
          });
          const params = await api_index.createMPorder({
            openid,
            amount: 1
          });
          common_vendor.wx$1.requestPayment({
            ...params,
            signType: "MD5",
            success(res2) {
              common_vendor.wx$1.showToast({
                title: "支付成功"
              });
              console.log("小程序支付成功信息", res2);
            },
            fail(err) {
              common_vendor.wx$1.showToast({
                title: "支付失败",
                icon: "error"
              });
              console.log("小程序支付失败信息", err);
            }
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(payMP)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uni-app/gimi/pages/pay/pay.vue"]]);
wx.createPage(MiniProgramPage);
