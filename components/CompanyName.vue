<script setup lang="ts">
const { global } = useAppConfig()
</script>

<template>
  <div>
    <pre>{{ global.name }}</pre>
  </div>
</template>
