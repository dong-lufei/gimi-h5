"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_goods_nav)();
}
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const options = common_vendor.ref([{
      icon: "headphones",
      text: "客服"
    }, {
      icon: "shop",
      text: "店铺",
      info: 2,
      infoBackgroundColor: "#007aff",
      infoColor: "red"
    }, {
      icon: "cart",
      text: "购物车",
      info: 2
    }]);
    const buttonGroup = common_vendor.ref([
      {
        text: "加入购物车",
        backgroundColor: "#ff0000",
        color: "#fff"
      },
      {
        text: "立即购买",
        backgroundColor: "#ffa200",
        color: "#fff"
      }
    ]);
    function goCart() {
      common_vendor.index.switchTab({
        url: "/pages/cart/cart"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          column: 4,
          showBorder: true,
          square: true
        }),
        b: common_vendor.o(goCart),
        c: common_vendor.p({
          fill: true,
          options: options.value,
          buttonGroup: buttonGroup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uni-app/gimi/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
