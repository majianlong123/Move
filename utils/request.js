import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'

const ConfigBaseURL = 'https://localhost:8080/'
const request = axios.create({
  // 仅在开发环境走代理
	timeout: 7000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  baseURL: ConfigBaseURL
})

request.interceptors.response.use(
	res => {
		if(res.status === 200) {
			return res.data
		} else {
			return Promise.reject(res.data)
		}
	}, 
	error => {
		console.log('错误', error)
		// const msg = error.Message !== undefined ? error.Message : '',
		return Promise.reject(error)
	}
)

Vue.prototype.$http = request

export default request