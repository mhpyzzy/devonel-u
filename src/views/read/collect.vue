<template>
	<div class="collect">
		<div class="tool">
			<div class="left">
				<van-icon name="calendar-o" />
				<div class="text">签到</div>
			</div>
			<van-icon name="apps-o" />
		</div>
		<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<div class="item" v-for="(item, index) in list" :key="index">
				<van-badge :content="5">
					<van-image fit="cover" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
				</van-badge>
				<div class="content">
					<div>
						<div>
							<div class="name">天阿降临</div>
							<div class="author">烟雨江南</div>
						</div>
						<div>
							<van-icon name="chart-trending-o" />&nbsp;
							<van-icon name="gem-o" />
						</div>
					</div>
					<div>
						<div class="section">第1024章 他非常喜欢你</div>
						<div class="time">3小时前</div>
					</div>
				</div>
			</div>
		</van-list>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const onLoad = () => {
	// 异步更新数据
	// setTimeout 仅做示例，真实场景中一般为 ajax 请求
	setTimeout(() => {
		for (let i = 0; i < 10; i++) {
			list.value.push(list.value.length + 1);
		}

		// 加载状态结束
		loading.value = false;

		// 数据全部加载完成
		if (list.value.length >= 40) {
			finished.value = true;
		}
	}, 1000);
};
</script>

<style lang="less" scoped>
.collect {
	background: #f6f6f6;

	.tool {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px;
		.van-icon {
			font-size: 24px;
		}
		.van-icon-calendar {
			color: @--red;
		}
		.left {
			display: flex;
			align-items: flex-end;
			.text {
				margin-left: 4px;
				font-size: 12px;
			}
		}
	}

	.item {
		background: #fff;
		margin-bottom: 14px;
		padding: 10px;
		border-radius: 10px;
		display: flex;
		align-items: center;

		.van-image {
			width: 90px;
			height: 90px;
			border-radius: 10px;
			overflow: hidden;
		}
		.content {
			height: 100px;
			flex: 1;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			> div {
				display: flex;
				justify-content: space-between;
				color: @--color-3;
			}
			.name {
				color: @--color-1;
				font-weight: bold;
			}
			.author {
				font-size: 12px;
			}
			.van-icon {
				font-size: 18px;
			}
			.section {
				font-size: 12px;
			}
			.time {
				font-size: 12px;
			}
		}
	}
}
</style>
