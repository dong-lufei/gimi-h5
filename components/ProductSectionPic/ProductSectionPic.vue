<template>
	<view class="productSectionPic-container">
		<image :src="props.category.image" mode="widthFix"></image>
	</view>
</template>

<script setup>
	const props = defineProps({
		category: {
			type: Object,
			default: () => ({})
		}
	})
</script>

<style lang="scss" scoped>
	.productSectionPic-container {
		width: 100%;
		padding-top: 104rpx;

		image {
			width: 100%;
			height: 428rpx; 
		}
	}
</style>