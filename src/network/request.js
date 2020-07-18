/**
 * 发送请求的axios框架配置
 */

import originConst from 'axios'

export default function request(config){
  const instance = originConst.create(
    {
      //基本路径
      baseURL: 'http://localhost:8081',
      //超时时间
      timeout: 5000,
      data: {}
    }
  )

  instance.interceptors.request.use(config => {
    console.log("请求拦截处")
    return config
  },error => {
    console.log(error)
  }
  )

  instance.interceptors.response.use(config=>{
    console.log("响应拦截处")
    return config
  },error => {
    console.log(error)
  })


  return instance(config)
}
