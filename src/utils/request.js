import axios from 'axios'
import notification from 'ant-design-vue/es/notification'
import md5 from 'js-md5'
import { VueAxios } from './axios'
import { PRIVATE_KEY } from '@/config/global'
import { Decrypt } from '@/utils/encry'
import Base64 from '../config/base64'

// 创建 axios 实例
const service = axios.create({
  baseURL: '', // api base_url
  timeout: 1000 * 60 * 3 // 请求超时时间
})

service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.transformRequest = [function (data) {
  data = JSON.stringify(data)
  return data
}]
const err = (error) => {
  if (error.data) {
    const data = error.data
    if (data.code === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (data.StatusCode === 2164260879) {
      notification.error({
        message: '未登录',
        description: '登录验证失效'
      })
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = '157AB72E766488BACB0658FD94C58774'
  const TimeStamp = new Date().getTime().toString().substr(0, 10)
  const data = `Token=${token}+_t=${TimeStamp}+_k=${new Base64().decode(Decrypt(PRIVATE_KEY))}`
  // const data1 = `Token=+_t=1592484243+_k=58E501B86E848F756BCCA64C5773B451`
  // console.log(md5(data1.toUpperCase()).toUpperCase())
  const signature = md5(data.toUpperCase()).toUpperCase()
  // console.log(signature)
  config.headers['TimeStamp'] = TimeStamp
  config.headers['signature'] = signature
  if (config.headers['Content-Type'] === 'multipart/form-data') {
    config.transformRequest = [function (data) {
      // 对 data 进行任意转换处理
      return data
    }]
  }
  if (token) {
    config.headers['Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  // 处理公共参数
  if (token) {
    config.data['UserId'] = 477
    config.data['SystemType'] = 1
    config.data['Source'] = 1
  } else {
    config.data['SystemType'] = 1
    config.data['Source'] = 1
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  // 未登录
  // 0871 无查看权限
  if (response.data.StatusCode === 2164260879 || response.data.StatusCode === 2164260871) {
    return err(response)
  }
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
