<template>
    <div class="newMessage">
        <div class="newMessageBox">
            <span class="firstSpan">您有{{newsCount}}条消息
                 <span class="twoSpan">&gt;</span>
            </span>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      newsCount: 2
    };
  },
  mounted() {
    this.$emit("unreadMessage", this.newsCount);
  }
};
</script>

<style>
.newMessage {
  height: 90rpx;
  text-align: center;
  margin-left: 20rpx;
  margin-right: 24rpx;
  border-bottom: 1px solid #ccc;
}
.newMessage .newMessageBox {
  height: 90rpx;
  margin-top: 20rpx;
}
.newMessage .firstSpan {
  display: inline-block;
  background: #4a4a4a;
  border-radius: 3px;
  color: #fff;
  font-size: 24rpx;
  width: auto;
  height: 50rpx;
  line-height: 50rpx;
  text-align: center;
  padding: 8rpx 0 8rpx 22rpx;
}
.twoSpan {
  padding-right: 22rpx;
}
</style>
