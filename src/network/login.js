import login from './request'


export default function userInfoCheck(config) {
  return login({
    method: 'post',
    url: '/login',
    data:{
      username: config.username,
      password: config.password
    }
  })
}
