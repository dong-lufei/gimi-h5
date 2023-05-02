"use strict";
const common_vendor = require("../common/vendor.js");
const api_index = require("../api/index.js");
const useAuthStore = common_vendor.defineStore("auth", () => {
  const userInfo = common_vendor.ref({});
  async function getUser() {
    console.log("getUser");
    const res = await api_index.getUserInfo();
    userInfo.value = res.data;
  }
  console.log("auth-userInfo: ", userInfo);
  return {
    userInfo,
    getUser
  };
});
exports.useAuthStore = useAuthStore;
