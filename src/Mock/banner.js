const Mock = require('mockjs')

let bannerList = [
  {
    imgUrl: 'https://static.maizuo.com/v5/upload/dfb943b2b8771769a9adef95459fe2ae.jpg'
  },
  {
    imgUrl: 'https://static.maizuo.com/v5/upload/dfb943b2b8771769a9adef95459fe2ae.jpg'
  }
]
// 请求该url，就可以返回newsList
Mock.mock('/mock/banner', bannerList) // 后面讲这个api的使用细节