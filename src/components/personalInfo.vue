<template>
  <div class="personInfo">
          <div class="topInfoBox"  @click="goSeeSellerInfo">
                <image :src="topImg" mode="aspecFill" class="topHeadImg"/>
                    <div class="nicAndTru">
                        <div class="firstBox">{{topNic}}</div>
                        <div class="twoBox">{{topIntr}}</div>
                     </div>
                <div class="thirdBox">
                    <a href=""></a>
                </div>
          </div>
          <div class="preOrNews">
            <div class="preOrderB">
                <span>{{myPreOrder}}</span>
                <span class="twoSp"> 
                    <a href="" class="backB"></a>
                </span>
             </div>
             <div class="newListB">
                <span>{{newsList}}</span>
                <span v-if="hasNewsNum" class="haveNews" >
                  {{newsNum}}
                </span>
                <span class="twoSp">
                    <a href="" class="backB"></a>
                </span>
             </div>
         </div>
         <div class="toggleCard">
           {{toggleCard}}
         </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      myPreOrder: "我的预购",
      newsList: "消息列表",
      toggleCard: "切换至卖家身份",
      newsNum: 0,
      hasNewsNum:false,
    };
  },
  props: ["topImg", "topNic", "topIntr"],
  onLoad(options) {
    this.newsNum = Number(options.newList);
    if(this.newsNum!=0){
      this.hasNewsNum = true;
    }
  }
};
</script>


<style scoped>
.personInfo .topInfoBox {
  margin-top: 20rpx;
  background: #ffffff;
  height: 140rpx;
  padding: 0 16rpx 0 38rpx;
  overflow: hidden;
}
.personInfo.topInfoBox::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.personInfo .topInfoBox .topHeadImg {
  width: 103.4rpx;
  height: 103.4rpx;
  margin-top: 22rpx;
  float: left;
}
.personInfo .topInfoBox .nicAndTru {
  margin-left: 20.6rpx;
  float: left;
  width: 520rpx;
  height: 140rpx;
}
.personInfo .topInfoBox .nicAndTru .firstBox {
  width: 520rpx;
  height: 76rpx;
  padding-top: 22rpx;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.personInfo .topInfoBox .nicAndTru .twoBox {
  padding-top: 8rpx;
  box-sizing: border-box;
  width: 520rpx;
  height: 60rpx;
  font-size: 14px;
  color: #9b9b9b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.personInfo .topInfoBox .thirdBox {
  float: right;
  width: 32rpx;
  height: 116rpx;
  line-height: 116rpx;
}
.personInfo .topInfoBox .thirdBox a {
  display: inline-block;
  width: 32rpx;
  height: 42rpx;
  vertical-align: middle;
  background: url("../../static/image/back.png") no-repeat center center;
  background-size: 32rpx 42rpx;
}
.preOrNews {
  margin-top: 20rpx;
  height: 204rpx;
}
.preOrNews .preOrderB,
.newListB {
  height: 102rpx;
  line-height: 102rpx;
  background: #fff;
  padding-left: 42rpx;
  box-sizing: border-box;
  font-size: 16px;
  color: #000000;
}
.preOrNews .preOrderB::after {
  content: "";
  font-size: 0;
  clear: both;
}
.preOrNews .newListB::after {
  content: "";
  font-size: 0;
  clear: both;
}
.preOrNews .preOrderB {
  border-bottom: 1px solid #f3f3f5;
}
.preOrNews .preOrderB span:nth-child(1) {
  display: block;
  width: 608rpx;
  float: left;
}
.preOrNews .newListB span:nth-child(1) {
  display: block;
  width: 608rpx;
  float: left;
}
.preOrNews .noneNews{
  display: block;
  width: 40rpx;
  height: 40rpx;
  float: left;
  margin-top: 34rpx;
  line-height: 40rpx;
}
.preOrNews .haveNews{
  display: block;
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  float: left;
  margin-top: 34rpx;
  background: #ff0000;
  text-align: center;
  line-height: 40rpx;
  font-size: 12px;
  color: #ffffff;
}
.preOrNews .twoSp {
  height: 102rpx;
  width: 32rpx;
  display: block;
  float: right;
  margin-right: 16rpx;
}
.preOrNews .backB {
  display: inline-block;
  width: 32rpx;
  height: 42rpx;
  vertical-align: middle;
  background: url("../../static/image/back.png") no-repeat center center;
  background-size: 32rpx 42rpx;
}
.personInfo .toggleCard {
  margin-top: 20rpx;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  background: #fff;
  font-size: 16px;
  color: #000000;
}
</style>
