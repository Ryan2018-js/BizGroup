<template>
    <div class="sellerInfoPage">
        <div class="topInfoBox" @click="goSeeSellerInfo">
            <image :src="topImg" mode="aspecFill" class="topHeadImg"/>
            <div class="nicAndTru">
                <div class="firstBox">{{topNic}}</div>
                <div class="twoBox">{{topIntr}}</div>
            </div>
            <div class="thirdBox">
                 <a href=""></a>
            </div>
        </div>
        <div class="sellerAddre">
            <span>地址：</span>
            <span>{{sellerAddress}}</span>
        </div>
        <div class="sellerPho">
            <span>电话：</span>
            <span>{{sellerPhone}}</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["topImg", "topNic", "topIntr", "sellerAddress", "sellerPhone"]
};
</script>


<style>

.topInfoBox {
    margin-top: 20rpx;
  background: #ffffff;
  height: 116rpx;
  overflow: hidden;
  padding: 0 50rpx 0 38rpx;
  box-sizing: border-box;
}
.topInfoBox::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.topInfoBox .topHeadImg {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-top: 18rpx;
  float: left;
}
.topInfoBox .nicAndTru {
  margin-left: 30rpx;
  float: left;
  width: 504rpx;
  height: 118rpx;
}
.topInfoBox .nicAndTru .firstBox {
  width: 502rpx;
  height: 60rpx;
  padding-top: 26rpx;
  box-sizing: border-box;
  font-size: 24rpx;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.topInfoBox .nicAndTru .twoBox {
  padding-top: 8rpx;
  box-sizing: border-box;
  width: 502rpx;
  height: 60rpx;
  font-size: 20rpx;
  color: #9b9b9b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.topInfoBox .thirdBox{
    float: right;
    width: 30rpx;
    height: 116rpx;
    line-height: 116rpx;
}

.topInfoBox .thirdBox  a{
    display: inline-block;
     width: 30rpx;
    height: 27.8rpx;
    background: url('../../static/image/edit.png') no-repeat center center;
    background-size:30rpx 27.8rpx;
}
.sellerAddre{
     margin-top: 20rpx;
     border-bottom: 1px solid #F0F0F6;
     padding-top: 28rpx;
     padding-bottom: 28rpx;
     overflow: hidden;
}
.sellerPho{
     height: 100rpx;
    line-height: 100rpx;
}
.sellerAddre,.sellerPho{
    padding-left:38rpx;
    padding-right: 50rpx; 
    background: #ffffff;
}
.sellerAddre,.sellerPho span:nth-child(1){
    font-size: 32rpx;
    color: #000000;
    font-weight: 500;
}
.sellerAddre span:nth-child(2){
    font-size: 28rpx;
    color: #4A4A4A;
}
.sellerPho span:nth-child(2){
    font-size: 28rpx;
    color: #4A90E2;
}
</style>

