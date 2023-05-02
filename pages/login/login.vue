<template>
	<view class="login-container">
		<view class="title">验证码登录</view>
		<view class="phone">
			<text>+86</text><text class="split">|</text>
			<input type="number" maxlength="11" v-model="phoneInfo.account" placeholder="请输入手机号" />
		</view>
		<view class="code">
			<input type="number" maxlength="4" v-model="loginInfo.code" placeholder="请输入验证码" />
			<button :class="{sendColor:checkPhone&&canSend}" size="mini" @click="getCode"
				:disabled="!checkPhone||!canSend">获取验证码{{canSend? '':` ( ${waitCode} ) `}}</button>
		</view>
		<button class="login-btn" :class="{loginTo:checkPhone&&loginInfo.code}" @click="login">登录</button>
	</view>
</template>

<script setup>
	import {
		callbackURL
	} from '@/config/index.js';

	// 导入仓库;
	import {
		useAuthStore
	} from '@/stores/useAuthStore.js';

	import {
		postPhoneCode,
		getUserInfo,
		postLogin
	} from '@/api/index.js';

	import {
		ref,
		reactive,
		computed
	} from 'vue';


	// 使用仓库
	const store = useAuthStore();

	// 发送验证码需要的信息
	const phoneInfo = reactive({
		account: '', // 表单双向绑定
		mobileArea: '+86',
		type: 2
	});
	// 登录需要的信息
	const loginInfo = reactive({
		callback: callbackURL,
		code: '', // 表单双向绑定
		mobile: computed(() => phoneInfo.account),
		mobileArea: '+86',
		sourceCode: 601
	});

	const waitCode = ref(60); //短信验证码间隔倒计时
	const canSend = ref(true); // 是否可以点击获取验证码
	const reg =
		/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
	const checkPhone = computed(() => reg.test(phoneInfo.account)); // 是否输入合法的手机号

	// 短信验证码
	const getCode = async () => {
		const getCodeRes = await postPhoneCode(phoneInfo);
		console.log("短信验证码 getCodeRes: ", getCodeRes);
		if (getCodeRes.code === 200) {
			uni.showToast({
				title: "验证码发送到您的手机",
				icon: 'none'
			})
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
		}, 1000)
	};

	// 执行登录
	const login = async () => {
		const loginRes = await postLogin(loginInfo);
		console.log("登录 loginRes：",loginRes);
		
		if (loginRes.code === 200) {
			// 存储 token 到本地
			uni.setStorageSync("token", loginRes.data.passToken);
			// 仓库去获取用户信息
			store.getUser();
			// 跳转到用户页面
			uni.switchTab({
				url: "/pages/user/user"
			})
		}
	};
</script>

<style lang="scss" scoped>
	.login-container {
		margin: 96rpx 60rpx;

		.title {
			font-size: 48rpx;
			line-height: 66rpx;
			color: #1c1c20;
			letter-spacing: -.28rpx;
			margin-bottom: 16rpx;
		}

		.phone,
		.code {
			display: inline-flex;
			margin-bottom: 32rpx;
		}

		.phone {
			.split {
				margin: 0rpx 22rpx 0rpx 32rpx;
				color: #b6b6ba,
			}

			.input-placeholder {
				color: #b6b6ba,
			}

		}

		.code {
			width: 100%;
			justify-content: space-between;

			.input-placeholder {
				color: #b6b6ba;
			}

			button {
				color: #b6b6ba;
				margin-right: 0;
				line-height: 2.55555556;

				&.sendColor {
					color: #3d61f4;
				}
			}
		}

		.login-btn {
			height: 112rpx;
			border-radius: 24rpx;
			color: #fff;
			background-color: #c4d6ff;
			line-height: 112rpx;

			&.loginTo {
				background-color: rgb(61, 97, 244);
			}

			// 去掉小程序自带的按钮样式
			&::after {
				content: "";
				border: none;
			}
		}
	}
</style>