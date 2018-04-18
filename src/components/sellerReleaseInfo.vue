<template>
    <div class="sellerIntruInfo">
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
         <div class="backgroundBox"></div>
         <div class="sellReaIndex"  v-for="(item,index) in showGoodsAlb" :key="index">
             <div class="indexTextInfo">
                 <span class="goodsDes">{{item.showDesc}}</span>
                 <div class="timeAndShare">
                     <span>
                        <image :src="item.shareIconBtn" mode="aspecFill" @click="btnMeShare"/> 
                      </span>
                     <span>{{item.releaseTime}}</span>
                 </div>
             </div>
              <ul class="bigShowImgBox">
                 <li  v-for="(item1,index1) in item.sellerReleaseAlbum" :key="index1" @click="seeGoodsDetail(topImg,topNic,topIntr,item,index1,item1,index)" class="showImgBox">
                    <image :src="item1.url"   mode="aspectFit"/>
                </li>     
              </ul>  
        </div>   
    </div>
</template>


<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["topImg", "topNic", "topIntr", "showGoodsAlb"],
  methods: {
    btnMeShare() {
      wx.showModal({
        title: "提示",
        content: "抱歉该功能正在完善中"
      });
    },
    goSeeSellerInfo() {
      wx.navigateTo({
        url: "/pages/buyer/sellerInfo/main"
      });
    },
    seeGoodsDetail(topImg,topNic,topIntr,item,index1,item1,index){
      // console.log(topImg);
      // console.log(topNic);
      // console.log(item);
      // console.log(topIntr);
      // console.log(item1);
      // console.log(item.showDesc)
      //  wx.navigateTo({
      //     url:'/pages/buyer/goodsDetail/main?dataObj='+JSON.stringify(item1)+'&des='+item.showDescr+'&tx='+topImg+'&num='+index1,
      // })
    }
  },
  mounted(){
   
  }
};
</script>


<style scoped>
.sellerIntruInfo .topInfoBox {
  height: 116rpx;
  margin: 0 20rpx 0 38rpx;
  overflow: hidden;
}
.sellerIntruInfo.topInfoBox::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
} 
 .sellerIntruInfo .topInfoBox .topHeadImg {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  margin-top: 22rpx;
  float: left;
}
.sellerIntruInfo .topInfoBox .nicAndTru {
  margin-left: 18rpx;
  float: left;
  width: 390rpx;
  height: 118rpx;
}
.sellerIntruInfo .topInfoBox .nicAndTru .firstBox {
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
.sellerIntruInfo .topInfoBox .nicAndTru .twoBox {
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
.sellerIntruInfo .topInfoBox .thBox {
  float: left;
  width: 146rpx;
  height: 60rpx;
  overflow: hidden;
  margin-top: 34rpx;
}
.sellerIntruInfo .topInfoBox .thirdBox {
  float: right;
  width: 32rpx;
  height: 116rpx;
  line-height: 116rpx;
  margin-right: 16rpx;
}
.sellerIntruInfo .topInfoBox .thirdBox a {
  display: inline-block;
  width: 32rpx;
  height: 42rpx;
  vertical-align: middle;
  background: url("../../static/image/back.png") no-repeat center center;
  background-size: 32rpx 42rpx;
}

.backgroundBox {
  height: 18rpx;
  background: #f0f0f6;
  width: auto;
}
.sellReaIndex {
  padding: 32rpx 24rpx 20rpx 20rpx;
  overflow: hidden;
}
.sellReaIndex .indexTextInfo::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.sellReaIndex .indexTextInfo span:nth-child(1) {
  color: "#000000";
  font-size: 28rpx;
  float: left;
  font-weight: 500;
}
.sellReaIndex .timeAndShare {
  line-height: 40rpx;
  float: right;
}
sellReaIndex .timeAndShare::after {
  font-size: 0;
  content: "";
  display: block;
  clear: both;
}
.sellReaIndex .timeAndShare span:nth-child(1) {
  float: right;
}
.sellReaIndex .timeAndShare span:nth-child(2) {
  float: right;
  margin-right: 20rpx;
  color: #aab2bc;
  font-size: 24rpx;
}
.sellReaIndex .timeAndShare image {
  display: block;
  height: 40rpx;
  width: 40rpx;
}
.sellReaIndex .bigShowImgBox {
  height: auto;
  overflow: hidden;
  margin-top: 22rpx;
}
.sellReaIndex .bigShowImgBox::after {
  font-size: 0;
  content: "";
  clear: both;
}
.sellReaIndex .bigShowImgBox .showImgBox {
  width: 344rpx;
  height: 344rpx;
  float: left;
  margin-bottom: 18rpx;
}
.sellReaIndex .bigShowImgBox .showImgBox:nth-child(2n) {
  margin-left: 18rpx;
}
.bigShowImgBox .showImgBox image {
  width: 344rpx;
  height: 344rpx;
  vertical-align: middle;
}
</style>
