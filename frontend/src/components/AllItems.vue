<!-- src/components/ItemTable.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { delete_, getAllItems, Items, update_ } from '../api/items';

const items = ref<Items[]>([]);

// 初回取得
onMounted(async () => {
  items.value = await getAllItems();
});
</script>

<template>
  <div class="table-wrapper">
    <h2>商品一覧</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>価格</th>
          <th>ステータス</th>
          <th>作成日</th>
          <th>状態更新</th>
          <th>削除</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.status }}</td>
          <td>{{ new Date(item.createdAt).toLocaleString() }}</td>
            <td><button @click="update_(item.id)">更新</button></td>
          <td><button @click="delete_(item.id)">削除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px 12px;
}

th {
  background-color: #f8f8f8;
  text-align: left;
}
</style>
