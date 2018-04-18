<template>
	<div class="order">
		<form id="order">
			<h2>
				<input type="text" readonly="readonly" name="name" v-model="orderName" />  
				<span class="close "></span>
			</h2>
			<div class="type">
				<input type="text" readonly="readonly" class="square fl" name="color" v-model="goodColor"/>
				<input type="text" readonly="readonly"  class="square fl" name="size" v-model="goodSize"/>
				<span class="fl"><input type="text" readonly="readonly"  v-model="goodStore"/></span>
				<span class="fl"><input type="text" readonly="readonly"  v-model="goodPrice"/></span>
				<div class="clear"></div>
			</div>
			<div class="num">
				<label class="fl">数量:</label>
				<span class="meter fl">{{goodMetter}}</span>
				<span class="change fr">
					<button class="fr add" plain="true" >+</button>
					<input class="fr" type="text" name="num" v-model="goodNum"/>
					<button class="fr reduce" plain="true">-</button>
					<div class="clear"></div>
				</span>
				<div class="clear"></div>
			</div>
			<div class="detail">
			     <label class="fl">备注:</label>
			     <textarea class="fl" form="order" v-bind:placeholder="goodText"></textarea>
				 <div class="clear"></div>
			</div>
			<div class="bottom">
				<input type="hidden" name="storeNum" v-model="store" class="hide"/>
				<input type="hidden" name="showPrice" v-model="price" class="hide"/>
				<button>确定</button>
			</div>	
		</form>
	</div>
</template>
<script>
export default {
  props: [
    "orderName",
    "goodColor",
    "goodSize",
    "goodStore",
    "goodPrice",
    "goodMetter",
    "goodNum",
    "goodText",
    "store",
    "price"
  ]
};
</script>
<style>
.order {
  padding: 20rpx 0rpx 0rpx 0rpx;
  position: fixed;
  left: 0rpx;
  z-index: 3;
  bottom: 0rpx;
  width: 100%;
  background: #ffffff;
}
.order .hide {
  height: 0rpx;
  min-height: 0rpx;
  width: 0rpx;
  opacity: 0;
  display: block;
}
.order h2,
.order .type,
.order .detail {
  padding: 0rpx 36rpx;
}
.order h2 {
  margin-bottom: 34rpx;
}
.order h2 input {
  width: 650rpx;
  vertical-align: middle;
  display: inline-block;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #4a4a4a;
}
.order h2 span {
  vertical-align: middle;
  display: inline-block;
  height: 22rpx;
  width: 22rpx;
  background: url("../../static/image/close.jpg") no-repeat center;
  background-size: contain;
}
.order .type {
  padding-bottom: 34rpx;
  border-bottom: 2rpx solid #f3f3f5;
}
.order .type .square {
  margin-right: 66rpx;
  border: 2rpx solid #e1e1e1;
  display: block;
  vertical-align: middle;
  width: 80rpx;
  padding: 6rpx 0rpx;
  font-family: PingFangSC-Regular;
  font-size: 20rpx;
  color: #9b9b9b;
  text-align: center;
}
.order .type span {
  line-height: 34rpx;
  display: block;
  width: 180rpx;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #9b9b9b;
}
.order .num label,
.order .detail label {
  margin-right: 20rpx;
  font-family: PingFangSC-Regular;
  font-size: 32rpx;
  color: #4a4a4a;
}
.order .num {
  padding: 50rpx 36rpx;
  border-bottom: 2rpx solid #f3f3f5;
}
.order .num .change {
  border: 2rpx solid #aab2bc;
  border-radius: 10rpx;
}
.order .num label {
  line-height: 70rpx;
}
.order .num .meter {
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  color: #9b9b9b;
  line-height: 70rpx;
}
.order .num button {
  padding: 0rpx;
  font-size: 50rpx;
  text-align: center;
  display: block;
  width: 70rpx;
  height: 70rpx;
  line-height: 70rpx;
  border: none;
}
.order .num button.reduce {
  color: #aab2bc;
  border-right: 2rpx solid #aab2bc;
}
.order .num button.add {
  border-left: 2rpx solid #aab2bc;
}
.order .num input {
  display: block;
  width: 100rpx;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;
  vertical-align: middle;
  line-height: 70rpx;
  font-family: PingFangSC-Regular;
  font-size: 32rpx;
  color: #4a4a4a;
}
.order .detail {
  padding: 24rpx 36rpx 46rpx 36rpx;
}
.order .detail textarea {
  border-radius: 10rpx;
  font-family: PingFangSC-Regular;
  font-size: 24rpx;
  border: 2rpx solid #d2dae5;
  padding: 18rpx;
}
.order .bottom button {
  height: 100rpx;
  line-height: 100rpx;
  background: #e7563c;
  font-family: PingFangSC-Regular;
  font-size: 36rpx;
  color: #ffffff;
}
</style>