<template>
	<div class="pushPic">
		<ul>
			<li class="fl  item">
				<image  mode="aspectFill" src="../../../static/image/test1.jpg"/>
			</li>
			<li class="fl add">
				<div class="fakeInput"></div>
			</li>
			<li class="clear"></li>
		</ul>
		<textarea placeholder="请添加您的产品描述">
			
		</textarea>
		<button>发布</button>
		<div class="btn_temp"></div>
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
.pushPic {
  border-top: 2rpx solid #f9fafb;
}
.pushPic ul {
  padding-left: 12rpx;
  padding-top: 20rpx;
  border-bottom: 2rpx solid #f9fafb;
}
.pushPic .item image {
  width: 224rpx;
  height: 224rpx;
  margin-left: 12rpx;
  margin-bottom: 20rpx;
}
.pushPic .add .fakeInput {
  margin-left: 12rpx;
  margin-bottom: 20rpx;
  width: 224rpx;
  height: 224rpx;
  background: url(../../../../static/image/add.jpg) no-repeat center #f0f0f6;
  background-size: 84rpx;
}
.pushPic textarea {
  margin-top: 22rpx;
  font-family: PingFangSC-Regular;
  font-size: 32rpx;
  color: #9b9b9b;
  text-indent: 24rpx;
}
.pushPic button {
  border-radius: 0rpx;
  position: fixed;
  bottom: 0rpx;
  left: 0rpx;
  background: #e7563c;
  height: 100rpx;
  line-height: 100rpx;
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 40rpx;
  color: #ffffff;
}
.pushPic .btn_temp {
  height: 100rpx;
  width: 100%;
}
</style>