<template>
  <view>
    <view v-if="Object.keys(goods_lists).length && goods_lists?.shoppingCartItemList?.length">
      <view v-for="item in goods_lists.shoppingCartItemList" :key="item.shoppingcartId">
        <image :src="item.skuImage" style="width:200px;height:200px;"></image>
        <view>{{ item.productName }}</view>
      </view>
      <view>总价：{{ goods_lists.totalPrice / 100 }}</view>
    </view>
    <navigator url="../order/order">去结算</navigator>
  </view>
</template>

<script setup>
import {
  onShow
} from '@dcloudio/uni-app'

import {
  ref
} from 'vue'

import {
  getCart,
} from '@/api/index.js'

// 定义购物车数据
const goods_lists = ref({});

onShow(async () => {
  const resCart = await getCart()
  // 更新购物车数据
  goods_lists.value = resCart.data.goods_lists;
  console.log("goods_lists.value: ", goods_lists.value);
})
</script>