"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request.js");
require("../../config/index.js");
if (!Array) {
  const _easycom_HomeSearch2 = common_vendor.resolveComponent("HomeSearch");
  const _easycom_BigCard2 = common_vendor.resolveComponent("BigCard");
  const _easycom_ProductSectionList2 = common_vendor.resolveComponent("ProductSectionList");
  const _easycom_ProductSectionPic2 = common_vendor.resolveComponent("ProductSectionPic");
  (_easycom_HomeSearch2 + _easycom_BigCard2 + _easycom_ProductSectionList2 + _easycom_ProductSectionPic2)();
}
const _easycom_HomeSearch = () => "../../components/HomeSearch/HomeSearch.js";
const _easycom_BigCard = () => "../../components/BigCard/BigCard.js";
const _easycom_ProductSectionList = () => "../../components/ProductSectionList/ProductSectionList.js";
const _easycom_ProductSectionPic = () => "../../components/ProductSectionPic/ProductSectionPic.js";
if (!Math) {
  (_easycom_HomeSearch + _easycom_BigCard + _easycom_ProductSectionList + _easycom_ProductSectionPic)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const productList = common_vendor.ref([]);
    const sceneList = common_vendor.ref([]);
    const categoryList = common_vendor.ref([]);
    common_vendor.onMounted(async () => {
      const res = await Promise.all([api_index.getProductList(), api_index.getSceneList(), api_index.getCategoryList()]);
      productList.value = res[0].data;
      sceneList.value = res[1].data;
      categoryList.value = res[2].data;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(productList.value, (it, i, i0) => {
          return {
            a: it.backgroundImage.url,
            b: i,
            c: i
          };
        }),
        b: common_vendor.f(sceneList.value, (sence, i, i0) => {
          return {
            a: sence.image.url,
            b: i,
            c: common_vendor.t(sence.text),
            d: sence.sceneId
          };
        }),
        c: common_vendor.f(categoryList.value, (category, i, i0) => {
          return common_vendor.e({
            a: category.style === 1
          }, category.style === 1 ? {
            b: "1cf27b2a-1-" + i0,
            c: common_vendor.p({
              category
            })
          } : {}, {
            d: category.style === 2
          }, category.style === 2 ? {
            e: "1cf27b2a-2-" + i0,
            f: common_vendor.p({
              category
            })
          } : {}, {
            g: category.style === 3
          }, category.style === 3 ? {
            h: "1cf27b2a-3-" + i0,
            i: common_vendor.p({
              category
            })
          } : {}, {
            j: i
          });
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/uni-app/gimi/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
