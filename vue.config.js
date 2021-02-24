module.exports = {
    devServer: {
			port: 8888,
			open: true,
			proxy: {
				// '/v1': {
				// 		target: "https://v1.hitokoto.cn/",// 目标,代理到指定地址
				// 		changeOrigin: true, // 是否将主机头的原点更改为目标的url地址
				// 		pathRewrite: { // 转发地址
				// 				'/v1': '' // 将标识清空
				// 		}
				//  }
			},
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/Blog/' : './',
    lintOnSave: false,
}