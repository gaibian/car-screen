import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
const CancelToken = axios.CancelToken;

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    //console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了; 登录失效了
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug 刷新页面重置所有数据
          })
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default {
  //封装一些get post方法
  get(url, param) {
    return new Promise((resolve, reject) => {
      let params = {  //对于get请求 参数需要拼接到url地址上需要加一层params
        params:param
      }
      service.get(url, params).then(res => {
        resolve(res);
      },response => {
        // 本身就是promise对象
        resolve(response)
        Message({
          message: '请求超时,请检查网络',
          type: 'warning',
          duration: 5 * 1000
        })
      })
    })
  },
  post(url, param) {
      // 可能需要qs来格式化请求参数
      return new Promise((resolve, reject) => {
          service({
              method: 'post',
              url,
              data: param,
              cancelToken: new CancelToken(c => {
                  cancel = c
              })
          }).then(res => {
              resolve(res);
          }, (response) => {
              resolve(response);
              Message({
                message: '请求超时,请检查网络',
                type: 'warning',
                duration: 5 * 1000
              })
          })
      })
  },
}

// export default service
