import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/Login.vue';
import HomePage from '../pages/HomePage.vue';
import AddItem from '@/pages/AddItem.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/addItem', component: AddItem },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
