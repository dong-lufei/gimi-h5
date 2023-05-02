"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ProductHeader2 = common_vendor.resolveComponent("ProductHeader");
  const _easycom_ProductItem2 = common_vendor.resolveComponent("ProductItem");
  (_easycom_ProductHeader2 + _easycom_ProductItem2)();
}
const _easycom_ProductHeader = () => "../ProductHeader/ProductHeader.js";
const _easycom_ProductItem = () => "../ProductItem/ProductItem.js";
if (!Math) {
  (_easycom_ProductHeader + _easycom_ProductItem)();
}
const _sfc_main = {
  __name: "ProductSectionList",
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
        a: common_vendor.p({
          categoryName: props.category.categoryName
        }),
        b: common_vendor.f(props.category.smallCardList, (smallCard, k0, i0) => {
          return {
            a: "4b5c194f-1-" + i0,
            b: common_vendor.p({
              smallCard
            }),
            c: smallCard.categoryId
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b5c194f"], ["__file", "E:/uni-app/gimi/components/ProductSectionList/ProductSectionList.vue"]]);
wx.createComponent(Component);
