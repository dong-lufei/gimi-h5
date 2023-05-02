"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request.js");
require("../../config/index.js");
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const baseInfo = common_vendor.ref({});
    common_vendor.onLoad(async (option) => {
      console.log("option: ", option);
      console.log("baseInfo.value: ", baseInfo.value);
      const res = await api_index.getBaseInfo({
        skuId: option.skuId
      });
      baseInfo.value = res.data;
      console.log("baseInfo.value2: ", baseInfo.value);
    });
    async function addToCart() {
      const resAddCart = await api_index.addCart({
        "buyNumber": 1,
        // 暂时写死数量1
        // 设置参数skuid
        "skuId": `${baseInfo.value.skuPicker[0].skuId}`,
        "is_tc": false,
        "tyingItems": []
      });
      if (resAddCart.data) {
        common_vendor.index.showToast({
          title: "加入购物车成功"
        });
      }
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.o(addToCart),
        b: (_a = baseInfo.value.imageList) == null ? void 0 : _a.length
      }, ((_b = baseInfo.value.imageList) == null ? void 0 : _b.length) ? {
        c: common_vendor.t(baseInfo.value.productName),
        d: common_vendor.t(baseInfo.value.price / 100),
        e: common_vendor.f(baseInfo.value.imageList, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"], ["__file", "E:/uni-app/gimi/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
