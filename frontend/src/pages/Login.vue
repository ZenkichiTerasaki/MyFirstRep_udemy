<template>
<div class = "login">
<h1>ログイン</h1>

<form @submit.prevent="signin">
<input v-model="email" type="email" placeholder="メールアドレス" />
<input v-model="password" type="password" placeholder="パスワード" />
<button type="submit">ログイン</button>
</form>

<p>{{message}}</p>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import { postSignin } from '../api/auth';

const email = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();

const signin = async () => {
  try {
    const result = await postSignin(
      {
        email: email.value,
        password: password.value  
      });
    message.value = 'ログイン成功！';
    
    const token = (result as any).access_token ?? result;
    localStorage.setItem('token', JSON.stringify(token));

    console.log('token:', token);
    router.push('/');
  } catch (e) {
    message.value = 'ログイン失敗';
  }
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 50px auto;
}
</style>


