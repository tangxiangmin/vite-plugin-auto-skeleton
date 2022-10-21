<template>
  <div>
    <div v-if="loading">__SKELETON_HOME_CONTENT__</div>
    <div data-skeleton-root="HOME">
      <h1>HOME</h1>
      <ul>
        <li v-for="item in list" :key="item">
          <router-link :to="item">{{ item }}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script lang="ts" setup>
const list = ['/list', '/media','/demo']
const loading = false

</script>

<style scoped lang="scss">
.test1, .test2 {
  color: red;
}

</style>
