<template>
  <view>
    <view>APP 或微信小程序支付</view>

    <!-- #ifdef APP -->
    <button size="mini" type="primary" @click="payali">支付宝支付</button>
    <button size="mini" type="warn" @click="payweixin">微信支付</button>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <button size="mini" type="primary" @click="payMP">小程序支付</button>
    <!-- #endif -->
  </view>
</template>

<script setup>
// 导入创建订单接口
import {
  createOrder,
  getOpenId,
  getMPid,
  createMPorder
} from '@/api/index.js'

// 小程序支付
function payMP () {
  // 01 登录获取code
  wx.login({
    async success (res) {
      // 02 通过code获取openid
      const {
        openid
      } = await getMPid({
        code: res.code
      })
      // 03 创建订单获取支付信息
      const params = await createMPorder({
        openid,
        amount: 1,
      })
      // 04 发起支付
      wx.requestPayment({
        ...params,
        signType: 'MD5',
        success (res) {
          wx.showToast({
            title: "支付成功"
          })
          console.log("小程序支付成功信息", res)
        },
        fail (err) {
          wx.showToast({
            title: "支付失败",
            icon: "error"
          })
          console.log("小程序支付失败信息", err)
        }
      })
    }
  })
}

// 微信APP支付
function payweixin () {
  // 01 登录获取code
  uni.login({
    onlyAuthorize: true, //只要授权
    async success (res) { //获取code成功
      // console.log(res,"success");
      // 02 获取openid
      const {
        openid
      } = await getOpenId({
        "action": "loginByWeixin",
        "params": {
          "code": res.code,
          "platform": "mp-weixin"
        }
      })
      console.log(openid, "openid");
      // 03 创建订单，获取支付信息（5个必要参数）
      const {
        orderInfo
      } = await createOrder({
        "platform": "app-plus",
        "provider": "wxpay",
        openid,
        "totalFee": 1
      })
      console.log("订单信息", orderInfo);
      // 04 发起支付
      uni.requestPayment({
        provider: 'wxpay',
        ...orderInfo,
        success (res) {
          uni.showToast({
            title: "支付成功"
          })
          console.log("支付成功", res)
        },
        fail (err) {
          uni.showToast({
            title: "支付失败",
            icon: 'error'
          })
          console.log("支付失败", err)
        }
      })
    },
    fail (err) {
      console.log("fail", err)
    },
  })
}

// 支付宝APP支付
async function payali () {
  // 获取订单信息
  const {
    orderInfo
  } = await createOrder({
    "platform": "app-plus", //平台
    "provider": "alipay", //提供商
    "totalFee": 1 //费用（分）
  })
  // 发起支付
  uni.requestPayment({
    provider: 'alipay', //支付商
    orderInfo, //支付参数（阿里）
    success (res) { //成功
      uni.showToast({
        title: "支付成功"
      })
      console.log("成功信息", res)
    },
    fail (err) { //失败
      uni.showToast({
        title: "支付失败",
        icon: "error"
      })
      console.log("err", err)
    }
  })

}
</script>