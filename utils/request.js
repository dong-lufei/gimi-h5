// 添加token，拦截错误，添加请求头
import {
	dataBaseURL,
	tokenBaseURL,
	cartURL,
	qikueduURL,
	bspappURL,
	timeout
} from '@/config/index.js'

const request = function(option) {
	// 获取用户传入的url
	let url = option.url;
	// 定义一个正则表达式，必须 http 或者 https 开头
	const reg = /^https?/i;
	// 如果不是 http 或https 开头
	if (!reg.test(url)) {

		// 以 "/v1/" 开头的路径匹配 tokenBaseURL
		if (option.url.startsWith("/v1/") || option.url.startsWith("/open/")) {
			url = tokenBaseURL + url;
		} else if (option.url.startsWith("/api") || option.url.startsWith("/flow")) {
			url = cartURL + url;
		} else if (option.url.startsWith("/study")) {
			url = qikueduURL + url;
		} else if (option.url.startsWith("/http/")) {
			url = bspappURL + url;
		} else {
			// 非以上开头的路径匹配 dataBaseURL
			url = dataBaseURL + url;
		}
	}
	// 添加自定义请求头（后端登录相关接口请求需要）：
	const header = option.header || {}
	// 添加自定义 token
	header.token = uni.getStorageSync('token');
	header.source = 1; // 后端设计的相关接口需要（获取用户信息接口）
	header.channel = "h5"; // 后端设计的相关接口需要

	// 从请求参数里，加载提示
	const loading = option.loading;
	// 如果有 loading 就显示 loading
	if (loading) {
		uni.showLoading(loading)
	}

	const reqConfig = {
		url, //请求url
		method: option.method || "GET", //请求方法
		header, //请求头
		timeout,
		data: option.data || option.params, //请求数据
	};
	console.log("reqConfig: ", reqConfig);
	// 返回一个promise
	return new Promise((resolve, reject) => {
		// 发起一个request请求
		uni.request({
			...reqConfig,
			success(res) {
				console.log("request-res: ", res);
				// http 请求成功，返回结果
				if (res.statusCode === 200) {


					if (res.data.code === 1002 && res.data.msg === "购物车为空！") {
						// 模拟购物车返回接口的数据
						resolve(mockCartData)
					}
					if (res.data.code === 100102 && res.data.msg === "登录已失效，请重新登录") {
						console.log("登录已失效: ");
						// 模拟订单流程返回接口的数据
						resolve(mockOrderData)
					} else if (![
							200,
							201,
							0
						].includes(res.data.code)) {

						uni.showToast({
							title: res.data.message || '请求错误',
							icon: 'none'
						})
					} else {
						resolve(res.data)
					}
				}
			},
			fail(err) {
				// http 请求失败，返回结果
				uni.showToast({
					title: '请求失败',
					icon: 'error'
				})
				console.error("request-fail：", err);
				reject(err)
			},
			complete() {
				// 完成 关闭loading
				if (loading) {
					uni.hideLoading()
				}
			}
		})
	})
}
// 定义get简洁方法
request.get = function(url, config) {
	return request({
		url,
		method: "GET",
		...config
	})
}
// 定义post简洁方法
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
	})
}

// 模拟购物车数据
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
				"productName": "\u6781\u7c73 A3 100\u82f1\u5bf8\u786c\u5e55\u5957\u88c5",
				"marketPrice": "2299900",
				"price": "1999900",
				"buyNumber": 1,
				"totalPrice": "1999900",
				"skuAttrList": [{
					"name": "\u578b\u53f7",
					"value": "100\u82f1\u5bf8\u786c\u5e55\u5957\u88c5"
				}],
				"isReal": true,
				"isChecked": true,
				"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20220216\/2022021610563925110.jpg",
				"gCode": null,
				"parentId": "0",
				"activityType": {
					"code": 15,
					"desc": "\u4e70\u8d60"
				},
				"activityId": 2529,
				"status": {
					"code": 0,
					"desc": "\u6b63\u5e38"
				},
				"skuInventory": null,
				"affType": {
					"code": 1,
					"desc": "\u666e\u901a"
				},
				"affShoppingCartList": [{
					"shoppingcartId": "340940",
					"skuId": "1201200599",
					"skuSn": "GMN_000049",
					"productName": "\u6781\u7c73\u4e3b\u52a8\u5feb\u95e8\u5f0f3D\u773c\u955c",
					"marketPrice": "19800",
					"price": "0",
					"buyNumber": 2,
					"totalPrice": "0",
					"skuAttrList": null,
					"isReal": true,
					"isChecked": null,
					"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20221019\/2022101911584862211.png",
					"gCode": null,
					"parentId": "340605",
					"activityType": {
						"code": 15,
						"desc": "\u4e70\u8d60"
					},
					"activityId": 2529,
					"status": {
						"code": 1,
						"desc": "\u5931\u6548"
					},
					"skuInventory": null,
					"affType": {
						"code": 2,
						"desc": "\u8d60\u54c1"
					},
					"affShoppingCartList": [],
					"additionalBuyList": null,
					"activityDetailList": [{
						"activityId": 2529,
						"activityType": {
							"code": 15,
							"desc": "\u4e70\u8d60"
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
						"desc": "\u4e70\u8d60"
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
					"productName": "\u6781\u7c73 HDMI\u9ad8\u6e05\u6570\u636e\u7ebf",
					"marketPrice": "1899",
					"price": "4900",
					"buyNumber": 1,
					"totalPrice": "4900",
					"skuAttrList": null,
					"isReal": true,
					"isChecked": null,
					"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20221019\/2022101911423543329.png",
					"gCode": null,
					"parentId": "340605",
					"activityType": {
						"code": 50,
						"desc": "\u642d\u552e"
					},
					"activityId": 2147483647,
					"status": {
						"code": 0,
						"desc": "\u6b63\u5e38"
					},
					"skuInventory": null,
					"affType": {
						"code": 7,
						"desc": "\u642d\u552e\u5546\u54c1"
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
				"productName": "\u6781\u7c73 H3S",
				"marketPrice": "569900",
				"price": "429900",
				"buyNumber": 1,
				"totalPrice": "429900",
				"skuAttrList": [{
					"name": "\u578b\u53f7",
					"value": "\u6807\u51c6\u7248"
				}],
				"isReal": true,
				"isChecked": true,
				"skuImage": "https:\/\/img02-xgimi.obs.cn-east-3.myhuaweicloud.com\/official\/admin\/20230429\/2023042913445630056.jpg",
				"gCode": null,
				"parentId": "0",
				"activityType": {
					"code": 15,
					"desc": "\u4e70\u8d60"
				},
				"activityId": 2525,
				"status": {
					"code": 0,
					"desc": "\u6b63\u5e38"
				},
				"skuInventory": null,
				"affType": {
					"code": 1,
					"desc": "\u666e\u901a"
				},
				"affShoppingCartList": [{
					"shoppingcartId": "340937",
					"skuId": "1211200780",
					"skuSn": "GMN_000553",
					"productName": "H3S\u5ef6\u4fdd\u4e00\u5e74",
					"marketPrice": "19900",
					"price": "0",
					"buyNumber": 1,
					"totalPrice": "0",
					"skuAttrList": null,
					"isReal": false,
					"isChecked": null,
					"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20210316\/2021031614512812660.png",
					"gCode": null,
					"parentId": "340601",
					"activityType": {
						"code": 15,
						"desc": "\u4e70\u8d60"
					},
					"activityId": 2525,
					"status": {
						"code": 1,
						"desc": "\u5931\u6548"
					},
					"skuInventory": null,
					"affType": {
						"code": 2,
						"desc": "\u8d60\u54c1"
					},
					"affShoppingCartList": [{
						"cookieKey": null,
						"shoppingcartId": 340938,
						"userId": 8913901,
						"skuId": 1211200780,
						"skuSn": "GMN_000553",
						"productName": "H3S\u5ef6\u4fdd\u4e00\u5e74",
						"marketPrice": 19900,
						"price": 19900,
						"buyNumber": 1,
						"skuAttr": ",\u9009\u62e9\u673a\u578b:H3S\u5ef6\u4fdd\u4e00\u5e74",
						"isReal": false,
						"isChecked": true,
						"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20210316\/2021031614512812660.png",
						"parentId": 340937,
						"gCode": null,
						"activityType": {
							"code": 15,
							"desc": "\u4e70\u8d60"
						},
						"activityId": 2516,
						"status": {
							"code": 0,
							"desc": "\u6b63\u5e38"
						},
						"skuInventory": null,
						"affType": {
							"code": 2,
							"desc": "\u8d60\u54c1"
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
						"productName": "\u6781\u7c73\u4e3b\u52a8\u5feb\u95e8\u5f0f3D\u773c\u955c",
						"marketPrice": 19800,
						"price": 17900,
						"buyNumber": 1,
						"skuAttr": "",
						"isReal": true,
						"isChecked": true,
						"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20221019\/2022101911584862211.png",
						"parentId": 340937,
						"gCode": null,
						"activityType": {
							"code": 15,
							"desc": "\u4e70\u8d60"
						},
						"activityId": 2516,
						"status": {
							"code": 0,
							"desc": "\u6b63\u5e38"
						},
						"skuInventory": null,
						"affType": {
							"code": 2,
							"desc": "\u8d60\u54c1"
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
							"desc": "\u4e70\u8d60"
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
						"desc": "\u4e70\u8d60"
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
					"productName": "\u6781\u7c73 100\u82f1\u5bf8\u9065\u63a7\u7535\u52a8\u5149\u5b50\u5e55\u5e032.0",
					"marketPrice": "99900",
					"price": "79900",
					"buyNumber": 1,
					"totalPrice": "79900",
					"skuAttrList": null,
					"isReal": true,
					"isChecked": null,
					"skuImage": "https:\/\/file02.xgimi.com\/official\/admin\/20221027\/2022102709214370821.0",
					"gCode": null,
					"parentId": "340601",
					"activityType": {
						"code": 50,
						"desc": "\u642d\u552e"
					},
					"activityId": 2147483647,
					"status": {
						"code": 0,
						"desc": "\u6b63\u5e38"
					},
					"skuInventory": 7,
					"affType": {
						"code": 7,
						"desc": "\u642d\u552e\u5546\u54c1"
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
}
// 模拟订单数据
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
	"provinceLists": [{
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
}


// 导出请求
export default request;