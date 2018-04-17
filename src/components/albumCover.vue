<template>
  <div class="albumCover">
      <div class="albumPages">
          <image :src="albumP"/>
      </div>
      <div class="buyerHeadImg" @click="goPersonPage">
          <image :src="headImage" mode="aspectFill"/>
      </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
        newsList:0
    };
  },
  props: ["albumP", "headImage","getNews"],
  
  mounted(){
  },
  watch:{
      "getNews":function(val,oldval){
          this.newsList = val;
      }
  },
  methods: {
    goPersonPage: function() {
      wx.navigateTo({
        url: "/pages/buyer/personalInfo/main?newList="+this.newsList,
      });
    }
  },
};
</script>


<style scoped>
.albumCover {
  height: 458rpx;
  overflow: hidden;
  position: relative;
}
.albumCover .albumPages {
  width: 100%;
  height: 416rpx;
}
.albumCover .albumPages image {
  width: 100%;
  height: 100%;
}
.albumCover .buyerHeadImg {
  position: absolute;
  width: 142rpx;
  height: 142rpx;
  bottom: 0;
  right: 24rpx;
  border: 2px solid #fff;
  box-shadow: 0 0 5rpx #fff;
  z-index: 1000;
}
.albumCover .buyerHeadImg image {
  width: 140rpx;
  height: 140rpx;
}
</style>
