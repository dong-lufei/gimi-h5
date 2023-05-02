import {
	defineStore
} from "pinia"

import {
	ref,
} from "vue"

import {
	getUserInfo
} from '@/api/index.js'


// 定义了一个仓库
export const useAuthStore = defineStore('auth', () => {
	// 用户信息
	const userInfo = ref({});

	// 获取用户信息
	async function getUser() {
		console.log("getUser")
		const res = await getUserInfo()
		// console.log("useAuthStore-res: ", res);
		userInfo.value = res.data;
		// console.log("useAuthStore-userInfo: ", userInfo.value);
	};
	console.log("auth-userInfo: ", userInfo);
	// 返回用户信息与获取用户方法

	return {
		userInfo,
		getUser
	};
})