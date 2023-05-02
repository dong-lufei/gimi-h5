<template>
	<view class="detail-container">
		<button @click="addToCart">加入购物车</button>
		<navigator url="/pages/cart/cart" open-type="switchTab">去购物车</navigator>
		<view class="title">
			产品详情
		</view>
		<view v-if="baseInfo.imageList?.length" class="imageList">
			<view>{{baseInfo.productName}}</view>
			<view>{{baseInfo.price/100}}</view>
			<image v-for="item in baseInfo.imageList" :key="item" :src="item" mode="widthFix"></image>
		</view>
	</view>
</template>

<script setup>
	// 在 setup api中使用生命周期需要导入
	import {
		onLoad
	} from '@dcloudio/uni-app'

	// 导入ref
	import {
		ref
	} from 'vue'

	// 导入获取当前页面的接口
	import {
		getBaseInfo,
		addCart
	} from '@/api/index.js'

	const baseInfo = ref({})

	onLoad(async (option) => {
		console.log("option: ", option);
		console.log("baseInfo.value: ", baseInfo.value);
		const res = await getBaseInfo({
			skuId: option.skuId
		})
		baseInfo.value = res.data;
		console.log("baseInfo.value2: ", baseInfo.value);

	})
	// 添加到购物车
	async function addToCart() {
		// 执行接口
		const resAddCart = await addCart({
			"buyNumber": 1, // 暂时写死数量1
			// 设置参数skuid
			"skuId": `${baseInfo.value.skuPicker[0].skuId}`,
			"is_tc": false,
			"tyingItems": []
		})
		if (resAddCart.data) {
			// 成功弹出提示
			uni.showToast({
				title: "加入购物车成功"
			})
		}
	}
</script>

<style lang="scss" scoped>
	.detail-container {
		padding: 20rpx;

		.title {
			text-align: center;
		}

		.imageList image {
			width: 100%;
		}
	}
</style>