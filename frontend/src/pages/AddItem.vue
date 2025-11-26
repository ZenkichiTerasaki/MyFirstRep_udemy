<script setup lang="ts">
import { ref } from 'vue';
import { postCreate } from '../api/items';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const price = ref(0);
const description = ref('');

const submitItem = async () => {
  const item = {
    name: name.value,
    price: price.value,
    description: description.value,
  };

  try {
    await postCreate(item);
    alert('商品を追加しました！');
    router.push('/'); // 商品一覧へ
  } catch (e) {
    alert('商品追加に失敗しました.もう一度ログインしてください');
    router.push('/login');
  }
};
</script>

<template>
  <div>
    <h2>商品追加</h2>

    <form @submit.prevent="submitItem">

      <div>
        <label>商品名：</label>
        <input v-model="name" type="text" required />
      </div>

      <div>
        <label>価格：</label>
        <input v-model.number="price" type="number" required />
      </div>

      <div>
        <label>説明：</label>
        <textarea v-model="description"></textarea>
      </div>

      <button type="submit">追加する</button>
    </form>
  </div>
</template>
