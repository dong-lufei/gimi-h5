<template>
	<view class="productCard-container">
		<image :src="largeCard.backgroundImage.url" alt="卡片图"></image>
		<view class="info">
			<view class="priceTitle">
				<view class="title">
					{{largeCard.productName}}
				</view>
				<view class="price">
					￥{{largeCard.price.text}}
				</view>
			</view>
			<view class="btn">
				{{largeCard.buttonText.text}}
			</view>
		</view>
	</view>
</template>

<script setup>
	const {
		largeCard
	} = defineProps({
		largeCard: {
			type: Object,
			default: () => ({})
		}
	})
</script>

<style lang="scss" scoped>
	.productCard-container {
		position: relative;

		image {
			width: 100%;
			height: 712rpx;
			margin-top: 40rpx;
			border-radius: 20rpx;
		}

		.info {
			position: absolute;
			bottom: 28rpx;
			width: 100%;
			padding: 0 32rpx;
			box-sizing: border-box;

			.priceTitle {
				color: #fff;
				font-style: normal;

				.title {
					margin-bottom: 6rpx;
					line-height: 40rpx;
					font-size: 36rpx;
					font-weight: 500;
					letter-spacing: -1rpx;

				}

				.price {
					font-size: 26rpx;
					line-height: 40rpx;
					letter-spacing: -1rpx;
				}
			}

			.btn {
				position: absolute;
				bottom: 16rpx;
				right: 16rpx;
				padding: 14rpx 30rpx;
				font-size: 26rpx;
				background-color: #fff;
				border-radius: 28rpx;
				line-height: 1;
			}
		}
	}
</style>