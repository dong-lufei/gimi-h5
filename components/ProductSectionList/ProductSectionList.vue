<template>
	<view class="productSectionList-container">
		<!-- 标题 -->
		<ProductHeader :categoryName="props.category.categoryName"></ProductHeader>

		<!-- 图片列表 -->
		<view class="smallCardList">
			<view class="product" v-for="smallCard in props.category.smallCardList" :key="smallCard.categoryId">
				<ProductItem :smallCard="smallCard"></ProductItem>
			</view>
		</view>
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
	.productSectionList-container {
		padding-top: 104rpx;

		.smallCardList {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 340rpx;
				margin-top: 40rpx;
			}
		}
	}
</style>