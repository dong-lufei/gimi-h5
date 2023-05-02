if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _imports_0$1 = "/static/icon_search.png";
  const _imports_1 = "/static/icon_application.png";
  const _imports_2 = "/static/icon_purchase.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$j = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "home-search-container" }, [
      vue.createElementVNode("view", { class: "input-warp" }, [
        vue.createElementVNode("input", { placeholder: "想找点什么?" }),
        vue.createElementVNode("image", { src: _imports_0$1 })
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/category/category",
        "open-type": "switchTab"
      }, [
        vue.createElementVNode("image", { src: _imports_1 })
      ]),
      vue.createElementVNode("navigator", {
        url: "/pages/cart/cart",
        "open-type": "switchTab"
      }, [
        vue.createElementVNode("image", { src: _imports_2 })
      ])
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$4], ["__scopeId", "data-v-64f4bcf4"], ["__file", "E:/uni-app/gimi/components/HomeSearch/HomeSearch.vue"]]);
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const _sfc_main$i = {
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "productHeader-container" }, [
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString(props.categoryName.text),
            1
            /* TEXT */
          ),
          vue.createElementVNode("navigator", {
            url: "/pages/category/category?",
            "open-type": "switchTab"
          }, "更多 >")
        ]);
      };
    }
  };
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c253969e"], ["__file", "E:/uni-app/gimi/components/ProductHeader/ProductHeader.vue"]]);
  const _sfc_main$h = {
    __name: "ProductCard",
    props: {
      largeCard: {
        type: Object,
        default: () => ({})
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "productCard-container" }, [
          vue.createElementVNode("image", {
            src: __props.largeCard.backgroundImage.url,
            alt: "卡片图"
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { class: "priceTitle" }, [
              vue.createElementVNode(
                "view",
                { class: "title" },
                vue.toDisplayString(__props.largeCard.productName),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "price" },
                " ￥" + vue.toDisplayString(__props.largeCard.price.text),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode(
              "view",
              { class: "btn" },
              vue.toDisplayString(__props.largeCard.buttonText.text),
              1
              /* TEXT */
            )
          ])
        ]);
      };
    }
  };
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-b61716b5"], ["__file", "E:/uni-app/gimi/components/ProductCard/ProductCard.vue"]]);
  const _sfc_main$g = {
    __name: "ProductItem",
    props: {
      smallCard: {
        type: Object,
        default: () => ({})
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("navigator", {
          url: `/pages/detail/detail?skuId=${__props.smallCard.skuId}`,
          class: "productItem-container"
        }, [
          vue.createElementVNode("view", { class: "img" }, [
            vue.createElementVNode("image", {
              src: __props.smallCard.productImage,
              alt: "列表图"
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { class: "priceTitle" }, [
              vue.createElementVNode(
                "view",
                { class: "title" },
                vue.toDisplayString(__props.smallCard.productName.text),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "price" },
                " ￥" + vue.toDisplayString(__props.smallCard.price.text),
                1
                /* TEXT */
              )
            ])
          ])
        ], 8, ["url"]);
      };
    }
  };
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-bdc91c96"], ["__file", "E:/uni-app/gimi/components/ProductItem/ProductItem.vue"]]);
  const _sfc_main$f = {
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
        const _component_ProductHeader = resolveEasycom(vue.resolveDynamicComponent("ProductHeader"), __easycom_0$2);
        const _component_ProductCard = resolveEasycom(vue.resolveDynamicComponent("ProductCard"), __easycom_1$3);
        const _component_ProductItem = resolveEasycom(vue.resolveDynamicComponent("ProductItem"), __easycom_1$2);
        return props.category.smallCardList ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "bigCard-container"
        }, [
          vue.createCommentVNode(" 标题 "),
          vue.createVNode(_component_ProductHeader, {
            categoryName: props.category.categoryName
          }, null, 8, ["categoryName"]),
          vue.createCommentVNode(" 卡片 "),
          vue.createVNode(_component_ProductCard, {
            largeCard: props.category.largeCard
          }, null, 8, ["largeCard"]),
          vue.createCommentVNode(" 图片列表 "),
          vue.createElementVNode("view", { class: "smallCardList" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(props.category.smallCardList, (smallCard) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "product",
                  key: smallCard.skuId
                }, [
                  vue.createVNode(_component_ProductItem, { smallCard }, null, 8, ["smallCard"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-e9a7171f"], ["__file", "E:/uni-app/gimi/components/BigCard/BigCard.vue"]]);
  const _sfc_main$e = {
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
        const _component_ProductHeader = resolveEasycom(vue.resolveDynamicComponent("ProductHeader"), __easycom_0$2);
        const _component_ProductItem = resolveEasycom(vue.resolveDynamicComponent("ProductItem"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "productSectionList-container" }, [
          vue.createCommentVNode(" 标题 "),
          vue.createVNode(_component_ProductHeader, {
            categoryName: props.category.categoryName
          }, null, 8, ["categoryName"]),
          vue.createCommentVNode(" 图片列表 "),
          vue.createElementVNode("view", { class: "smallCardList" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(props.category.smallCardList, (smallCard) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "product",
                  key: smallCard.categoryId
                }, [
                  vue.createVNode(_component_ProductItem, { smallCard }, null, 8, ["smallCard"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-4b5c194f"], ["__file", "E:/uni-app/gimi/components/ProductSectionList/ProductSectionList.vue"]]);
  const _sfc_main$d = {
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "productSectionPic-container" }, [
          vue.createElementVNode("image", {
            src: props.category.image,
            mode: "widthFix"
          }, null, 8, ["src"])
        ]);
      };
    }
  };
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-8ccc70cd"], ["__file", "E:/uni-app/gimi/components/ProductSectionPic/ProductSectionPic.vue"]]);
  const dataBaseURL = "https://mall-gateway.i.xgimi.com";
  const tokenBaseURL = "https://ucenter-api.xgimi.com";
  const callbackURL = "https://m.xgimi.com/pages/user/user";
  const cartURL = "https://sp2.xgimi.com";
  const qikueduURL = "https://ai.qikuedu.com";
  const bspappURL = "https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com";
  const timeout = 5e3;
  const request = function(option) {
    let url = option.url;
    const reg = /^https?/i;
    if (!reg.test(url)) {
      if (option.url.startsWith("/v1/") || option.url.startsWith("/open/")) {
        url = tokenBaseURL + url;
      } else if (option.url.startsWith("/api") || option.url.startsWith("/flow")) {
        url = cartURL + url;
      } else if (option.url.startsWith("/study")) {
        url = qikueduURL + url;
      } else if (option.url.startsWith("/http/")) {
        url = bspappURL + url;
      } else {
        url = dataBaseURL + url;
      }
    }
    const header = option.header || {};
    header.token = uni.getStorageSync("token");
    header.source = 1;
    header.channel = "h5";
    const loading = option.loading;
    if (loading) {
      uni.showLoading(loading);
    }
    const reqConfig = {
      url,
      //请求url
      method: option.method || "GET",
      //请求方法
      header,
      //请求头
      timeout,
      data: option.data || option.params
      //请求数据
    };
    formatAppLog("log", "at utils/request.js:54", "reqConfig: ", reqConfig);
    return new Promise((resolve, reject) => {
      uni.request({
        ...reqConfig,
        success(res) {
          formatAppLog("log", "at utils/request.js:61", "request-res: ", res);
          if (res.statusCode === 200) {
            if (res.data.code === 1002 && res.data.msg === "购物车为空！") {
              resolve(mockCartData);
            }
            if (res.data.code === 100102 && res.data.msg === "登录已失效，请重新登录") {
              formatAppLog("log", "at utils/request.js:71", "登录已失效: ");
              resolve(mockOrderData);
            } else if (![
              200,
              201,
              0
            ].includes(res.data.code)) {
              uni.showToast({
                title: res.data.message || "请求错误",
                icon: "none"
              });
            } else {
              resolve(res.data);
            }
          }
        },
        fail(err) {
          uni.showToast({
            title: "请求失败",
            icon: "error"
          });
          formatAppLog("error", "at utils/request.js:95", "request-fail：", err);
          reject(err);
        },
        complete() {
          if (loading) {
            uni.hideLoading();
          }
        }
      });
    });
  };
  request.get = function(url, config) {
    return request({
      url,
      method: "GET",
      ...config
    });
  };
  request.post = function(url, data, config) {
    formatAppLog("log", "at utils/request.js:117", "post-url: ", url);
    formatAppLog("log", "at utils/request.js:118", "post-data: ", data);
    formatAppLog("log", "at utils/request.js:119", "post-config: ", config);
    return request({
      url,
      method: "POST",
      ...config,
      data,
      header: {
        "content-type": "application/json"
      }
    });
  };
  const mockCartData = {
    "ret": true,
    "code": 200,
    "data": {
      "isCheckedAll": true,
      "goods_lists": {
        "totalPrice": "2514600",
        "productPrice": "2514600",
        "reducePrice": "0",
        "checkedProductAmount": 4,
        "productAmount": 5,
        "shoppingCartItemList": [{
          "shoppingcartId": "340605",
          "skuId": "122800914",
          "skuSn": "GMN_001144",
          "productName": "极米 A3 100英寸硬幕套装",
          "marketPrice": "2299900",
          "price": "1999900",
          "buyNumber": 1,
          "totalPrice": "1999900",
          "skuAttrList": [{
            "name": "型号",
            "value": "100英寸硬幕套装"
          }],
          "isReal": true,
          "isChecked": true,
          "skuImage": "https://file02.xgimi.com/official/admin/20220216/2022021610563925110.jpg",
          "gCode": null,
          "parentId": "0",
          "activityType": {
            "code": 15,
            "desc": "买赠"
          },
          "activityId": 2529,
          "status": {
            "code": 0,
            "desc": "正常"
          },
          "skuInventory": null,
          "affType": {
            "code": 1,
            "desc": "普通"
          },
          "affShoppingCartList": [{
            "shoppingcartId": "340940",
            "skuId": "1201200599",
            "skuSn": "GMN_000049",
            "productName": "极米主动快门式3D眼镜",
            "marketPrice": "19800",
            "price": "0",
            "buyNumber": 2,
            "totalPrice": "0",
            "skuAttrList": null,
            "isReal": true,
            "isChecked": null,
            "skuImage": "https://file02.xgimi.com/official/admin/20221019/2022101911584862211.png",
            "gCode": null,
            "parentId": "340605",
            "activityType": {
              "code": 15,
              "desc": "买赠"
            },
            "activityId": 2529,
            "status": {
              "code": 1,
              "desc": "失效"
            },
            "skuInventory": null,
            "affType": {
              "code": 2,
              "desc": "赠品"
            },
            "affShoppingCartList": [],
            "additionalBuyList": null,
            "activityDetailList": [{
              "activityId": 2529,
              "activityType": {
                "code": 15,
                "desc": "买赠"
              },
              "minCharge": null,
              "maxCharge": null,
              "reduceMargin": null,
              "reduceType": null,
              "maxAdditionalNum": null
            }],
            "tyingDetailList": null,
            "extInfo": null,
            "carving": null
          }],
          "additionalBuyList": null,
          "activityDetailList": [{
            "activityId": 2529,
            "activityType": {
              "code": 15,
              "desc": "买赠"
            },
            "minCharge": null,
            "reduceMargin": null,
            "reduceType": null,
            "maxAdditionalNum": null
          }],
          "tyingDetailList": [{
            "shoppingcartId": "340606",
            "skuId": "1191800525",
            "skuSn": "GMZ_000525",
            "productName": "极米 HDMI高清数据线",
            "marketPrice": "1899",
            "price": "4900",
            "buyNumber": 1,
            "totalPrice": "4900",
            "skuAttrList": null,
            "isReal": true,
            "isChecked": null,
            "skuImage": "https://file02.xgimi.com/official/admin/20221019/2022101911423543329.png",
            "gCode": null,
            "parentId": "340605",
            "activityType": {
              "code": 50,
              "desc": "搭售"
            },
            "activityId": 2147483647,
            "status": {
              "code": 0,
              "desc": "正常"
            },
            "skuInventory": null,
            "affType": {
              "code": 7,
              "desc": "搭售商品"
            },
            "affShoppingCartList": null,
            "additionalBuyList": null,
            "activityDetailList": null,
            "tyingDetailList": null,
            "extInfo": null,
            "carving": null
          }],
          "extInfo": null,
          "carving": false
        }, {
          "shoppingcartId": "340601",
          "skuId": "1211100779",
          "skuSn": "GMN_000304",
          "productName": "极米 H3S",
          "marketPrice": "569900",
          "price": "429900",
          "buyNumber": 1,
          "totalPrice": "429900",
          "skuAttrList": [{
            "name": "型号",
            "value": "标准版"
          }],
          "isReal": true,
          "isChecked": true,
          "skuImage": "https://img02-xgimi.obs.cn-east-3.myhuaweicloud.com/official/admin/20230429/2023042913445630056.jpg",
          "gCode": null,
          "parentId": "0",
          "activityType": {
            "code": 15,
            "desc": "买赠"
          },
          "activityId": 2525,
          "status": {
            "code": 0,
            "desc": "正常"
          },
          "skuInventory": null,
          "affType": {
            "code": 1,
            "desc": "普通"
          },
          "affShoppingCartList": [{
            "shoppingcartId": "340937",
            "skuId": "1211200780",
            "skuSn": "GMN_000553",
            "productName": "H3S延保一年",
            "marketPrice": "19900",
            "price": "0",
            "buyNumber": 1,
            "totalPrice": "0",
            "skuAttrList": null,
            "isReal": false,
            "isChecked": null,
            "skuImage": "https://file02.xgimi.com/official/admin/20210316/2021031614512812660.png",
            "gCode": null,
            "parentId": "340601",
            "activityType": {
              "code": 15,
              "desc": "买赠"
            },
            "activityId": 2525,
            "status": {
              "code": 1,
              "desc": "失效"
            },
            "skuInventory": null,
            "affType": {
              "code": 2,
              "desc": "赠品"
            },
            "affShoppingCartList": [{
              "cookieKey": null,
              "shoppingcartId": 340938,
              "userId": 8913901,
              "skuId": 1211200780,
              "skuSn": "GMN_000553",
              "productName": "H3S延保一年",
              "marketPrice": 19900,
              "price": 19900,
              "buyNumber": 1,
              "skuAttr": ",选择机型:H3S延保一年",
              "isReal": false,
              "isChecked": true,
              "skuImage": "https://file02.xgimi.com/official/admin/20210316/2021031614512812660.png",
              "parentId": 340937,
              "gCode": null,
              "activityType": {
                "code": 15,
                "desc": "买赠"
              },
              "activityId": 2516,
              "status": {
                "code": 0,
                "desc": "正常"
              },
              "skuInventory": null,
              "affType": {
                "code": 2,
                "desc": "赠品"
              },
              "isDelete": false,
              "addTime": "2023-04-30 12:19:29",
              "affShoppingCartList": null,
              "tyingShoppingCartList": null,
              "activityDetailList": null,
              "createdBy": "system add",
              "extInfo": null
            }, {
              "cookieKey": null,
              "shoppingcartId": 340939,
              "userId": 8913901,
              "skuId": 1201200599,
              "skuSn": "GMN_000049",
              "productName": "极米主动快门式3D眼镜",
              "marketPrice": 19800,
              "price": 17900,
              "buyNumber": 1,
              "skuAttr": "",
              "isReal": true,
              "isChecked": true,
              "skuImage": "https://file02.xgimi.com/official/admin/20221019/2022101911584862211.png",
              "parentId": 340937,
              "gCode": null,
              "activityType": {
                "code": 15,
                "desc": "买赠"
              },
              "activityId": 2516,
              "status": {
                "code": 0,
                "desc": "正常"
              },
              "skuInventory": null,
              "affType": {
                "code": 2,
                "desc": "赠品"
              },
              "isDelete": false,
              "addTime": "2023-04-30 12:19:29",
              "affShoppingCartList": null,
              "tyingShoppingCartList": null,
              "activityDetailList": null,
              "createdBy": "system add",
              "extInfo": null
            }],
            "additionalBuyList": null,
            "activityDetailList": [{
              "activityId": 2525,
              "activityType": {
                "code": 15,
                "desc": "买赠"
              },
              "minCharge": null,
              "maxCharge": null,
              "reduceMargin": null,
              "reduceType": null,
              "maxAdditionalNum": null
            }],
            "tyingDetailList": null,
            "extInfo": null,
            "carving": null
          }],
          "additionalBuyList": null,
          "activityDetailList": [{
            "activityId": 2525,
            "activityType": {
              "code": 15,
              "desc": "买赠"
            },
            "minCharge": null,
            "reduceMargin": null,
            "reduceType": null,
            "maxAdditionalNum": null
          }],
          "tyingDetailList": [{
            "shoppingcartId": "340602",
            "skuId": "1212400815",
            "skuSn": "GMN_000608",
            "productName": "极米 100英寸遥控电动光子幕布2.0",
            "marketPrice": "99900",
            "price": "79900",
            "buyNumber": 1,
            "totalPrice": "79900",
            "skuAttrList": null,
            "isReal": true,
            "isChecked": null,
            "skuImage": "https://file02.xgimi.com/official/admin/20221027/2022102709214370821.0",
            "gCode": null,
            "parentId": "340601",
            "activityType": {
              "code": 50,
              "desc": "搭售"
            },
            "activityId": 2147483647,
            "status": {
              "code": 0,
              "desc": "正常"
            },
            "skuInventory": 7,
            "affType": {
              "code": 7,
              "desc": "搭售商品"
            },
            "affShoppingCartList": null,
            "additionalBuyList": null,
            "activityDetailList": null,
            "tyingDetailList": null,
            "extInfo": null,
            "carving": null
          }],
          "extInfo": null,
          "carving": false
        }],
        "reduceActivityList": []
      },
      "reduceActivityList": [],
      "isOrder": true,
      "has_laser": null,
      "visitList": null,
      "$historyList": []
    }
  };
  const mockOrderData = {
    "step": "check",
    "address_lists": [],
    "coupon_lists": [],
    "gimiMoney": {
      "id": null,
      "userId": 8913901,
      "amount": "0.00",
      "usedAmout": "0.00",
      "totalAmout": "0.00",
      "status": {
        "code": 0,
        "desc": "正常"
      },
      "xgimiCoinLogVOS": null,
      "incomeLoglist": null,
      "expenseLoglist": null,
      "frozenLoglist": null
    },
    "goods_lists": {
      "totalPrice": "149800",
      "productPrice": "149800",
      "reducePrice": "0",
      "checkedProductAmount": 2,
      "productAmount": 2,
      "shoppingCartItemList": [{
        "shoppingcartId": "340943",
        "skuId": "121400751",
        "skuSn": "GMN_000392",
        "productName": "极米无线麦克风 C3",
        "marketPrice": "76900",
        "price": "74900",
        "buyNumber": 2,
        "totalPrice": "149800",
        "skuAttrList": [{
          "name": "型号",
          "value": "极米无线麦克风 C3"
        }],
        "isReal": true,
        "isChecked": true,
        "skuImage": "https://file02.xgimi.com/official/admin/20221019/2022101911574512494.png",
        "gCode": null,
        "parentId": "0",
        "activityType": {
          "code": 0,
          "desc": "普通"
        },
        "activityId": 0,
        "status": {
          "code": 0,
          "desc": "正常"
        },
        "skuInventory": null,
        "affType": {
          "code": 1,
          "desc": "普通"
        },
        "affShoppingCartList": null,
        "additionalBuyList": null,
        "activityDetailList": null,
        "tyingDetailList": null,
        "extInfo": null,
        "carving": false
      }],
      "reduceActivityList": []
    },
    "recommendCode": null,
    "provinceLists": [
      {
        "regionDesId": "NVU5clJJdlE1L0VhVXRzSXRla1hmdz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "安徽省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "ckh6U3JxT0dIYTl0UGtoNG5uczljdz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "澳门",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "MUJHcnFuUzY5YndTZVQxL3Bsb3JnZz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "北京",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "TDlyckpsRHUrVUNOZHJ4V2c1K3VsQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "重庆",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "WWJybVdDSG5Gd3RtSlhWWVB3TFFhZz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "福建省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "YTFXTFRPTjBzaVRlS05rY292NW9qUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "甘肃省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "NnROZGdIdlRhVUJWbk5kVGZwVkNNdz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "广东省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "TmthN2I1eUNLNGJ1aEt2b2tqNmdadz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "广西壮族自治区",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "L1I4TzFIa2c5RkpQSXdPYzRyTWgxZz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "贵州省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "ajl4dkkvS2dyeDVtME4vMzQza2RUQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "海南省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "NjlTRzJQczZkckZwQ25wUXd0cXJ1QT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "河北省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "WVNvWldrRHBLY3B5NXczaDdWU2Zydz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "河南省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "b01kdDExSklBdUxycHNkS2hrNU4rQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "黑龙江省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "YXl1OWViU2ZRZ2tYLy9Na0JzVmpIQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "湖北省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "ODBQSG5pV2dZOFE5bWl0cVVrTHFMZz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "湖南省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "RlpEK054R3dqVVd5ck1PckcxcG9Ddz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "吉林省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "NUtDemFIVG9tOUJzcHdFeEtuZnA4UT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "江苏省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "VC9NeVloOG12VG5DMjVhbjFkMjVXQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "江西省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "N2FtZ3ROcFVZQTdQM0RFazRNVTNuUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "辽宁省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "MDNTRDFXVmxwZ3pXV1VOa0tKY3oxQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "内蒙古自治区",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "SGZOdzVmMVFmbUtsZTdpM2JwMyszQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "宁夏回族自治区",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "QXVSR2U2RUJqaU1QQUpuWU5iSWJ3UT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "青海省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "WHd6bVdTN3lNOFB2R25HeS9iSFhsQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "山东省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "Vk9RMVpTbHlnQTFrU2pCYkw2WTAzQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "山西省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "OUlJSVpPam9oMGZuTHJkNHJ0a1RoUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "陕西省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "d045bElPL1pzQzB1VWFsV2hYbHR3Zz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "上海",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "TUIyRCtCajNmN0dEVm9nejlwMUZuUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "四川省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "NlI3TDZWTkdsd21xNDRkOTRlYlNvUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "台湾",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "OGg3bEhqWFlzUkdzYTZYYXlPTEkrZz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "天津",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "ZUdsQVd6UFlSMzNJSVBub3JQSTJCUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "西藏自治区",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "bllXTmhZRmd1TWczMlZEc242N29IUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "香港",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "WUJDcXpOcVgyeEZxRndMWUx6YWVrdz09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "新疆维吾尔自治区",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "YWpBd05zclNEbkJwT2ZvVnJwd1ArQT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "云南省",
        "regionType": null,
        "regionStatus": null
      },
      {
        "regionDesId": "MktvNXdDTk8wTGZvamNaN1NWaGsvUT09",
        "parentDesId": "MjI3UTlFcnc5Uk1BL3oxWUprdVVMdz09",
        "regionName": "浙江省",
        "regionType": null,
        "regionStatus": null
      }
    ],
    "isOnlygCode": false,
    "gimiOverData": null,
    "defaultAddress": null
  };
  const postPhoneCode = (data) => request.post("/v1/identity/sendCode", data);
  const postLogin = (data) => request.post("/v1/sso/smsLogin", data);
  const getUserInfo = () => request.get("/open/oauth2/login/checkLogin");
  const getProductList = () => request.get("/mall/home/new_product", {
    loading: {
      title: "加载中",
      icon: "loading"
    }
  });
  const getSceneList = () => request.get("/mall/newcomer/scene_list");
  const getCategoryList = () => request.get("/mall/home/category_list");
  function getBaseInfo(params) {
    return request.get("/mall/sku/detail/basic_info", {
      params
    });
  }
  function getCart() {
    return request.post("/api/cart");
  }
  function addCart(data) {
    return request.post("/api/addcart", data);
  }
  function flowCheck() {
    return request.get("/flow-check");
  }
  function createOrder(data) {
    return request.post("/http/pay", data);
  }
  function getOpenId(data) {
    return request.post("/http/user-center", data);
  }
  const _sfc_main$c = {
    __name: "index",
    setup(__props) {
      const productList = vue.ref([]);
      const sceneList = vue.ref([]);
      const categoryList = vue.ref([]);
      vue.onMounted(async () => {
        const res = await Promise.all([getProductList(), getSceneList(), getCategoryList()]);
        productList.value = res[0].data;
        sceneList.value = res[1].data;
        categoryList.value = res[2].data;
      });
      return (_ctx, _cache) => {
        const _component_HomeSearch = resolveEasycom(vue.resolveDynamicComponent("HomeSearch"), __easycom_0$3);
        const _component_BigCard = resolveEasycom(vue.resolveDynamicComponent("BigCard"), __easycom_1$1);
        const _component_ProductSectionList = resolveEasycom(vue.resolveDynamicComponent("ProductSectionList"), __easycom_2$1);
        const _component_ProductSectionPic = resolveEasycom(vue.resolveDynamicComponent("ProductSectionPic"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home-container" }, [
          vue.createCommentVNode(" 搜索 "),
          vue.createVNode(_component_HomeSearch),
          vue.createCommentVNode(" 轮播图 "),
          vue.createElementVNode("view", { class: "swiper-warp" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              circular: "",
              "indicator-dots": true,
              autoplay: true,
              interval: 2e3,
              duration: 250,
              "indicator-color": "#e6e6eb4d",
              "indicator-active-color": "#FFF",
              "active-class": "active"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(productList.value, (it, i) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", { key: i }, [
                    vue.createElementVNode("view", { class: "swiper-item" }, [
                      vue.createElementVNode("image", {
                        mode: "aspectFill",
                        src: it.backgroundImage.url,
                        alt: i
                      }, null, 8, ["src", "alt"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" 场景图 "),
          vue.createElementVNode("view", { class: "sence-warp" }, [
            vue.createElementVNode("view", { class: "title" }, "你想在哪里使用投影仪？"),
            vue.createElementVNode("scroll-view", {
              class: "scroll-view_H",
              "scroll-x": ""
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(sceneList.value, (sence, i) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: sence.sceneId,
                    class: "scroll-view-item_H"
                  }, [
                    vue.createElementVNode("image", {
                      src: sence.image.url,
                      alt: i
                    }, null, 8, ["src", "alt"]),
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(sence.text),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" 产品详情 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(categoryList.value, (category, i) => {
              return vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: i },
                [
                  category.style === 1 ? (vue.openBlock(), vue.createBlock(_component_BigCard, {
                    key: 0,
                    category
                  }, null, 8, ["category"])) : vue.createCommentVNode("v-if", true),
                  category.style === 2 ? (vue.openBlock(), vue.createBlock(_component_ProductSectionList, {
                    key: 1,
                    category
                  }, null, 8, ["category"])) : vue.createCommentVNode("v-if", true),
                  category.style === 3 ? (vue.openBlock(), vue.createBlock(_component_ProductSectionPic, {
                    key: 2,
                    category
                  }, null, 8, ["category"])) : vue.createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/uni-app/gimi/pages/index/index.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.32
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    store.$reset = function $reset() {
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    };
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    };
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const useAuthStore = defineStore("auth", () => {
    const userInfo = vue.ref({});
    async function getUser() {
      formatAppLog("log", "at stores/useAuthStore.js:21", "getUser");
      const res = await getUserInfo();
      userInfo.value = res.data;
    }
    formatAppLog("log", "at stores/useAuthStore.js:27", "auth-userInfo: ", userInfo);
    return {
      userInfo,
      getUser
    };
  });
  const _sfc_main$b = {
    __name: "login",
    setup(__props) {
      const store = useAuthStore();
      const phoneInfo = vue.reactive({
        account: "",
        // 表单双向绑定
        mobileArea: "+86",
        type: 2
      });
      const loginInfo = vue.reactive({
        callback: callbackURL,
        code: "",
        // 表单双向绑定
        mobile: vue.computed(() => phoneInfo.account),
        mobileArea: "+86",
        sourceCode: 601
      });
      const waitCode = vue.ref(60);
      const canSend = vue.ref(true);
      const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
      const checkPhone = vue.computed(() => reg.test(phoneInfo.account));
      const getCode = async () => {
        const getCodeRes = await postPhoneCode(phoneInfo);
        formatAppLog("log", "at pages/login/login.vue:67", "短信验证码 getCodeRes: ", getCodeRes);
        if (getCodeRes.code === 200) {
          uni.showToast({
            title: "验证码发送到您的手机",
            icon: "none"
          });
        }
        waitCode.value = 60;
        canSend.value = false;
        const timeID = setInterval(() => {
          if (waitCode.value <= 0) {
            clearTimeout(timeID);
            canSend.value = true;
          } else {
            waitCode.value--;
          }
        }, 1e3);
      };
      const login = async () => {
        const loginRes = await postLogin(loginInfo);
        formatAppLog("log", "at pages/login/login.vue:89", "登录 loginRes：", loginRes);
        if (loginRes.code === 200) {
          uni.setStorageSync("token", loginRes.data.passToken);
          store.getUser();
          uni.switchTab({
            url: "/pages/user/user"
          });
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login-container" }, [
          vue.createElementVNode("view", { class: "title" }, "验证码登录"),
          vue.createElementVNode("view", { class: "phone" }, [
            vue.createElementVNode("text", null, "+86"),
            vue.createElementVNode("text", { class: "split" }, "|"),
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "number",
                maxlength: "11",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => phoneInfo.account = $event),
                placeholder: "请输入手机号"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, phoneInfo.account]
            ])
          ]),
          vue.createElementVNode("view", { class: "code" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "number",
                maxlength: "4",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => loginInfo.code = $event),
                placeholder: "请输入验证码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, loginInfo.code]
            ]),
            vue.createElementVNode("button", {
              class: vue.normalizeClass({ sendColor: vue.unref(checkPhone) && canSend.value }),
              size: "mini",
              onClick: getCode,
              disabled: !vue.unref(checkPhone) || !canSend.value
            }, "获取验证码" + vue.toDisplayString(canSend.value ? "" : ` ( ${waitCode.value} ) `), 11, ["disabled"])
          ]),
          vue.createElementVNode(
            "button",
            {
              class: vue.normalizeClass(["login-btn", { loginTo: vue.unref(checkPhone) && loginInfo.code }]),
              onClick: login
            },
            "登录",
            2
            /* CLASS */
          )
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-e4e4508d"], ["__file", "E:/uni-app/gimi/pages/login/login.vue"]]);
  const _sfc_main$a = {
    __name: "cart",
    setup(__props) {
      const goods_lists = vue.ref({});
      onShow(async () => {
        const resCart = await getCart();
        goods_lists.value = resCart.data.goods_lists;
        formatAppLog("log", "at pages/cart/cart.vue:38", "goods_lists.value: ", goods_lists.value);
      });
      return (_ctx, _cache) => {
        var _a, _b;
        return vue.openBlock(), vue.createElementBlock("view", null, [
          Object.keys(goods_lists.value).length && ((_b = (_a = goods_lists.value) == null ? void 0 : _a.shoppingCartItemList) == null ? void 0 : _b.length) ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(goods_lists.value.shoppingCartItemList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.shoppingcartId
                }, [
                  vue.createElementVNode("image", {
                    src: item.skuImage,
                    style: { "width": "200px", "height": "200px" }
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    null,
                    vue.toDisplayString(item.productName),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createElementVNode(
              "view",
              null,
              "总价：" + vue.toDisplayString(goods_lists.value.totalPrice / 100),
              1
              /* TEXT */
            )
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("navigator", { url: "../order/order" }, "去结算")
        ]);
      };
    }
  };
  const PagesCartCart = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "E:/uni-app/gimi/pages/cart/cart.vue"]]);
  const _sfc_main$9 = {
    name: "UniGridItem",
    inject: ["grid"],
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        column: 0,
        showBorder: true,
        square: true,
        highlight: true,
        left: 0,
        top: 0,
        openNum: 2,
        width: 0,
        borderColor: "#e5e5e5"
      };
    },
    created() {
      this.column = this.grid.column;
      this.showBorder = this.grid.showBorder;
      this.square = this.grid.square;
      this.highlight = this.grid.highlight;
      this.top = this.hor === 0 ? this.grid.hor : this.hor;
      this.left = this.ver === 0 ? this.grid.ver : this.ver;
      this.borderColor = this.grid.borderColor;
      this.grid.children.push(this);
      this.width = this.grid.width;
    },
    beforeDestroy() {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    },
    methods: {
      _onClick() {
        this.grid.change({
          detail: {
            index: this.index
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.width ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        style: vue.normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
        class: "uni-grid-item"
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
            style: vue.normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__scopeId", "data-v-7a807eb7"], ["__file", "E:/uni-app/gimi/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue"]]);
  const _sfc_main$8 = {
    name: "UniGrid",
    emits: ["change"],
    props: {
      // 每列显示个数
      column: {
        type: Number,
        default: 3
      },
      // 是否显示边框
      showBorder: {
        type: Boolean,
        default: true
      },
      // 边框颜色
      borderColor: {
        type: String,
        default: "#D2D2D2"
      },
      // 是否正方形显示,默认为 true
      square: {
        type: Boolean,
        default: true
      },
      highlight: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        grid: this
      };
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        elId,
        width: 0
      };
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
    },
    methods: {
      init() {
        setTimeout(() => {
          this._getSize((width) => {
            this.children.forEach((item, index) => {
              item.width = width;
            });
          });
        }, 50);
      },
      change(e) {
        this.$emit("change", e);
      },
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
          this.width = parseInt((ret[0].width - 1) / this.column) + "px";
          fn(this.width);
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-grid-wrap" }, [
      vue.createElementVNode("view", {
        id: $data.elId,
        ref: "uni-grid",
        class: vue.normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
        style: vue.normalizeStyle({ "border-left-color": $props.borderColor })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 14, ["id"])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-07acefee"], ["__file", "E:/uni-app/gimi/uni_modules/uni-grid/components/uni-grid/uni-grid.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$7 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/uni-app/gimi/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-goods-nav.options.shop": "shop",
    "uni-goods-nav.options.cart": "cart",
    "uni-goods-nav.buttonGroup.addToCart": "add to cart",
    "uni-goods-nav.buttonGroup.buyNow": "buy now"
  };
  const zhHans = {
    "uni-goods-nav.options.shop": "店铺",
    "uni-goods-nav.options.cart": "购物车",
    "uni-goods-nav.buttonGroup.addToCart": "加入购物车",
    "uni-goods-nav.buttonGroup.buyNow": "立即购买"
  };
  const zhHant = {
    "uni-goods-nav.options.shop": "店鋪",
    "uni-goods-nav.options.cart": "購物車",
    "uni-goods-nav.buttonGroup.addToCart": "加入購物車",
    "uni-goods-nav.buttonGroup.buyNow": "立即購買"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const _sfc_main$6 = {
    name: "UniGoodsNav",
    emits: ["click", "buttonClick"],
    props: {
      options: {
        type: Array,
        default() {
          return [{
            icon: "shop",
            text: t("uni-goods-nav.options.shop")
          }, {
            icon: "cart",
            text: t("uni-goods-nav.options.cart")
          }];
        }
      },
      buttonGroup: {
        type: Array,
        default() {
          return [
            {
              text: t("uni-goods-nav.buttonGroup.addToCart"),
              backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
              color: "#fff"
            },
            {
              text: t("uni-goods-nav.buttonGroup.buyNow"),
              backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
              color: "#fff"
            }
          ];
        }
      },
      fill: {
        type: Boolean,
        default: false
      },
      stat: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(index, item) {
        this.$emit("click", {
          index,
          content: item
        });
      },
      buttonClick(index, item) {
        if (uni.report && this.stat) {
          uni.report(item.text, item.text);
        }
        this.$emit("buttonClick", {
          index,
          content: item
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-goods-nav" }, [
      vue.createCommentVNode(" 底部占位 "),
      vue.createElementVNode("view", { class: "uni-tab__seat" }),
      vue.createElementVNode("view", { class: "uni-tab__cart-box flex" }, [
        vue.createElementVNode("view", { class: "flex uni-tab__cart-sub-left" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.options, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "flex uni-tab__cart-button-left uni-tab__shop-cart",
                onClick: ($event) => $options.onClick(index, item)
              }, [
                vue.createElementVNode("view", { class: "uni-tab__icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    size: "20",
                    color: "#646566"
                  }, null, 8, ["type"]),
                  vue.createCommentVNode(' <image class="image" :src="item.icon" mode="widthFix" /> ')
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "uni-tab__text" },
                  vue.toDisplayString(item.text),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "flex uni-tab__dot-box" }, [
                  item.info ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: vue.normalizeClass([{ "uni-tab__dots": item.info > 9 }, "uni-tab__dot"]),
                      style: vue.normalizeStyle({
                        "backgroundColor": item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
                        color: item.infoColor ? item.infoColor : "#fff"
                      })
                    },
                    vue.toDisplayString(item.info),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([{ "uni-tab__right": $props.fill }, "flex uni-tab__cart-sub-right"])
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.buttonGroup, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  style: vue.normalizeStyle({ background: item.backgroundColor, color: item.color }),
                  class: "flex uni-tab__cart-button-right",
                  onClick: ($event) => $options.buttonClick(index, item)
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      style: vue.normalizeStyle({ color: item.color }),
                      class: "uni-tab__cart-button-right-text"
                    },
                    vue.toDisplayString(item.text),
                    5
                    /* TEXT, STYLE */
                  )
                ], 12, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__scopeId", "data-v-8226c5e1"], ["__file", "E:/uni-app/gimi/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"]]);
  const _sfc_main$5 = {
    __name: "category",
    setup(__props) {
      const options = vue.ref([{
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
      const buttonGroup = vue.ref([
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
        uni.switchTab({
          url: "/pages/cart/cart"
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_grid_item = resolveEasycom(vue.resolveDynamicComponent("uni-grid-item"), __easycom_0$1);
        const _component_uni_grid = resolveEasycom(vue.resolveDynamicComponent("uni-grid"), __easycom_1);
        const _component_uni_goods_nav = resolveEasycom(vue.resolveDynamicComponent("uni-goods-nav"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createTextVNode(" 分类 "),
          vue.createVNode(_component_uni_grid, {
            column: 4,
            showBorder: true,
            square: true
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_grid_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "text" }, "文本")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_grid_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "text" }, "文本")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_grid_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "text" }, "文本4")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_grid_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "text" }, "文本")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_grid_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "text" }, "文本")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_grid_item, null, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("text", { class: "text" }, "文本")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("navigator", {
            url: "/pages/cart/cart",
            "open-type": "switchTab"
          }, "购物车"),
          vue.createElementVNode("navigator", {
            url: "/pages/index/index",
            "open-type": "switchTab"
          }, "主页"),
          vue.createElementVNode("button", {
            size: "mini",
            onClick: goCart
          }, "购物车"),
          vue.createVNode(_component_uni_goods_nav, {
            fill: true,
            options: options.value,
            buttonGroup: buttonGroup.value
          }, null, 8, ["options", "buttonGroup"])
        ]);
      };
    }
  };
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "E:/uni-app/gimi/pages/category/category.vue"]]);
  const _imports_0 = "/static/missing-face.png";
  const _sfc_main$4 = {
    __name: "user",
    setup(__props) {
      const store = useAuthStore();
      const {
        userInfo
      } = storeToRefs(store);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "user-container" }, [
          vue.unref(userInfo) && vue.unref(userInfo).nickName ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "user-info-box"
          }, [
            vue.createElementVNode(
              "view",
              { class: "user-name" },
              vue.toDisplayString(vue.unref(userInfo).nickName),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "login-img" }, [
              vue.createElementVNode("image", {
                src: vue.unref(userInfo).headImgUrl,
                style: { "width": "100rpx", "height": "100rpx" }
              }, null, 8, ["src"])
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            vue.createElementVNode("navigator", { url: "/pages/login/login" }, [
              vue.createElementVNode("view", { class: "user-info-box" }, [
                vue.createElementVNode("view", { class: "login-img" }, [
                  vue.createElementVNode("image", {
                    src: _imports_0,
                    mode: "aspectFit"
                  })
                ]),
                vue.createElementVNode("text", { class: "login-text" }, "登录/注册")
              ])
            ])
          ]))
        ]);
      };
    }
  };
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0f7520f0"], ["__file", "E:/uni-app/gimi/pages/user/user.vue"]]);
  const _sfc_main$3 = {
    __name: "detail",
    setup(__props) {
      const baseInfo = vue.ref({});
      onLoad(async (option) => {
        formatAppLog("log", "at pages/detail/detail.vue:36", "option: ", option);
        formatAppLog("log", "at pages/detail/detail.vue:37", "baseInfo.value: ", baseInfo.value);
        const res = await getBaseInfo({
          skuId: option.skuId
        });
        baseInfo.value = res.data;
        formatAppLog("log", "at pages/detail/detail.vue:42", "baseInfo.value2: ", baseInfo.value);
      });
      async function addToCart() {
        const resAddCart = await addCart({
          "buyNumber": 1,
          // 暂时写死数量1
          // 设置参数skuid
          "skuId": `${baseInfo.value.skuPicker[0].skuId}`,
          "is_tc": false,
          "tyingItems": []
        });
        if (resAddCart.data) {
          uni.showToast({
            title: "加入购物车成功"
          });
        }
      }
      return (_ctx, _cache) => {
        var _a;
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-container" }, [
          vue.createElementVNode("button", { onClick: addToCart }, "加入购物车"),
          vue.createElementVNode("navigator", {
            url: "/pages/cart/cart",
            "open-type": "switchTab"
          }, "去购物车"),
          vue.createElementVNode("view", { class: "title" }, " 产品详情 "),
          ((_a = baseInfo.value.imageList) == null ? void 0 : _a.length) ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "imageList"
          }, [
            vue.createElementVNode(
              "view",
              null,
              vue.toDisplayString(baseInfo.value.productName),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              null,
              vue.toDisplayString(baseInfo.value.price / 100),
              1
              /* TEXT */
            ),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(baseInfo.value.imageList, (item) => {
                return vue.openBlock(), vue.createElementBlock("image", {
                  key: item,
                  src: item,
                  mode: "widthFix"
                }, null, 8, ["src"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eca06f3c"], ["__file", "E:/uni-app/gimi/pages/detail/detail.vue"]]);
  const _sfc_main$2 = {
    __name: "order",
    setup(__props) {
      const flowInfo = vue.ref({});
      flowCheck().then((res) => {
        flowInfo.value = res;
      });
      return (_ctx, _cache) => {
        var _a, _b, _c;
        return vue.openBlock(), vue.createElementBlock("view", null, [
          ((_c = (_b = (_a = flowInfo.value) == null ? void 0 : _a.goods_lists) == null ? void 0 : _b.shoppingCartItemList) == null ? void 0 : _c.length) ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "去结算"),
            vue.createElementVNode("navigator", {
              url: "/pages/pay/pay",
              "open-type": "navigate"
            }, "去结算"),
            vue.createElementVNode("view", null, "确认订单"),
            vue.createElementVNode("view", null, "地址："),
            flowInfo.value.address_lists.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString(flowInfo.value.address_lists[0].consignee),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString(flowInfo.value.address_lists[0].address),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", null, "商品信息："),
            vue.createElementVNode("view", null, [
              vue.createElementVNode(
                "view",
                null,
                "总价：" + vue.toDisplayString(flowInfo.value.goods_lists.totalPrice / 100),
                1
                /* TEXT */
              ),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(flowInfo.value.goods_lists.shoppingCartItemList, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.shoppingcartId
                  }, [
                    vue.createElementVNode("image", {
                      src: item.skuImage,
                      style: { "width": "200px", "height": "200px" }
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "view",
                      null,
                      vue.toDisplayString(item.productName),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const PagesOrderOrder = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/uni-app/gimi/pages/order/order.vue"]]);
  const _sfc_main$1 = {
    __name: "pay",
    setup(__props) {
      function payweixin() {
        uni.login({
          onlyAuthorize: true,
          //只要授权
          async success(res) {
            const {
              openid
            } = await getOpenId({
              "action": "loginByWeixin",
              "params": {
                "code": res.code,
                "platform": "mp-weixin"
              }
            });
            formatAppLog("log", "at pages/pay/pay.vue:80", openid, "openid");
            const {
              orderInfo
            } = await createOrder({
              "platform": "app-plus",
              "provider": "wxpay",
              openid,
              "totalFee": 1
            });
            formatAppLog("log", "at pages/pay/pay.vue:90", "订单信息", orderInfo);
            uni.requestPayment({
              provider: "wxpay",
              ...orderInfo,
              success(res2) {
                uni.showToast({
                  title: "支付成功"
                });
                formatAppLog("log", "at pages/pay/pay.vue:99", "支付成功", res2);
              },
              fail(err) {
                uni.showToast({
                  title: "支付失败",
                  icon: "error"
                });
                formatAppLog("log", "at pages/pay/pay.vue:106", "支付失败", err);
              }
            });
          },
          fail(err) {
            formatAppLog("log", "at pages/pay/pay.vue:111", "fail", err);
          }
          // complete(res) {
          // 	// __f__('log','at pages/pay/pay.vue:114',res,"complete")
          // }
        });
      }
      async function payali() {
        const {
          orderInfo
        } = await createOrder({
          "platform": "app-plus",
          //平台
          "provider": "alipay",
          //提供商
          "totalFee": 1
          //费用（分）
        });
        uni.requestPayment({
          provider: "alipay",
          //支付商
          orderInfo,
          //支付参数（阿里）
          success(res) {
            uni.showToast({
              title: "支付成功"
            });
            formatAppLog("log", "at pages/pay/pay.vue:137", "成功信息", res);
          },
          fail(err) {
            uni.showToast({
              title: "支付失败",
              icon: "error"
            });
            formatAppLog("log", "at pages/pay/pay.vue:144", "err", err);
          }
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", null, "APP 或微信小程序支付"),
          vue.createElementVNode("button", {
            size: "mini",
            type: "primary",
            onClick: payali
          }, "支付宝支付"),
          vue.createElementVNode("button", {
            size: "mini",
            type: "warn",
            onClick: payweixin
          }, "微信支付")
        ]);
      };
    }
  };
  const PagesPayPay = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "E:/uni-app/gimi/pages/pay/pay.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/cart/cart", PagesCartCart);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/order/order", PagesOrderOrder);
  __definePage("pages/pay/pay", PagesPayPay);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:8", "App Launch");
      const store = useAuthStore();
      store.getUser();
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:15", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:18", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/uni-app/gimi/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    const pinia = createPinia();
    app.use(pinia);
    return {
      app,
      pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
