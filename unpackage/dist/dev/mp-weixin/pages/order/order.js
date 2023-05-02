"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request.js");
require("../../config/index.js");
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const flowInfo = common_vendor.ref({});
    api_index.flowCheck().then((res) => {
      flowInfo.value = res;
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: (_c = (_b = (_a = flowInfo.value) == null ? void 0 : _a.goods_lists) == null ? void 0 : _b.shoppingCartItemList) == null ? void 0 : _c.length
      }, ((_f = (_e = (_d = flowInfo.value) == null ? void 0 : _d.goods_lists) == null ? void 0 : _e.shoppingCartItemList) == null ? void 0 : _f.length) ? common_vendor.e({
        b: flowInfo.value.address_lists.length
      }, flowInfo.value.address_lists.length ? {
        c: common_vendor.t(flowInfo.value.address_lists[0].consignee),
        d: common_vendor.t(flowInfo.value.address_lists[0].address)
      } : {}, {
        e: common_vendor.t(flowInfo.value.goods_lists.totalPrice / 100),
        f: common_vendor.f(flowInfo.value.goods_lists.shoppingCartItemList, (item, k0, i0) => {
          return {
            a: item.skuImage,
            b: common_vendor.t(item.productName),
            c: item.shoppingcartId
          };
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uni-app/gimi/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
