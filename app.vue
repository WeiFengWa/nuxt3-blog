<template>
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<script setup lang="ts">
import { useInfoStore } from '@/stores/useInfoStore'
const { getInfo } = useInfoStore()

getInfo()

console.log(
  '%c 微风哇 %c By 微风 %c',
  'background:#e9546b ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff; padding:5px 0;',
  'background:#ec8c69 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000; padding:5px 0;',
  'background:transparent',
)
</script>
