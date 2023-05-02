"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ProductCard",
  props: {
    largeCard: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.largeCard.backgroundImage.url,
        b: common_vendor.t(__props.largeCard.productName),
        c: common_vendor.t(__props.largeCard.price.text),
        d: common_vendor.t(__props.largeCard.buttonText.text)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b61716b5"], ["__file", "E:/uni-app/gimi/components/ProductCard/ProductCard.vue"]]);
wx.createComponent(Component);
