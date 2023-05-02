import request from "@/utils/request.js"

// 获取短信验证码
export const postPhoneCode = (data) => request.post("/v1/identity/sendCode", data)

// 登录
export const postLogin = (data) => request.post("/v1/sso/smsLogin", data)

// 获取用户信息
export const getUserInfo = () => request.get("/open/oauth2/login/checkLogin")

// 获取幻灯片产品列表
export const getProductList = () => request.get("/mall/home/new_product", {
	loading: {
		title: "加载中",
		icon: "loading"
	}
})

// 获取场景列表
export const getSceneList = () => request.get("/mall/newcomer/scene_list")

// 获取分类列表
export const getCategoryList = () => request.get("/mall/home/category_list")

// 获取产品详情
export function getBaseInfo(params) {
	return request.get("/mall/sku/detail/basic_info", {
		params
	})
}

// 获取购物车 
export function getCart() {
	return request.post("/api/cart")
}

// 加入购物车
export function addCart(data) {
	return request.post("/api/addcart", data)
}

// 获取订单价格 （需要token）
export const getOrderPrice = () => request.post("/api/orderprice")

// 订单流程确认（用户的收货地址，优惠券。。。）
export function flowCheck() {
	return request.get("/flow-check")
}

// 创建APP订单获取支付信息
export function createOrder(data) {
	return request.post("/http/pay", data)
}
// 获取微信APP openid  （微信APP支付需要）
export function getOpenId(data) {
	return request.post("/http/user-center", data)
}
// 获取小程序 openid（微信小程序支付需要）
export function getMPid(params) {
	return request.get("/study_miniprog_openid", {
		params
	})
}
// 创建小程序支付订单
export function createMPorder(params) {
	return request.get("/study_miniprog_pay", {
		params
	})
}