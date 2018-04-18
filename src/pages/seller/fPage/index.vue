<template>
	<div class="fPage">
		<div class="top">
			<h1>打造生意人自己的朋友圈</h1>
			<h3>我们一起发布、分享、关注我们自己圈内的资源</h3>
		</div>
		<div class="middle">
			<div class="sale">
				<h2>卖家</h2>
				<ul>
					<li class="fl">
							<div class="fl pic_box" ></div>
							<label class="fl">添加会员</label>
							<div class="clear"></div>
					</li>
					<li class="fl">
							<div class="fl pic_box" ></div>
							<label class="fl">轻松发布</label>
							<div class="clear"></div>
					</li>
					<li class="fl">
							<div class="fl pic_box" ></div>
							<label class="fl">朋友分享</label>
							<div class="clear"></div>
					</li>
					<li class="fl">
							<div class="fl pic_box"></div>
							<label class="fl">云图库</label>
							<div class="clear"></div>
					</li>
					<li class="clear"></li>
				</ul>
			</div>
			<div class="buy">
				<h2>买家</h2>	
				<h4>时刻关注卖家动态，方便沟通，轻松下单</h4>
			</div>
		</div>
		<div>
				<h5>立刻进入朋友圈</h5>
				<button class="saleBtn">我是卖家</button>
				<button class="buyBtn">我是买家</button>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},

  created() {}
};
</script>
<style>
page {
  background: #f9fafb;
}
.fPage h1 {
  text-align: center;
  font-size: 36rpx;
  font-family: PingFangSC-Regular;
  color: #4a4a4a;
}
.fPage h3 {
  margin-top: 20rpx;
  text-align: center;
  font-size: 24rpx;
  font-family: PingFangSC-Regular;
  color: #4a4a4a;
}
.fPage h2 {
  margin-bottom: 30rpx;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 32rpx;
  color: #4a4a4a;
}
.fPage li {
  margin-left: 30rpx;
}
.fPage li:first-child {
  margin-left: 0rpx;
}
.fPage li label {
  margin-left: 12rpx;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #9b9b9b;
  line-height: 30rpx;
}
.fPage li .pic_box {
  width: 30rpx;
  height: 30rpx;
  background: url("../../../../static/image/check.jpg") no-repeat center;
  background-size: contain; 
}
.fPage h4 {
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #9b9b9b;
}
.fPage h5 {
  background: url("../../../../static/image/downC.jpg") no-repeat center bottom;
  background-size: 30rpx;
  padding-bottom: 48rpx;
  margin-bottom: 52rpx;
  margin-top: 96rpx;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #9b9b9b;
}
.fPage .top {
  margin-top: 90rpx;
  margin-bottom: 78rpx;
}
.fPage .middle {
  margin: auto;
  width: 706rpx;
  box-sizing: border-box;
  background: #ffffff;
  padding: 54rpx 22rpx 62rpx 22rpx;
}
.fPage .middle .buy {
  margin-top: 80rpx;
}
.fPage button {
  border-radius: 10rpx;
  width: 640rpx;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  font-family: PingFangSC-Regular;
  font-size: 36rpx;
  color: #ffffff;
}
.fPage button.saleBtn {
  color: #ffffff;
  background: #e7563c;
  border: 1rpx solid #e7563c;
}
.fPage button.buyBtn {
  color: #e7563c;
  background: transparent;
  border: 1rpx solid #e7563c;
  margin-top: 20rpx;
}
</style>