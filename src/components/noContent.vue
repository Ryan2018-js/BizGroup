<template>
	<div class="noContent">
			<div class="pic_box">
				<img :src="noImg">
			</div>
			<p>{{noText}}</p>
	</div>
</template>
<script>
export default {
  props: ["noImg", "noText"]
};
</script>
<style>
.noContent {
  margin-top: 150rpx;
}
.noContent .pic_box {
  width: 400rpx;
  margin: auto;
  text-align: center;
}
.noContent .pic_box img {
  width: 100%;
}
.noContent p {
  margin-top: 100rpx;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #9b9b9b;
}
</style>