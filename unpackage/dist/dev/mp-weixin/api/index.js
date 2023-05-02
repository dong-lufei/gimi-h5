"use strict";
const utils_request = require("../utils/request.js");
const postPhoneCode = (data) => utils_request.request.post("/v1/identity/sendCode", data);
const postLogin = (data) => utils_request.request.post("/v1/sso/smsLogin", data);
const getUserInfo = () => utils_request.request.get("/open/oauth2/login/checkLogin");
const getProductList = () => utils_request.request.get("/mall/home/new_product", {
  loading: {
    title: "加载中",
    icon: "loading"
  }
});
const getSceneList = () => utils_request.request.get("/mall/newcomer/scene_list");
const getCategoryList = () => utils_request.request.get("/mall/home/category_list");
function getBaseInfo(params) {
  return utils_request.request.get("/mall/sku/detail/basic_info", {
    params
  });
}
function getCart() {
  return utils_request.request.post("/api/cart");
}
function addCart(data) {
  return utils_request.request.post("/api/addcart", data);
}
function flowCheck() {
  return utils_request.request.get("/flow-check");
}
function getMPid(params) {
  return utils_request.request.get("/study_miniprog_openid", {
    params
  });
}
function createMPorder(params) {
  return utils_request.request.get("/study_miniprog_pay", {
    params
  });
}
exports.addCart = addCart;
exports.createMPorder = createMPorder;
exports.flowCheck = flowCheck;
exports.getBaseInfo = getBaseInfo;
exports.getCart = getCart;
exports.getCategoryList = getCategoryList;
exports.getMPid = getMPid;
exports.getProductList = getProductList;
exports.getSceneList = getSceneList;
exports.getUserInfo = getUserInfo;
exports.postLogin = postLogin;
exports.postPhoneCode = postPhoneCode;
