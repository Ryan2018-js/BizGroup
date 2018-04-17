<template>
    <div class="sellerRelease">
        <div class="toSellerInfo">
            <top-info :topImg="sellerTopImg" :topNic="sellerToNice" :topIntr="sellerToIntr" :showGoodsAlb="sellerShowGoods"></top-info>
        </div>
    </div>
</template>

<script>
import sellerTopInfo from "@/components/sellerReleaseInfo.vue";
export default {
  data() {
    return {
      sellerTopImg: "../../../static/image/09.png",
      sellerToNice: "张礼金",
      sellerToIntr: "各种童装衣服、裤子、鞋子批发",
      sellerShowGoods: [
        {
          showDesc: "个性童装新款上市，舒适便宜",
          releaseTime: "8:50",
          shareIconBtn: "../../../static/image/share.png",
          sellerReleaseAlbum: [
            {
              url: "../../../static/image/01.png"
            },
            {
              url: "../../../static/image/02.png"
            },
            {
              url: "../../../static/image/03.png"
            },
            {
              url: "../../../static/image/04.png"
            },
            {
              url: "../../../static/image/05.png"
            },
            {
              url: "../../../static/image/06.png"
            },
            {
              url: "../../../static/image/07.png"
            },
            {
              url: "../../../static/image/08.png"
            }
          ]
        },
        {
          showDesc:
            "新款中童装描述文字02,看看看看看看坎坷看客看看看看及环境开会艰苦好看交换空间交换空间",
          releaseTime: "9:20",
          shareIconBtn: "../../../static/image/share.png",
          sellerReleaseAlbum: [
            {
              url: "../../../static/image/01.png"
            },
            {
              url: "../../../static/image/02.png"
            },
            {
              url: "../../../static/image/03.png"
            },
            {
              url: "../../../static/image/04.png"
            },
            {
              url: "../../../static/image/05.png"
            },
            {
              url: "../../../static/image/06.png"
            },
            {
              url: "../../../static/image/07.png"
            },
            {
              url: "../../../static/image/08.png"
            }
          ]
        }
      ]
    };
  },
  components: {
    "top-info": sellerTopInfo
  }
};
</script>

<style scoped>
.sellerRelease {
  border-top: 1px solid #ccc;
}
</style>

