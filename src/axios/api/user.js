import axiosApi from '@/axios/config'

/**
 * 用户登录
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.password 密码
 * @param {Fn} cb 回调函数
 * @return
 */
export const login = params => {
  return axiosApi(
    {
      url: '/admins/login',
      method: 'put'
    },
    params
  )
}

/**
 * 用户登录
 * @param {String} url 接口url
 * @param {String} method 请求方式
 * @param {Obj} params 参数
 *              params.username 用户名
 *              params.type 找回密码type: 'modify_pwd'
 * @param {Fn} cb 回调函数
 * @return
 */
export const sendCode = params => {
  return axiosApi(
    {
      url: '/sms/sendcode',
      method: 'post'
    },
    params
  )
}
