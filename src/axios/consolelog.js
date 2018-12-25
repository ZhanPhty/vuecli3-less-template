if (process.env.NODE_ENV === 'production') {
  // 为生产环境修改配置...
  console.log('%c呀！被发现了~', 'color:red; font-size: 26px;')
} else if (process.env.NODE_ENV === 'development') {
  // 为开发环境修改配置...
  console.log('%c当前开发环境\nby：zhanpthy\n461632311@qq.com', 'color:red')
} else if (process.env.NODE_ENV === 'testing') {
  // 为测试环境修改配置...
  console.log('%c当前测试环境\nby：zhanpthy\n461632311@qq.com', 'color:red')
}

// 示例
// import { login } from '@/axios/api/user'
//
// return new Promise((resolve, reject) => {
//   login(data)
//     .then(res => {
//       if (res.code === 200) {
//
//       }
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
// })
