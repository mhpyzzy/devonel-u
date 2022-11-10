<template>
	<div class="center">
		<div class="header">
			<van-image fit="fill" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
			<div class="content">
				<div class="f14">总资产(BTC)</div>
				<div class="f26">1,347.7 <span class="f14">BTC</span></div>
				<div class="f14">≈ $ 13,420,298.35</div>
			</div>
			<div class="author">
				<div class="author-left">
					<van-image class="avatar" round src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
					<span class="name">会说话的肘子</span>
				</div>
				<van-icon name="edit" />
			</div>
		</div>
		<van-tabs v-model:active="active">
			<van-tab>
				<template #title>
					<div class="tab_title">收入</div>
				</template>
				<v-chart class="chart" :option="option" />
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">数据</div>
				</template>
				内容
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">趋势</div>
				</template>
				内容
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">财务</div>
				</template>
				内容
			</van-tab>
		</van-tabs>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

const show = ref(false);
const showPopup = () => {
	show.value = true;
};

const option = ref({
	// title: {
	// 	text: 'Traffic Sources',
	// 	left: 'center',
	// },
	// tooltip: {
	// 	trigger: 'item',
	// 	formatter: '{a} <br/>{b} : {c} ({d}%)',
	// },
	// legend: {
	// 	orient: 'vertical',
	// 	left: 'left',
	// 	data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
	// },
	series: [
		{
			name: 'Traffic Sources',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [
				{ value: 335, name: '付费阅读1 50%' },
				{ value: 310, name: '付费阅读2' },
				{ value: 234, name: '付费阅读3' },
				{ value: 135, name: '付费阅读4' },
				{ value: 1548, name: '付费阅读5' },
			],
		},
	],
});
</script>

<style lang="less" scoped>
.center {
	background: #f6f6f6;
	// min-height: 100vh;
	.header {
		position: relative;
		height: 200px;
		.van-image {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.content {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.4);
			color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.f14 {
				font-size: 14px;
			}
			.f26 {
				font-size: 26px;
				font-weight: bold;
			}
		}
		.author {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			padding: 0 20px;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: -14px;

			.author-left {
				display: flex;
				align-items: center;
				.avatar {
					width: 68px;
					height: 68px;
					margin-right: 12px;
				}
				.name {
					font-size: 16px;
				}
			}
			.van-icon-edit {
				font-size: 24px;
			}
		}
	}

	/deep/.van-tabs__wrap {
		height: 90px;
	}
	.van-tabs--line {
		margin: 0 -14px !important;
		/deep/.van-tabs__nav--line {
			background: transparent;
		}
		/deep/.van-tabs__line {
			display: none;
		}
		/deep/.van-tabs__content {
			background: #fff;
			min-height: 200px;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			padding: 10px;
		}
	}
	.tab_title {
		padding: 4px 10px;
		background: transparent;
		border-radius: 40px;
		color: @--color-2;
		font-size: 14px;
	}
	.van-tab--active {
		.tab_title {
			background: @--color-2;
			color: #fff;
		}
	}

	.chart {
		width: 100vw;
		height: 300px;
	}
}
</style>
