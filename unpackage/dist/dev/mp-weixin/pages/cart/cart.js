"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request.js");
require("../../config/index.js");
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const goods_lists = common_vendor.ref({});
    common_vendor.onShow(async () => {
      const resCart = await api_index.getCart();
      goods_lists.value = resCart.data.goods_lists;
      console.log("goods_lists.value: ", goods_lists.value);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return common_vendor.e({
        a: Object.keys(goods_lists.value).length && ((_b = (_a = goods_lists.value) == null ? void 0 : _a.shoppingCartItemList) == null ? void 0 : _b.length)
      }, Object.keys(goods_lists.value).length && ((_d = (_c = goods_lists.value) == null ? void 0 : _c.shoppingCartItemList) == null ? void 0 : _d.length) ? {
        b: common_vendor.f(goods_lists.value.shoppingCartItemList, (item, k0, i0) => {
          return {
            a: item.skuImage,
            b: common_vendor.t(item.productName),
            c: item.shoppingcartId
          };
        }),
        c: common_vendor.t(goods_lists.value.totalPrice / 100)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uni-app/gimi/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
