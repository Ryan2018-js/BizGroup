<template>
  <div class="goodsDetailP">
      <div class="goodsDetail">
          <div class="goodsDesc">{{goodsDesc}}</div>
          <div class="goodsBox">
              <image :src="currentImg" mode="scaleToFill"/>
          </div>
      </div>
       <div  class="sizeBox">
              <span>{{goodsColor}}</span>
              <span>{{goodsSize}}</span>
              <span>库存：{{goodsStock}}手</span>
              <span>吊牌价：￥{{goodsPrice}}</span>
       </div>
       <div class="bgcBox">
             <div class="topInfoBox" @click="goBackIndex">
                     <image :src="sellerHeadImg" mode="aspecFill" class="topHeadImg"/>
                    <div class="nicAndTru">
                        <div class="firstBox">{{sellerTrueName}}</div>
                        <div class="twoBox">{{ topIntr}}</div>
                     </div>
                     <div class="thBox">
                         <ul class="thiBox">
                             <li v-for="(item,index) in  sliceObj" :key="index">
                                 <a href="javascript:;">
                                     <image :src="item.url"/>
                                 </a>
                             </li>
                         </ul>
                     </div>
                <div class="thirdBox">
                    <a href=""></a>
                </div>
            </div>
       </div>
       <div class="btChatBox">
           <div class="btShares">
               <span>
                  <image :src="btShare" mode="aspectFill"/>
               </span>
               <span>{{forWardDes}}</span>
           </div>
           <div class="btAsks">
               <span>
                    <image :src="btAsk" mode="aspectFill"/>
               </span>
               <span>{{askPr}}</span>
           </div>
           <div class="chatBtn">{{textChat}}</div>
           <div class="orderBtn">{{preOrder}}</div>
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsDesc: "",
      dataObj: null,
      currentImg: "",
      sliceObj: "",
      goodsColor: "红色",
      goodsSize: "M",
      goodsStock: 124,
      goodsPrice: 200,
      sellerHeadImg: "",
      sellerTrueName: "张礼金",
      currentIndex: 0,
      topIntr: "各种童装衣服、裤子、鞋子批发",
      btShare: "../../../static/image/share.png",
      btAsk: "../../../static/image/askBtn.png",
      shareDes: "一键转发",
      askDes: "询价",
      textChat: "聊一聊",
      preOrder: "预购",
      forWardDes: "一键转发",
      askPr: "询价"
    };
  },
  onLoad: function(options) {
    this.dataObj = JSON.parse(options.dataObj);
    console.log(options.tx);
    this.sellerHeadImg = options.tx;
    this.goodsDesc = options.des;
    this.currentIndex = parseInt(options.num);
    this.currentImg = JSON.parse(options.dataObj)[this.currentIndex].url;
    this.sliceObj = this.dataObj.slice(this.currentIndex);
  },
  mounted() {},
  methods: {
    goBackIndex() {
      wx.navigateTo({
        url: "/pages/buyer/myIndex/main"
      });
    }
  }
};
</script>


<style scoped>
.goodsDetailP {
  border-top: 1px solid #ccc;
}
.goodsDetailP .goodsDetail {
  padding: 0 20rpx 18rpx 20rpx;
}
.goodsDetailP .goodsDetail .goodsDesc {
  padding-top: 26rpx;
  padding-bottom: 22rpx;
  font-size: 28rpx;
  font-weight: 500;
  height: auto;
}
.goodsDetailP .goodsDetail .goodsBox {
  width: 710rpx;
  height: 710rpx;
}
.goodsDetail .goodsBox image {
  width: 100%;
  height: 100%;
}
.goodsDetailP .sizeBox {
  margin-top: 36rpx;
  padding: 20rpx 20rpx 20rpx 38rpx;
  height: auto;
  border-top: 1px solid #ccc;
}
.goodsDetailP .sizeBox span {
  border: 1px solid #e1e1e1;
  font-size: 20rpx;
  color: #9b9b9b;
  height: 40rpx;
  line-height: 40rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
}
.goodsDetailP .sizeBox span:nth-child(1) {
  width: auto;
  height: 40rpx;
  line-height: 40rpx;
}
.goodsDetailP .sizeBox span:nth-child(2) {
  width: auto;
  line-height: 40rpx;
  margin-left: 40rpx;
}
.goodsDetailP .sizeBox span:nth-child(3) {
  border: none;
  width: auto;
  line-height: 40rpx;
  padding-left: 0;
  padding-right: 0;
  margin-left: 40rpx;
}
.goodsDetailP .sizeBox span:nth-child(4) {
  border: none;
  width: auto;
  line-height: 40rpx;
  padding-left: 0;
  padding-right: 0;
  margin-left: 46rpx;
}
.goodsDetailP .bgcBox {
  height: 192rpx;
  background: #f0f0f6;
  padding-top: 22rpx;
  box-sizing: border-box;
}
.bgcBox .topInfoBox {
  background: #ffffff;
  width: 710rpx;
  height: 128rpx;
  margin-left: 20rpx;
  border-radius: 10rpx;
  background: #ffffff;
  overflow: hidden;
}
.bgcBox .topInfoBox::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.bgcBox .topInfoBox .topHeadImg {
  margin-left: 28rpx;
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-top: 22rpx;
  float: left;
}
.bgcBox .topInfoBox .nicAndTru {
  margin-left: 18rpx;
  float: left;
  width: 390rpx;
  height: 118rpx;
}
.bgcBox .topInfoBox .nicAndTru .firstBox {
  width: 390rpx;
  height: 64rpx;
  padding-top: 26rpx;
  box-sizing: border-box;
  font-size: 24rpx;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bgcBox .topInfoBox .nicAndTru .twoBox {
  padding-top: 8rpx;
  box-sizing: border-box;
  width: 390rpx;
  height: 60rpx;
  font-size: 20rpx;
  color: #9b9b9b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bgcBox .topInfoBox .thBox {
  float: left;
  width: 146rpx;
  height: 60rpx;
  overflow: hidden;
  margin-top: 34rpx;
}
.bgcBox .topInfoBox .thBox::after {
  content: "";
  font-size: 0;
  clear: both;
}
.bgcBox .topInfoBox .thiBox li {
  width: 60rpx;
  height: 60rpx;
  margin-right: 10rpx;
  float: left;
}
.bgcBox .topInfoBox .thiBox li image {
  width: 60rpx;
  height: 60rpx;
}
.bgcBox .topInfoBox .thiBox image {
  width: 60rpx;
  height: 60rpx;
  display: inline-block;
}
.bgcBox .topInfoBox .thirdBox {
  float: right;
  width: 32rpx;
  height: 116rpx;
  line-height: 116rpx;
  margin-right: 16rpx;
}
.bgcBox .topInfoBox .thirdBox a {
  display: inline-block;
  width: 32rpx;
  height: 42rpx;
  vertical-align: middle;
  background: url("../../../../static/image/back.png") no-repeat center center;
  background-size: 32rpx 42rpx;
}
.goodsDetailP .btChatBox::after {
  content: "";
  clear: both;
  font-size: 0;
}
.goodsDetailP .btChatBox {
  height: 100rpx;
}
.goodsDetailP .btChatBox div {
  float: left;
}
.goodsDetailP .btChatBox .btShares {
  margin-left: 44rpx;
}
.goodsDetailP .btChatBox .btShares span:nth-child(1) {
  display: block;
  width: 96rpx;
  height: 58rpx;
  text-align: center;
}
.goodsDetailP .btChatBox .btShares span:nth-child(2) {
  display: block;
  width: 96rpx;
  height: 34rpx;
  text-align: center;
  font-size: 12px;
  color: #aab2bc;
}
.goodsDetailP .btChatBox .btAsks {
  margin-left: 38rpx;
}
.goodsDetailP .btChatBox .btAsks span:nth-child(1) {
  display: block;
  width: 48rpx;
  height: 58rpx;
  line-height: 58rpx;
  text-align: center;
}
.goodsDetailP .btChatBox .btAsks span:nth-child(2) {
  display: block;
  width: 48rpx;
  height: 34rpx;
  text-align: center;
  font-size: 12px;
  color: #aab2bc;
}
.goodsDetailP .btChatBox .btShares span image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: middle;
}
.goodsDetailP .btChatBox .btAsks span image {
  width: 41.6rpx;
  height: 39.4rpx;
  vertical-align: middle;
}
.goodsDetailP .btChatBox .chatBtn {
  width: 230rpx;
  height: 72rpx;
  line-height: 72rpx;
  text-align: center;
  margin-left: 72rpx;
  background: #feb60a;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  margin-top: 14rpx;
}
.goodsDetailP .btChatBox .orderBtn {
  width: 180rpx;
  height: 72rpx;
  line-height: 72rpx;
  margin-top: 14rpx;
  margin-left: 20rpx;
  text-align: center;
  background: #e7563c;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
}
</style>

