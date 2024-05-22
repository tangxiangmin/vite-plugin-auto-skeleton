<script setup lang="ts">
import { ref, onMounted } from "vue";
const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div>
    <div v-if="loading">__SKELETON_DEMO_CONTENT__</div>
    <div data-skeleton-root="DEMO" v-else>
      <h1>标题</h1>
      <p>内容内容内容</p>
    </div>
  </div>
</template>
