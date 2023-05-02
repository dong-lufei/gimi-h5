<template>
  <view>
    分类
    <uni-grid :column="4" :showBorder="true" :square="true">
      <uni-grid-item>
        <text class="text">文本</text>
      </uni-grid-item>
      <uni-grid-item>
        <text class="text">文本</text>
      </uni-grid-item>
      <uni-grid-item>
        <text class="text">文本4</text>
      </uni-grid-item>
      <uni-grid-item>
        <text class="text">文本</text>
      </uni-grid-item>
      <uni-grid-item>
        <text class="text">文本</text>
      </uni-grid-item>
      <uni-grid-item>
        <text class="text">文本</text>
      </uni-grid-item>
    </uni-grid>
    <navigator url="/pages/cart/cart" open-type="switchTab">购物车</navigator>
    <navigator url="/pages/index/index" open-type="switchTab">主页</navigator>
    <button size="mini" @tap="goCart">购物车</button>
    <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" />
  </view>
</template>

<script setup>
import {
  ref
} from 'vue'

const options = ref([{
  icon: 'headphones',
  text: '客服'
}, {
  icon: 'shop',
  text: '店铺',
  info: 2,
  infoBackgroundColor: '#007aff',
  infoColor: "red"
}, {
  icon: 'cart',
  text: '购物车',
  info: 2
}])

const buttonGroup = ref([{
  text: '加入购物车',
  backgroundColor: '#ff0000',
  color: '#fff'
},
{
  text: '立即购买',
  backgroundColor: '#ffa200',
  color: '#fff'
}
])

function goCart () {
  uni.switchTab({
    url: '/pages/cart/cart'
  })
}
</script>

<style></style>