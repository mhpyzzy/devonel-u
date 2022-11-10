import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import 'amfe-flexible';

import 'vant/lib/index.css'; // vant 全局样式
import './styles/base.css'; // 自定义样式

const app = createApp(App);

import { Space, Tabbar, TabbarItem, Button, Popup, Icon, Swipe, SwipeItem, Image as VanImage, Field, Badge, Progress, List, Divider, Tab, Tabs, Uploader, Picker,NumberKeyboard } from 'vant';

[Space, Tabbar, TabbarItem, Button, Popup, Icon, Swipe, SwipeItem, VanImage, Field, Badge, Progress, List, Divider, Tab, Tabs, Uploader, Picker,NumberKeyboard].map((com) => {
	app.use(com);
});

app.use(createPinia()).use(router).mount('#app');
