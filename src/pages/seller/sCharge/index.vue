<template>
	<div class="charge">
		<div class="detail">
			<h1>卖家功能为收费项目</h1>
			<h2>支付后享受各种便利功能</h2>
			<ul>
				<li class="fl">
					<div class="fl pic_box"></div>
					<label class="fl">添加会员</label>
					<div class="clear"></div>
				</li>
				<li class="fl">
					<div class="fl pic_box"></div>
					<label class="fl">轻松发布</label>
					<div class="clear"></div>
				</li>
				<li class="fl ">
					<div class="fl pic_box"></div>
					<label class="fl">朋友分享</label>
					<div class="clear"></div>
				</li>
				<li class="fl ">
					<div class="fl pic_box"></div>
					<label class="fl">云图库</label>
					<div class="clear"></div>
				</li>
				<li class="clear"></li>
			</ul>
			<h3><span class="price">200.00元</span><span class="meter">/年</span></h3>
			<hr/>
			<div class="info">
				<image src="../../../static/image/test1.jpg" mode="aspectFill"/>
				<p>祥云服装批发</p>
			</div>
		</div>
		<div class="pay">
			<button>立即支付</button>
		</div>
	</div>
</template>
<script>
</script>
<style>
page {
  background: #f9fafb;
}
.charge .detail {
  background: #ffffff;
  padding: 72rpx 50rpx 54rpx 50rpx;
}
.charge h1 {
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 36rpx;
  color: #4a4a4a;
  line-height: 48rpx;
}
.charge h2 {
  margin-top: 12rpx;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #000000;
  line-height: 48rpx;
}
.charge ul {
  margin-top: 58rpx;
  margin-bottom: 72rpx;
}
.charge li {
  margin-left: 28rpx;
}
.charge li :first-child {
  margin-left: 0rpx;
}
.charge li label {
  margin-left: 4rpx;
  line-height: 30rpx;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #9b9b9b;
}
.charge li .pic_box {
  height: 30rpx;
  width: 30rpx;
  background: url(../../../../static/image/check.jpg) no-repeat center;
  background-size: contain;
}
.charge h3 {
  text-align: center;
}
.charge h3 .price {
  font-family: PingFangSC-Medium;
  font-size: 64rpx;
  color: #e7563c;
}
.charge h3 .meter {
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #4a4a4a;
}
.charge hr {
  width: 100%;
  height: 2rpx;
  background: #f0f0f6;
  margin-top: 74rpx;
}
.charge .info {
  margin-top: 50rpx;
}
.charge .info image {
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 120rpx;
  height: 120rpx;
  background: pink;
  margin: auto;
}
.charge .info p {
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #9b9b9b;
  margin-top: 28rpx;
}
.charge .pay {
  margin-top: 122rpx;
}
.charge .pay button {
  background: #e7563c;
  border-radius: 5px;
  border: none;
  width: 640rpx;
  height: 100rpx;
  line-height: 100rpx;
  font-family: PingFangSC-Regular;
  font-size: 36rpx;
  color: #ffffff;
}
</style>