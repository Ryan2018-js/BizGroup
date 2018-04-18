<template>
	<div class="c">
		<!-- 拥有发布照片--> 
		<div  v-for="(item,index) in releaseAll" :key="index">
			<releaseItem :name="item.rName" :share="item.rShare" :time="item.rTime" :release="item.rRelease"></releaseItem>
		</div>
		<!--没有发布照片-->
		<noContent  :noImg="noImg" :noText="noText"></noContent>
		<footTemp></footTemp>
		<foot></foot>
	</div>
	
</template>
<script>
import releaseItem from "@/components/releaseItem";
import noContent from "@/components/noContent";
import foot from "@/components/foot";
import footTemp from "@/components/footTemp";
export default {
  data() {
    return {
      noImg: "../../../static/image/bgTest.jpg",
      noText: "您的发布墙为空，马上发布吧",
      releaseAll: [
        {
          rName: "最新童装 新款上市",
          rShare: "###",
          rTime: "0820",
          rRelease: [
            {
              url: "../../../static/image/test1.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test2.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test3.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test3.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test3.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test3.jpg",
              person: "22",
              chat: "###"
            }
          ]
        },
        {
          rName: "最新女装 新款上市",
          rShare: "###",
          rTime: "0920",
          rRelease: [
            {
              url: "../../../static/image/test1.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test2.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test3.jpg",
              person: "22",
              chat: "###"
            }
          ]
        },
        {
          rName: "最新男装 新款上市",
          rShare: "###",
          rTime: "01120",
          rRelease: [
            {
              url: "../../../static/image/test1.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test2.jpg",
              person: "22",
              chat: "###"
            },
            {
              url: "../../../static/image/test3.jpg",
              person: "22",
              chat: "###"
            }
          ]
        }
      ]
    };
  },

  components: {
    releaseItem,
    noContent,
    foot,
    footTemp
  },

  methods: {},

  created() {}
};
</script>
<style>
page {
  background: #f9fafb;
}
</style>