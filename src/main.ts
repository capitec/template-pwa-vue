import { createApp, h } from 'vue';
import AppShell from './AppShell.vue';

import './assets/main.css';

createApp({
    render: () => h(AppShell)
}).mount('#app');
