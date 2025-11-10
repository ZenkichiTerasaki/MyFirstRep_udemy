<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAllItems, Items } from '../api/items';

const items = ref<Items[]>([]);

onMounted(async () => {
  items.value = await getAllItems();
});
</script>

<template>
    <div>
    <h2>アイテム一覧</h2>
        <li v-for="item in items" :key="item.id">
            {{ item.status }}: {{ item.name }}
        </li>
    </div>

</template>

<style scoped>
</style>