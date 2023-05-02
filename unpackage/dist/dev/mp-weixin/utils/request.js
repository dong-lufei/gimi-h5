"use strict";
const common_vendor = require("../common/vendor.js");
const config_index = require("../config/index.js");
const request = function(option) {
  let url = option.url;
  const reg = /^https?/i;
  if (!reg.test(url)) {
    if (option.url.startsWith("/v1/") || option.url.startsWith("/open/")) {
      url = config_index.tokenBaseURL + url;
    } else if (option.url.startsWith("/api") || option.url.startsWith("/flow")) {
      url = config_index.cartURL + url;
    } else if (option.url.startsWith("/study")) {
      url = config_index.qikueduURL + url;
    } else if (option.url.startsWith("/http/")) {
      url = config_index.bspappURL + url;
    } else {
      url = config_index.dataBaseURL + url;
    }
  }
  const header = option.header || {};
  header.token = common_vendor.index.getStorageSync("token");
  header.source = 1;
  header.channel = "h5";
  const loading = option.loading;
  if (loading) {
    common_vendor.index.showLoading(loading);
  }
  const reqConfig = {
    url,
    //请求url
    method: option.method || "GET",
    //请求方法
    header,
    //请求头
    timeout: config_index.timeout,
    data: option.data || option.params
    //请求数据
  };
  console.log("reqConfig: ", reqConfig);
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...reqConfig,
      success(res) {
        console.log("request-res: ", res);
        if (res.statusCode === 200) {
          if (res.data.code === 1002 && res.data.msg === "购物车为空！") {
            resolve(mockCartData);
          }
          if (res.data.code === 100102 && res.data.msg === "登录已失效，请重新登录") {
            console.log("登录已失效: ");
            resolve(mockOrderData);
          } else if (![
            200,
            201,
            0
          ].includes(res.data.code)) {
            common_vendor.index.showToast({
              title: res.data.message || "请求错误",
              icon: "none"
            });
          } else {
            resolve(res.data);
          }
        }
      },
      fail(err) {
        common_vendor.index.showToast({
          title: "请求失败",
          icon: "error"
        });
        console.error("request-fail：", err);
        reject(err);
      },
      complete() {
        if (loading) {
          common_vendor.index.hideLoading();
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
  console.log("post-url: ", url);
  console.log("post-data: ", data);
  console.log("post-config: ", config);
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
exports.request = request;
