import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{
					path: '',
					name: 'read',
					alias: ['read'],
					// route level code-splitting
					// this generates a separate chunk (about.[hash].js) for this route
					// which is lazy-loaded when the route is visited.
					component: () => import(/* webpackChunkName: "read" */ '../views/read/index.vue'),
				},
			],
		},
		// {
		// 	path: '/m1',
		// 	name: 'm1',
		// 	component: () => import(/* webpackChunkName: "m1" */ '../views/message/m1.vue'),
		// },
	],
});

export default router;
