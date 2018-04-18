<template>
    <div class="side">
       <div class="info">
       		<div class="pic_box">
       			<image v-bind:src="url" mode="aspectFill"/>
       			<!--<img v-bind:src="url"/>-->
       		</div>
       		<h2><span class="name">{{name}}</span><span class="edit"></span></h2>
       		<h3>{{intro}}</h3>
       		<p >{{address}}</p>
       		<p >{{tel}}</p>
       </div>
       <ul class="lead">
			<li v-for="(item,index) in lead" :key="index"><a v-bind:href="item.url"  v-bind:class="item.isnews">{{item.name}}<span v-bind:class="item.hasnews"></span></a></li>
       </ul>
    </div>
</template>
<script>
export default {
  props: ["url", "name", "intro", "address", "tel", "lead"]
};
</script>
<style>
page {
  min-width: 100%;
  min-height: 100%;
}
.side {
  box-sizing: border-box;
  padding: 98rpx 84rpx;
  background: #ffffff;
  width: 502rpx;
  height: 100%;
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 3;
}
.side .info {
  margin-bottom: 116rpx;
}
.side .info .pic_box {
  text-align: center;
  overflow: hidden;
  border-radius: 50%;
  width: 132rpx;
  height: 132rpx;
  background: blue;
  margin: 0rpx auto 8rpx auto;
}
.side .info .pic_box image {
  width: 100%;
  height: 100%;
}
.side h2 {
  text-align: center;
  margin-bottom: 18rpx;
}
.side h2 .name {
  margin-right: 22rpx;
  display: inline-block;
  vertical-align: middle;
  font-family: PingFangSC-Regular;
  font-size: 32rpx;
  color: #000000;
}
.side h2 .edit {
  display: inline-block;
  vertical-align: middle;
  height: 25rpx;
  width: 25rpx;
  background: url("../../static/image/edit.jpg") no-repeat center;
  background-size: contain;
}
.side h3 {
  margin-bottom: 16rpx;
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #4a4a4a;
}
.side p {
  font-family: PingFangSC-Regular;
  font-size: 20rpx;
  color: #9b9b9b;
}
.side .lead {
  font-family: PingFangSC-Regular;
  font-size: 32rpx;
  color: #000000;
}
.side .lead li {
  margin-bottom: 62rpx;
}
.side .lead li .no span {
  display: none;
}
.side .lead li .news span {
  display: none;
}
.side .lead li .news {
  position: relative;
}
.side .lead li .news .hasnews {
  position: absolute;
  top: 10rpx;
  left: 120rpx;
  display: inline-block;
  width: 12rpx;
  height: 12rpx;
  background: #ff0000;
  border-radius: 50%;
}
</style>