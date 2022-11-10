<template>
	<div class="choice">
		<van-swipe>
			<van-swipe-item v-for="item in state.list" :key="item.id">
				<div class="choice-swipe">
					<div class="imgbox">
						<van-image fit="fill" :src="item.cover" />
						<div class="overlay">
							<div class="mark">DAO推荐</div>
							<div class="name">夜的命名术</div>
							<div class="tags">
								<div>都市</div>
								<div>异术超能</div>
								<div>连载</div>
								<div>签约</div>
								<div>VIP</div>
							</div>
						</div>
					</div>
					<div class="desc">蓝与紫的霓虹中，浓密的钢铁苍穹下，数据洪流的前端，是科技革命之后的世界，也是现实与虚幻的分界</div>
				</div>
			</van-swipe-item>
		</van-swipe>
		<div class="recommend">
			<div class="titlebar">
				<div>
					<van-icon name="fire" />
					<span>&nbsp;火爆推荐</span>
				</div>
				<van-icon name="ellipsis" />
			</div>
			<div class="item">
				<div class="content">
					<van-image fit="fill" src="https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg" />
					<div class="text">
						<div class="title">全民领主:我的兵种变异了</div>
						<div class="desc">自己招募出来的小树苗，它会变异！</div>
					</div>
				</div>
				<div class="divied"></div>
				<div class="other">
					<div>[版权包] <span class="green">QLC/USDT 24.5 +20%</span></div>
					<div>[藏品] 楚军归 <span class="black"># 1</span> 以 <span class="black">23.5</span> ETH 成交</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
const state = reactive({
	new_name: '',
	list: [
		{
			id: '1',
			cover: 'https://pic.huitu.com/pic/20220113/2914792_20220113120552375050_0.jpg',
			name: '夜的命名术',
			activity: 1,
			collection: 1,
			copyright: 0,
		},
		{
			id: '1',
			cover: 'https://pic3.ntimg.cn/pic/20220218/33810373_141012571121_4.jpg',
			name: '夜的命名术',
			activity: 1,
			collection: 1,
			copyright: 0,
		},
	],
});
</script>

<style lang="less" scoped>
.choice {
	background: #f6f6f6;
	min-height: 100vh;
	padding: 14px;
	.van-swipe {
		height: 300px;
	}
	&-swipe {
		height: 100%;
		background: #f0f0f0;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(#111d30, 10%);

		.imgbox {
			position: relative;
			height: 200px;
			.overlay {
				position: absolute;
				top: 0;
				left: 0;
				color: #fff;
				background: rgba(0, 0, 0, 0.5);
				width: 100%;
				height: 100%;
				padding: 14px 0;

				.mark {
					font-size: 12px;
					margin-left: 14px;
				}
				.name {
					font-size: 24px;
					font-weight: bold;
					margin-left: 14px;
				}

				.tags {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					position: absolute;
					bottom: 10px;
					padding: 0 14px;

					> div {
						height: 28px;
						line-height: 28px;
						padding: 0 8px;
						border-radius: 10px;
						background: #fff;
						color: @--color-3;
						font-size: 14px;
					}
				}
			}
			.van-image {
				width: 100%;
				height: 100%;
			}
		}
		.desc {
			height: 100px;
			background: #fff;
			font-size: 14px;
			padding: 14px;
		}
	}

	.recommend {
		.titlebar {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 14px;
			font-size: 24px;
			font-weight: bold;

			.van-icon-fire {
				color: @--red;
			}
		}

		.item {
			background: #fff;
			border-radius: 10px;
			.content {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 6px;
				.van-image {
					width: 90px;
					height: 90px;
					border-radius: 10px;
					overflow: hidden;
				}
				.text {
					flex: 1;
					margin-left: 8px;

					.title {
						color: @--color-1;
						font-weight: bold;
					}
					.desc {
						font-size: 14px;
					}
				}
			}
			.divied {
				background: #eaeaea;
				height: 1px;
			}
			.other {
				padding: 6px;
				font-size: 12px;
				color: @--color-3;
				.green {
					color: @--green;
				}
				.black {
					color: #000;
				}
			}
		}
	}
}
</style>
