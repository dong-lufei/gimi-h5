<template>
	<view v-if="props.category.smallCardList" class="bigCard-container">
		<!-- 标题 -->
		<ProductHeader :categoryName="props.category.categoryName"></ProductHeader>
		<!-- 卡片 -->
		<ProductCard :largeCard="props.category.largeCard"></ProductCard>
		<!-- 图片列表 -->
		<view class="smallCardList">
			<view class="product" v-for="smallCard in props.category.smallCardList" :key="smallCard.skuId">
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
	.bigCard-container {
		padding-top: 104rpx;

		.smallCardList {
			display: flex;
			justify-content: space-between;

			.product {
				width: 345rpx;
			}
		}
	}
</style>