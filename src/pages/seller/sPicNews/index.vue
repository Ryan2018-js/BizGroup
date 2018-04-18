<template>
	<div class="picNews">
		<div class="head">
			<image class="fl" mode="aspectFill"  src="../../../static/image/test1.jpg"/>
			<div class="fl detail">
				<p class="name">{{name}}</p>
				<p class="time">{{time}}</p>
			</div>
			<div class="fr add"><button>添加属性</button></div>
			<div class="clear"></div>
		</div>
		<ul>
			<li  v-for="(item,index)  in news" :key="index">
				<a :href="item.href">
					<image  mode="aspectFill"  :src="item.src" class="fl"/>
					<div class="fl content">
						<p class="title">
							<span>{{item.title}}</span><span>{{item.time}}</span>
						</p>
						<p class="text">
							{{item.content}}
						</p>
					</div>
					<div class="fr link">
						<span class="right fr"></span>
						<span class="newsNum  fr" v-if="item.seen">{{item.num}}</span>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      name: "个性女装新款上市",
      time: "20130729",
      news: [
        {
          href: "##",
          src: "../../../static/image/test1.jpg",
          title: "你好服饰",
          time: "1个小时前",
          content: "这个系列真的不错",
          num: "121",
          seen: false
        },
        {
          href: "##",
          src: "../../../static/image/test2.jpg",
          title: "今天服饰",
          time: "2个小时前",
          content: "这个系列真的不喜欢",
          num: "12",
          seen: false
        },
        {
          href: "##",
          src: "../../../static/image/test3.jpg",
          title: "心情服饰",
          time: "3个小时前",
          content: "这个系列贼6",
          num: "1",
          seen: true
        }
      ]
    };
  },
  created() {}
};
</script>
<style>
page {
  background: #f9fafb;
}
.picNews .head {
  padding: 20rpx 38rpx;
  background: #ffffff;
  margin-top: 4rpx;
}
.picNews .head image {
  margin: 0rpx;
  width: 100rpx;
  height: 100rpx;
  display: block;
  background: #000000;
}
.picNews .head .detail {
  width: 392rpx;
  height: 100rpx;
  margin-left: 20rpx;
}
.picNews .head .detail .name {
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #000000;
}
.picNews .head .detail .time {
  margin-top: 24rpx;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #aab2bc;
}
.picNews .head .add button {
  margin-top: 80rpx;
  background: #e7563c;
  border: none;
  border-radius: 4rpx;
  font-family: PingFangSC-Medium;
  font-size: 20rpx;
  color: #ffffff;
}
.picNews ul {
  margin-top: 20rpx;
  background: #ffffff;
  padding: 24rpx 34rpx;
}
.picNews ul li image {
  width: 72rpx;
  height: 72rpx;
  display: block;
}
.picNews ul li .content {
  margin-left: 18rpx;
}
.picNews ul li .content .text {
  margin-top: 8rpx;
}
.picNews ul li p {
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #000000;
}
.picNews ul li p span {
  margin-right: 82rpx;
  font-family: PingFangSC-Regular;
  font-size: 20rpx;
  color: #9b9b9b;
}
.picNews ul li {
  padding-top: 30rpx;
  padding-bottom: 30rpx;
  border-bottom: 2rpx solid #f9fafb;
}
.picNews ul li:first-child {
  padding-top: 0rpx;
}
.picNews ul li:last-child {
  padding-bottom: 0rpx;
  border-bottom: 0rpx;
}
.picNews ul li .link .newsNum {
  margin-top: 14rpx;
  display: block;
  width: 40rpx;
  height: 40rpx;
  line-height: 40rpx;
  text-align: center;
  border-radius: 50%;
  background: #ff0000;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #ffffff;
}
.picNews ul li .link .right {
  margin-left: 14rpx;
  margin-top: 12rpx;
  display: block;
  width: 32rpx;
  height: 42rpx;
  background: url(../../../../static/image/right.jpg) no-repeat center;
  background-size: contain;
}
</style>
