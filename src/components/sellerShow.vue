<template>
    <div class="sellerIntru">
        <div class="sellerIntruInfo" @click="goToSellerRe">
            <image :src="tx" mode="aspectFit"/>
            <span>{{nick}}</span>
        </div>
        <div class="goodsDesc">
            <span>{{desc}}</span>
            <div class="timeShareBox">  
                <span>
                    <image :src="shareIconBtn" mode="aspectFit"/>
                 </span> 
                <span>{{tim}}</span>
            </div>
        </div>
        <ul class="sellerAlbumBox">
            <li v-for="(item,index) in albu" class="albumBox" :key="index" @click="seeGoodsDetail(index,$event)" ref="liBox">
                    <image :src="item.url"   class="albumPhoto" mode="aspectFit"/>
            </li>     
        </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {
     
    }
  },
  props: ["tx", "nick", "desc", "tim", "albu", "shareIconBtn"],
  methods:{
    goToSellerRe(){
      wx.navigateTo({
        url:'/pages/buyer/sellerRelease/main'
      })
    },
      
    seeGoodsDetail(index,e){
       wx.navigateTo({
       url:'/pages/buyer/goodsDetail/main?dataObj='+JSON.stringify(this.albu)+'&des='+this.desc+'&tx='+this.tx+'&num='+index,
      })
    }
  }
};
</script>

<style>
.sellerIntru {
  overflow: hidden;
  margin-left: 20rpx;
  margin-right: 24rpx;
}
.sellerIntruInfo {
  margin-top: 36rpx;
  height: 60rpx;
  line-height: 60rpx;
}
.sellerIntruInfo::after{
  content: '';
  font-size: 0;
  clear: both;
}
.sellerIntruInfo image {
  width: 60rpx;
  height: 60rpx;
  vertical-align: middle;
  float: left;
}
.sellerIntruInfo span {
  display: block;
  color: #7a92c3;
  width: 634rpx;
  font-size: 28rpx;
  font-weight: 500;
  padding-left:12rpx;
  box-sizing: border-box; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sellerIntru .goodsDesc::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.sellerIntru .goodsDesc {
  margin-top: 22rpx;
}
.sellerIntru .goodsDesc span:nth-child(1) {
  color: "#000000";
  font-size: 28rpx;
  float: left;
  font-weight: 500;
}
.sellerIntru .goodsDesc .timeShareBox {
  line-height: 40rpx;
  float: right;
}
.sellerIntru .goodsDesc .timeShareBox:after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.goodsDesc .timeShareBox span:nth-child(1) {
  float: right;
}
.goodsDesc .timeShareBox span:nth-child(2) {
  float: right;
  margin-right: 20rpx;
  color: #aab2bc;
  font-size: 24rpx;
}
.sellerIntru .goodsDesc image {
  display: block;
  height: 40rpx;
  width: 40rpx;
}
.sellerIntru .sellerAlbumBox {
  height: auto;
  overflow: hidden;
  margin-top: 22rpx;
}
.sellerIntru .sellerAlbumBox::after {
  font-size: 0;
  content: "";
  clear: both;
}
.sellerIntru .sellerAlbumBox .albumBox {
  width: 344rpx;
  height: 344rpx;
  float: left;
  margin-bottom: 18rpx;
}
.sellerIntru .sellerAlbumBox .albumBox:nth-child(2n) {
  margin-left: 18rpx;
}
.sellerIntru .sellerAlbumBox image {
  width: 344rpx;
  height: 344rpx;
  vertical-align: middle;
}
</style>

