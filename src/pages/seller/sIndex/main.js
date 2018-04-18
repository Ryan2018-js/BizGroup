import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '私友圈-卖家',
    navigationBarTextStyle: 'black',
    backgroundColor: '#eeeeee'
  }
}
