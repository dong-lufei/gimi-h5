<template>
	<navigator :url="`/pages/detail/detail?skuId=${smallCard.skuId}`" class="productItem-container">
		<view class="img">
			<image :src="smallCard.productImage" alt="列表图"></image>
		</view>
		<view class="info">
			<view class="priceTitle">
				<view class="title">
					{{smallCard.productName.text}}
				</view>
				<view class="price">
					￥{{smallCard.price.text}}
				</view>
			</view>

		</view>
	</navigator>
</template>

<script setup>
	const {
		smallCard
	} = defineProps({
		smallCard: {
			type: Object,
			default: () => ({})
		}
	})
</script>

<style lang="scss" scoped>
	.productItem-container {
		width: 350rpx;
		margin-right: 16rpx;

		.img {
			background-color: #f7f7fa;
			margin-right: 16rpx;
			margin-bottom: 30rpx;
			border-radius: 20rpx;

			image {
				width: 100%;
				height: 348rpx;
			}
		}

		.info {
			font-size: 14px;
			margin-right: 16rpx;

			.title {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				box-sizing: border-box;
			}
		}

		// &:last-child {
		// 	.img {
		// 		margin-right: 0;
		// 	}
		// }
	}
</style>