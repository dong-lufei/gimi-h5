<template>
	<view class="productHeader-container">
		<text>{{props.categoryName.text}}</text>
		<navigator url="/pages/category/category?" open-type="switchTab">更多 ></navigator>
	</view>
</template>

<script setup>
	const props = defineProps({
		categoryName: {
			type: Object,
			default: () => ({})
		}
	})
</script>

<style lang="scss" scoped>
	.productHeader-container {
		display: flex;
		justify-content: space-between;

		text {
			font-size: 40rpx;
			color: #000;
		}

		navigator {
			font-weight: 500;
			font-size: 13px;
			line-height: 20px;
			color: #bcbcc2;
		}
	}
</style>