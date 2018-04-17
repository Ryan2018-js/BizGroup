<template>
   <div class="sellerShow">
        <div class="albumCoverPage">
            <album-cover  :albumP=" buyerAlbumPage" :headImage="buyerHeadImg" :getNews="getNews"></album-cover>
        </div>
        <div  @click="content">
            <new-message @unreadMessage="newNotice" v-if="hasNews"></new-message>
        </div>       
       <div v-for="(item,index) in sellerShowInfo" :key="index">
           <seller-show :tx="item.sellerTouxiang" :nick="item.sellerNickName" :desc="item.sellerShowDesc" :tim="item.sellerReleaseTime" :albu="item.sellerReleaseAlbum" :shareIconBtn="item.shareIconBtn"></seller-show>
       </div>
   </div>
</template>



<script>
import albumCover from "@/components/albumCover";
import sellerShow from "@/components/sellerShow";
import newMessage from "@/components/newMessage";
export default {
  data() {
    return {
      hasNews:true,
      getNews:0,
      buyerAlbumPage:"../../../static/image/albumPage.jpg",
      buyerHeadImg:"../../../static/image/10.jpg",
      sellerShowInfo: [
        {
          sellerTouxiang: "../../../static/image/09.png",
          sellerNickName: "艺优童装批发",
          sellerShowDesc: "个性童装新款上市，舒适便宜",
          sellerReleaseTime: "8:50",
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
          sellerTouxiang: "../../../static/image/09.png",
          sellerNickName: "艺优童装批发",
          sellerShowDesc: "个性童装新款上市，最新款",
          sellerReleaseTime: "8:50",
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
    "seller-show": sellerShow,
    "new-message":newMessage,
    "album-cover":albumCover
  },
  methods:{
    newNotice(newsCount){
      this.getNews = newsCount;
      if(newsCount==0){
        this.hasNews = false;
      }
     
    }
  },
  mounted(){
   
  }
};
</script>

<style scope>

</style>
