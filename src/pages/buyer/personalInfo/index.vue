<template>
    <div class="personPage">
        <div class="peronPageBox">
            <personal-info :topImg="sellerTopImg" :topNic="sellerToNice" :topIntr="sellerToIntr"></personal-info>
        </div>
    
    </div>
</template>

<script>
import personalInfo from "@/components/personalInfo";
export default {
  data() {
    return {
      sellerTopImg: "../../../static/image/09.png",
      sellerToNice: "张礼金",
      sellerToIntr: "各种童装衣服、裤子、鞋子批发"
    };
  },
  components: {
    "personal-info": personalInfo
  }
};
</script>

<style>
body {
  background: #f0f0f6;
}

</style>

