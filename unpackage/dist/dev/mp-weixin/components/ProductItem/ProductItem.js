"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ProductItem",
  props: {
    smallCard: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.smallCard.productImage,
        b: common_vendor.t(__props.smallCard.productName.text),
        c: common_vendor.t(__props.smallCard.price.text),
        d: `/pages/detail/detail?skuId=${__props.smallCard.skuId}`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bdc91c96"], ["__file", "E:/uni-app/gimi/components/ProductItem/ProductItem.vue"]]);
wx.createComponent(Component);
