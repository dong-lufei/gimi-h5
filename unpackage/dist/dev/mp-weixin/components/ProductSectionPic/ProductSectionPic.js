"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ProductSectionPic",
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: props.category.image
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ccc70cd"], ["__file", "E:/uni-app/gimi/components/ProductSectionPic/ProductSectionPic.vue"]]);
wx.createComponent(Component);
