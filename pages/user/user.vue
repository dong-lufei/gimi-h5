<template>
	<view class="user-container">
		<view v-if="userInfo&&userInfo.nickName" class="user-info-box">
			<view class="user-name">{{userInfo.nickName}}</view>
			<view class="login-img">
				<image :src="userInfo.headImgUrl" style="width:100rpx;height:100rpx;" />
			</view>
		</view>
		<view v-else>
			<navigator url="/pages/login/login">
				<view class="user-info-box">
					<view class="login-img">
						<image src="@/static/missing-face.png" mode="aspectFit"></image>
					</view>
					<text class="login-text">登录/注册</text>
				</view>
			</navigator>
		</view>

	</view>
</template>
<script setup>
	import {
		useAuthStore
	} from '@/stores/useAuthStore.js'
	import {
		storeToRefs
	} from "pinia"

	const store = useAuthStore();
	const {
		userInfo,
	} = storeToRefs(store)
	// console.log("userInfo: ", userInfo);

</script>

<style scoped lang="scss">
	page {
		background-color: #f7f8f9;
		font-size: 39rpx;

		.user-container {
			display: flex;
			justify-content: center;
			flex-direction: column;
			height: 374rpx;
			background-color: #fff;
			color: #303133;
			font-size: 28rpx;


			.user-info-box {
				height: 290rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				box-sizing: border-box;

				.login-img {
					image {
						width: 124rpx;
						height: 124rpx;
						border: 4rpx solid #fff;
						border-radius: 50%;
						background: hsla(0, 0%, 84.7%, .251);
					}
				}

				.user-name {
					margin-bottom: 32rpx;
				}

				.login-text {
					margin-top: 32rpx;
					font-size: 32rpx;
					font-weight: 700;
					color: #444545;
					line-height: 32rpx;
				}
			}
		}
	}
</style>