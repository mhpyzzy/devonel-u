<template>
	<div class="home">
		<van-tabbar route>
			<van-tabbar-item replace to="/read">阅读</van-tabbar-item>
			<van-tabbar-item replace to="/create">金融</van-tabbar-item>
			<van-tabbar-item replace to="/center">我</van-tabbar-item>
		</van-tabbar>
		<router-view />
	</div>
</template>

<script setup>
// import { useFullscreen } from '@vueuse/core';
// import { onBeforeMount, onMounted } from 'vue';
// const { isFullscreen, enter, exit, toggle } = useFullscreen();
// onMounted(async () => {
// 	toggle();
// });
</script>

<style lang="less" scoped>
.home {
	padding-bottom: 50px;
	overflow: hidden;
}
</style>
