<template>
  <div class="sellerInfo">
      <seller-info :topImg="sellerTopImg" :topNic="sellerToNice" :topIntr="sellerToIntr" :sellerAddress="sellerAddress" :sellerPhone="sellerPhone"></seller-info>
  </div>
</template>

<script>
import sellerInfo from "@/components/sellerInfo";
export default {
  data() {
    return {
      sellerTopImg: "../../../static/image/09.png",
      sellerToNice: "张礼金",
      sellerToIntr: "各种童装衣服、裤子、鞋子批发",
      sellerAddress: "杭州市萧山区中栋国际1栋2001",
      sellerPhone: "0571-86845844"
    };
  },
  components: {
    "seller-info": sellerInfo
  }
};
</script>
<style sceoped>
body {
  background: #f0f0f6;
}
</style>
