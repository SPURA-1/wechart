import axios from 'axios'
import Vue from 'vue'
// 配置axios实例
// URL(绝对的) = baseURL + url(相对的)
const service = axios.create({
  // baseURL : "http://127.0.0.1:80",
  //配置对象
  baseURL: 'http://47.115.231.184:5555',
  // baseURL: '/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
});


// 没有将 request 实例设置为 Vue 的原型属性，所以需要在每个组件中导入和使用。
export default service