<template>
  <div>
    <slot name="placeholder" v-if="props.loading"></slot>
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  loading: boolean
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>
