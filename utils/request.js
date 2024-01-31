import axios from 'axios'
import adapter from 'axios-miniprogram-adapter'

const api = "http://47.115.231.184:5555"
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 配置axios实例
// URL(绝对的) = baseURL + url(相对的)
const service = axios.create({
  baseURL: api,
  // 在微信开发者工具环境中，axios，http是发不出去的，没有跨域，vue.config.js文件也是无效的
  // 基于axios-miniprogram-adapter包给axios中添加一个适配器
  // 运行到浏览器时，下面一行注释掉，axios时可以在浏览器中正常使用的，不需要适配器
  adapter: adapter,
  timeout: 5000,
});


export default service