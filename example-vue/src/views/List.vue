<script setup lang="ts">
import {ref, onMounted} from "vue";
import Card from './components/Card.vue'

const loading = ref(true);
const list = ref<any>([]);

function sleep(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchList() {
  await sleep(1000)
  list.value = [1, 2, 3, 4, 5, 6, 7, 8]
  loading.value = false
}

onMounted(() => {
  fetchList()
})

</script>

<template>
  <div class="page">
    <div v-if="loading">__SKELETON_APP_CONTENT__</div>
    <div class="card-list card-list-knowledge" data-skeleton-root="APP" data-skeleton-type="list"
         data-skeleton-list-num="5">
      <Card v-for="item in list" :key="item"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$knowledge-card-color: #06dcbf;
$action-card-color: #ff9212;

.card-list {
  margin: 0 auto;
  padding: 10px;

  &-knowledge {
    --base-color: #{$knowledge-card-color};
    --background-color: linear-gradient(90deg, #00dabc 0%, #37ead2 100%);
  }

  &-action {
    --base-color: #{$action-card-color};
    --background-color: linear-gradient(90deg, #ff9f63 0%, #fea94d 100%);
  }
}

</style>
