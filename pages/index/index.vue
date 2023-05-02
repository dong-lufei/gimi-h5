<template>
  <view class="home-container">
    <!-- 搜索 -->
    <HomeSearch></HomeSearch>
    <!-- 轮播图 -->
    <view class="swiper-warp">
      <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="20000" :duration="250"
        indicator-color="#e6e6eb4d" indicator-active-color="#FFF" active-class="active">
        <swiper-item v-for="(it, i) in productList" :key="i">
          <view class="swiper-item">
            <image :src="it.backgroundImage.url" :alt="i"></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 场景图 -->
    <view class="sence-warp">
      <view class="title">你想在哪里使用投影仪？</view>
      <scroll-view class="scroll-view_H" scroll-x>
        <view v-for="(sence, i) in sceneList" :key="sence.sceneId" class="scroll-view-item_H">
          <image :src="sence.image.url" :alt="i"></image>
          <text>{{ sence.text }}</text>
        </view>
      </scroll-view>
    </view>
    <!-- 产品详情 -->
    <block v-for="(category, i) in categoryList" :key="i">
      <BigCard v-if="category.style === 1" :category="category"></BigCard>
      <ProductSectionList v-if="category.style === 2" :category="category"></ProductSectionList>
      <ProductSectionPic v-if="category.style === 3" :category="category"></ProductSectionPic>
    </block>
  </view>
</template>

<script setup>
import {
  ref,
  onMounted
} from "vue"
import {
  getProductList,
  getSceneList,
  getCategoryList,
} from "@/api/index.js"
const productList = ref([])
const sceneList = ref([])
const categoryList = ref([])

onMounted(async () => {
  const res = await Promise.all([getProductList(), getSceneList(), getCategoryList()]);
  // console.log("res: ", res);
  productList.value = (res[0].data);
  sceneList.value = (res[1].data);
  categoryList.value = (res[2].data);
})
</script>

<style lang="scss" scoped>
.home-container {
  padding: 0 32rpx;

  .swiper {
    width: 100%;
    height: 900rpx;
    margin: 0 auto 82rpx;
    box-sizing: border-box;

    .swiper-item {
      width: 100%;

      image {
        width: 100%;
        height: 900rpx;
        border-radius: 16rpx;

      }
    }


  }

  .sence-warp {

    .title {
      line-height: 48rpx;
      font-size: 40rpx;
      color: #000;
      margin-bottom: 40rpx;
    }

    .scroll-view_H {
      white-space: nowrap;
      width: 100%;

    }


    .scroll-view-item_H {
      display: inline-block;
      position: relative;
      width: 286rpx;
      height: 382rpx;
      margin-right: 20rpx;

      image {
        width: 100%;
        height: 100%;
      }

      text {
        position: absolute;
        left: 30rpx;
        bottom: 30rpx;
        color: #fff;
        font-size: 30rpx;
        font-weight: 600;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }


  }
}
</style>