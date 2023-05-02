"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ProductHeader",
  props: {
    categoryName: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(props.categoryName.text)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c253969e"], ["__file", "E:/uni-app/gimi/components/ProductHeader/ProductHeader.vue"]]);
wx.createComponent(Component);
