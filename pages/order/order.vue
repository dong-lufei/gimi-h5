<template>
	<view>
		<view v-if="flowInfo?.goods_lists?.shoppingCartItemList?.length">
			<button type="primary" size="mini">去结算</button>
			<navigator url="/pages/pay/pay" open-type="navigate">去结算</navigator>
			<view>确认订单</view>
			<view>地址：</view>
			<view v-if="flowInfo.address_lists.length">
				<view>{{flowInfo.address_lists[0].consignee}}</view>
				<view>{{flowInfo.address_lists[0].address}}</view>
			</view>
			<view>商品信息：</view>
			<view>
				<view>总价：{{flowInfo.goods_lists.totalPrice/100}}</view>
				<view v-for="item in flowInfo.goods_lists.shoppingCartItemList" :key="item.shoppingcartId">
					<image :src="item.skuImage" style="width:200px;height:200px;"></image>
					<view>{{item.productName}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// 导入ref
	import {
		ref
	} from 'vue'

	// 导入确认流程接口
	import {
		flowCheck
	} from '@/api/index.js'

	const flowInfo = ref({})

	// 获取流程信息
	flowCheck()
		.then(res => {
			// flowInfo.value = res.data;
			flowInfo.value = res;
			// console.log("flowInfo: ", flowInfo.value);
		})
</script>

<style>

</style>