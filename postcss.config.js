module.exports = {
	plugins: {
		// tailwindcss: {},
		autoprefixer: {},
		'postcss-pxtorem': {
			rootValue: 37.5, //你在html节点设的font-size大小
			unitPrecision: 2, //转rem精确到小数点多少位
			propList: ['*'],
			selectorBlackList: ['swiper'], // 要忽略并保留为px的选择器
			replace: true, // 布尔值）替换包含REM的规则，而不是添加回退
			mediaQuery: false, //媒体查询内的px是否转换
			minPixelValue: 1, //小于指定数值的px不转换
		},
	},
};
