<template>
	<div class="BaseUp">
		<ul>
			<li  v-for="(item , index) in picList" :key="index">
				<h2>
					<span class="fl timeB">{{item.time_b}}</span>
					<span class="fl timeS">/{{item.time_s}}</span>
					<span class="fr allSelect" v-if="item.noCheck">全选</span>
					<span class="fr allSelect"  v-else >取消选择</span>
					<span class="clear"></span>
				</h2>
				<div class="pic">
					<div class="picItem fl" v-for="(x , index1) in item.src" :key="index1">
						<image mode="aspectFill" :src="x.url"/>
						<div class="checkMask" v-if="x.check">
							<div class="checkLogo"></div>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</li>
		</ul>
		<div class="bottom">
			<button class="fl preview" plain="true" >预览</button>
			<button class="fr finish" plain="true">完成（6）</button>
			<div class="clear"></div>
		</div>
	</div>	
</template>
<script>
export default {
  data() {
    return {
      picList: [
        {
          timeB: "03",
          timeS: "4月",
          src: [
            {
              url: "../../../static/image/test1.jpg",
              check: true
            },
            {
              url: "../../../static/image/test2.jpg",
              check: false
            },
            {
              url: "../../../static/image/test3.jpg",
              check: true
            }
          ],
          noCheck: true
        },
        {
          timeB: "03",
          timeS: "4月",
          src: [
            {
              url: "../../../static/image/test1.jpg",
              check: false
            },
            {
              url: "../../../static/image/test2.jpg",
              check: false
            },
            {
              url: "../../../static/image/test3.jpg",
              check: false
            }
          ],
          noCheck: true
        },
        {
          timeB: "03",
          timeS: "4月",
          src: [
            {
              url: "../../../static/image/test1.jpg",
              check: false
            },
            {
              url: "../../../static/image/test2.jpg",
              check: false
            },
            {
              url: "../../../static/image/test3.jpg",
              check: false
            }
          ],
          noCheck: true
        }
      ]
    };
  },
  components: {},
  methods: {},
  created() {}
};
</script>

<style >
.BaseUp {
  border-top: 2rpx solid #f9fafb;
}
.BaseUp li {
  padding-bottom: 38rpx;
  border-bottom: 2rpx solid #f9fafb;
}
.BaseUp h2 {
  padding: 34rpx 22rpx 18rpx 22rpx;
}
.BaseUp h2 span {
  display: block;
}
.BaseUp h2 .timeB {
  font-family: PingFangSC-Medium;
  font-size: 28rpx;
  color: #000000;
}
.BaseUp h2 .timeS {
  line-height: 40rpx;
  font-family: PingFangSC-Medium;
  font-size: 20rpx;
  color: #4a4a4a;
}
.BaseUp h2 .allSelect {
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #4a90e2;
}
.BaseUp .pic .picItem {
  padding-left: 10rpx;
  position: relative;
}
.BaseUp .pic .picItem .checkMask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0rpx;
  left: 0rpx;
  z-index: 1;
  background: rgba(255, 255, 255, 0.5);
}
.BaseUp .pic .picItem .checkMask .checkLogo {
  width: 40rpx;
  height: 40rpx;
  background: url(../../../../static/image/check2.jpg) no-repeat center;
  background-size: contain;
  position: absolute;
  bottom: 30rpx;
  right: 10rpx;
  z-index: 2;
}
.BaseUp .pic .picItem image {
  width: 224rpx;
  height: 224rpx;
  margin-left: 12rpx;
  margin-bottom: 12rpx;
}
.BaseUp .bottom {
  padding: 10rpx 22rpx;
  box-sizing: border-box;
  position: fixed;
  bottom: 0rpx;
  left: 0rpx;
  width: 100%;
}
.BaseUp .bottom button {
  height: 72rpx;
  line-height: 72rpx;
}
.BaseUp .bottom .preview {
  border: none;
  font-family: PingFangSC-Medium;
  font-size: 32rpx;
  color: #46474b;
}
.BaseUp .bottom .finish {
  text-indent: 25rpx;
  background: #e7563c;
  border-radius: 10rpx;
  border: none;
  font-family: PingFangSC-Medium;
  font-size: 32rpx;
  color: #ffffff;
}
</style>