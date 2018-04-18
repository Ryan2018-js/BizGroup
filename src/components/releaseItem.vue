<template>
	<div class="releaseItem">
		<h2>
			<span class="name fl">{{name}}</span> 
			<a class="fr" :href="share"></a>
			<span class="time fr">{{time}}</span>
			<div class="clear"></div>
		</h2>
		<div class="pic">
			<div class="pic_c fl" v-for="(item,index) in release" :key="index">
				<div class="pic_box">
					<image :src="item.url" mode="aspectFill"/>
				</div>
				<div class="bottom">
					<span class="view fl">已被{{item.person}}人看过</span>
					<a class="chat fr" :href="item.chat"></a>
					<div class="clear"></div>
				  </div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>
<script>
export default {
  props: ["name", "share", "time", "release"]
};
</script>
<style>
.releaseItem {
  padding: 32rpx 26rpx;
  border-bottom: 2rpx solid #f3f3f5;
  background: #ffffff;
}
.releaseItem h2 {
  line-height: 40rpx;
  margin-bottom: 20rpx;
}
.releaseItem h2 .name {
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #000000;
}
.releaseItem h2 .time {
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #aab2bc;
}
.releaseItem h2 a {
  width: 34rpx;
  height: 34rpx;
  display: block;
  background: url("../../static/image/share.jpg") no-repeat center;
  background-size: contain;
  margin-left: 31.4rpx;
}
.releaseItem .pic_c {
  width: 224rpx;
  margin-left: 12rpx;
  margin-bottom: 28rpx;
}
.releaseItem .pic_c:first-child {
  margin-left: 0rpx;
}
.releaseItem .pic_c:nth-child(4) {
  margin-left: 0rpx;
}
.releaseItem .pic_c:nth-child(7) {
  margin-left: 0rpx;
}
.releaseItem .pic_c image {
  width: 224rpx;
  height: 224rpx;
}
.releaseItem .pic_c .bottom {
  margin-top: 14rpx;
}
.releaseItem .pic_c .bottom .view {
  font-family: PingFangSC-Regular;
  font-size: 22rpx;
  color: #aab2bc;
}
.releaseItem .pic_c .bottom .chat {
  width: 30rpx;
  height: 30rpx;
  background: url("../../static/image/chat.jpg") no-repeat center;
  background-size: contain;
}
</style>