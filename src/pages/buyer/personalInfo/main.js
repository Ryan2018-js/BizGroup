import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()


export default{
    config:{
        navigationBarBackgroundColor: "#ffffff",
        navigationBarTitleText:'个人信息',
        navigationBarTextStyle:'black',
        backgroundColor: "#ffffff",
    }
}