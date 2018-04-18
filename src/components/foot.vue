<template>
	<div class="foot">
		<div class="fakePhoto"></div>
		<ul>
			<li class="fl item margin">
				<a href="##">
					<div class="pic_box index"></div>
					<p>首页</p>
				</a>
			</li>
			<li class="fl item">
				<a href="##">
					<div class="pic_box base"></div>
					<p>图库</p>
				</a>	
			</li>
			<li class="photo">
				<a href="##">
					<div class="camera"></div>
					<p>发布照片</p>
				</a>
			</li>
			<li class="fr item">
				<a href="##">
					<div class="pic_box my"></div>
					<p>我的</p>
				</a>	
			</li>
			<li class="fr item margin">
				<a href="##">
					<div class="pic_box news"></div>
					<p>消息</p>
				</a>
			</li>
			<li class="clear"></li>
		</ul>
	</div>
</template>
<script>
</script>
<style>
.foot {
  width: 100%;
  height: 114rpx;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0rpx;
  bottom: 0rpx;
}
.foot .fakePhoto {
  width: 170rpx;
  height: 170rpx;
  position: absolute;
  z-index: 1;
  left: 290rpx;
  top: -40rpx;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
.foot ul {
  padding: 14rpx 64rpx;
  box-sizing: border-box;
  width: 100%;
  height: 110rpx;
  background: #ffffff;
  position: absolute;
  left: 0rpx;
  bottom: 0rpx;
  z-index: 2;
}
.foot ul .photo {
  width: 140rpx;
  height: 140rpx;
  position: absolute;
  z-index: 2;
  left: 305rpx;
  top: -40rpx;
  background: #ffffff;
  border-radius: 50%;
}
.foot ul .item.margin {
  margin-right: 96rpx;
}
.foot ul p {
  margin-top: 6rpx;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 20rpx;
  color: #4a4a4a;
}
.foot ul .item .pic_box {
  margin: auto;
  width: 50rpx;
  height: 50rpx; /*background:#000000;*/
}
.foot ul .item .pic_box.index {
  background: url("../../static/image/home.jpg") no-repeat center;
  background-size: contain;
}
.foot ul .item .pic_box.base {
  background: url("../../static/image/base.jpg") no-repeat center;
  background-size: contain;
}
.foot ul .item .pic_box.news {
  background: url("../../static/image/news.jpg") no-repeat center;
  background-size: contain;
}
.foot ul .item .pic_box.my {
  background: url("../../static/image/my.jpg") no-repeat center;
  background-size: contain;
}
.foot ul .photo .camera {
  box-shadow: 3rpx #feb60a;
  margin: 20rpx auto 0rpx auto;
  width: 84rpx;
  height: 84rpx;
  border-radius: 50%;
  background: url("../../static/image/camera.jpg") no-repeat center #feb60a;
  background-size: 60%;
}
.foot ul .photo p {
  margin-top: 6rpx;
}
</style>