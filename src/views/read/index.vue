<template>
	<div class="center">
		<van-tabs v-model:active="active">
			<van-tab>
				<template #title>
					<div class="tab_title">收藏</div>
				</template>
				<Collect></Collect>
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">精选</div>
				</template>
				<Choice></Choice>
			</van-tab>
			<van-tab>
				<template #title>
					<div class="tab_title">活动</div>
				</template>
				内容
			</van-tab>
		</van-tabs>
	</div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
import Collect from './collect.vue';
import Choice from './choice.vue';
const show = ref(false);
const showPopup = () => {
	show.value = true;
};
</script>

<style lang="less" scoped>
.center {
	background: #f6f6f6;

	.van-tabs--line {
		/deep/.van-tabs__nav--line {
			background: transparent;
		}
		/deep/.van-tabs__line {
			background: @--color-2;
		}
		/deep/.van-tabs__content {
			background: #fff;
		}
	}
	.tab_title {
		color: @--color-3;
		font-size: 18px;
	}
	.van-tab--active {
		.tab_title {
			color: @--color-1;
		}
	}
}
</style>
