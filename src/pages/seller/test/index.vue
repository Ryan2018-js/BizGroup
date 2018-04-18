<template>
	<div>
		<!-- <side :url="myUrl" :name="myName" :intro="myIntro" :address="myAdd" :tel="myTel" :lead="myLead" ></side> -->
		<!-- <myMask></myMask> -->
		<!-- <order :orderName="orderName" :goodColor="goodColor" :goodSize="goodSize" :goodStore="goodStore" :goodPrice="goodPrice" :goodMetter="goodMetter" :goodNum="goodNum" :goodText="goodText" :store="store" :price="price"></order>  -->
		<foot></foot>
	</div>	
</template>
<script>
import side from "@/components/side";
import myMask from "@/components/myMask";
import order from "@/components/order";
import foot from "@/components/foot";
export default {
  data() {
    return {
      //				side
      myUrl: "../../../static/image/pic_test.png",
      myName: "wangxue",
      myIntro: "我是一个小可爱啊",
      myAdd: "天使街23号",
      myTel: "18069775418",
      myLead: [
        { name: "我的订单", url: "###", isnews: "no", hasnews: "" },
        { name: "消息列表", url: "###", isnews: "news", hasnews: "hasnews" },
        { name: "切换至卖家身份", url: "###", isnews: "no", hasnews: "" }
      ],
      //				order
      orderName: "个性童装，新款上市，舒适便宜",
      goodColor: "红色",
      goodSize: "M",
      goodStore: "库存：1200",
      goodPrice: "挂牌价：￥120",
      goodMetter: "手",
      store: 1200,
      price: 120,
      goodNum: "1",
      goodText: "请输入相关信息",
      motto: "欢迎来到测试页面",
      userInfo: {}
    };
  },

  components: {
    side,
    myMask,
    order,
    foot
  },

  methods: {},

  created() {}
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}
.userinfo-nickname {
  color: #aaa;
}
.usermotto {
  margin-top: 150px;
}
.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>