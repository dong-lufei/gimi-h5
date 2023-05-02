<template>
	<view class="home-search-container">
		<view class="input-warp">
			<input placeholder="想找点什么?" />
			<image src="@/static/icon_search.png"></image>
		</view>
		<navigator url="/pages/category/category" open-type="switchTab">
			<image src="@/static/icon_application.png"></image>
		</navigator>
		<navigator url="/pages/cart/cart" open-type="switchTab">
			<image src="@/static/icon_purchase.png"></image>
		</navigator>
	</view>
</template>

<script>

</script>

<style lang="scss" scoped>
	.home-search-container {
		display: flex;
		align-items: center;
		height: 120rpx;

		.input-warp {
			position: relative;
			padding: 18rpx 60rpx;
			margin-right: 32rpx;
			border: 4rpx solid #efefef;
			border-radius: 160rpx;
			flex: 1;


			input {
				border-radius: 64rpx;
			}

			.input-placeholder {
				font-size: 14px;
				line-height: 18px;
				color: rgba(0, 0, 0, .4);
			}

			image {
				position: absolute;
				left: 14rpx;
				top: 14rpx;
				width: 48rpx;
				height: 48rpx;
				margin-right: 10rpx;
			}
		}


		navigator {
			display: inline-block;
			text-align: center;
			width: 80rpx;
			height: 100%;

			image {
				width: 48rpx;
				height: 48rpx;
			}
		}


	}
</style>