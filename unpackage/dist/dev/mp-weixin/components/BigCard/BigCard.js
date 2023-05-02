"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ProductHeader2 = common_vendor.resolveComponent("ProductHeader");
  const _easycom_ProductCard2 = common_vendor.resolveComponent("ProductCard");
  const _easycom_ProductItem2 = common_vendor.resolveComponent("ProductItem");
  (_easycom_ProductHeader2 + _easycom_ProductCard2 + _easycom_ProductItem2)();
}
const _easycom_ProductHeader = () => "../ProductHeader/ProductHeader.js";
const _easycom_ProductCard = () => "../ProductCard/ProductCard.js";
const _easycom_ProductItem = () => "../ProductItem/ProductItem.js";
if (!Math) {
  (_easycom_ProductHeader + _easycom_ProductCard + _easycom_ProductItem)();
}
const _sfc_main = {
  __name: "BigCard",
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.category.smallCardList
      }, props.category.smallCardList ? {
        b: common_vendor.p({
          categoryName: props.category.categoryName
        }),
        c: common_vendor.p({
          largeCard: props.category.largeCard
        }),
        d: common_vendor.f(props.category.smallCardList, (smallCard, k0, i0) => {
          return {
            a: "e9a7171f-2-" + i0,
            b: common_vendor.p({
              smallCard
            }),
            c: smallCard.skuId
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9a7171f"], ["__file", "E:/uni-app/gimi/components/BigCard/BigCard.vue"]]);
wx.createComponent(Component);
