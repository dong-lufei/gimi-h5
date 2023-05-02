"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_useAuthStore = require("./stores/useAuthStore.js");
require("./api/index.js");
require("./utils/request.js");
require("./config/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/cart/cart.js";
  "./pages/category/category.js";
  "./pages/user/user.js";
  "./pages/detail/detail.js";
  "./pages/order/order.js";
  "./pages/pay/pay.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    const store = stores_useAuthStore.useAuthStore();
    store.getUser();
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uni-app/gimi/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const pinia = common_vendor.createPinia();
  app.use(pinia);
  return {
    app,
    pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
