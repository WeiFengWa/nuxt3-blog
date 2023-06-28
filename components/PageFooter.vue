<template>
  <div class="flex flex-col items-center justify-center p-4 sm:flex-row">
    <el-link type="primary" :underline="false">
      Copyright © 2023 WeiFengWa
    </el-link>
    <el-divider
      class="!hidden sm:!inline-block"
      direction="vertical"
    ></el-divider>
    <el-link type="success" href="https://beian.miit.gov.cn" target="_blank">
      {{ info.recordNumber }}
    </el-link>
  </div>
</template>

<script setup>
import { useInfoStore } from '@/stores/useInfoStore'
const { info } = toRefs(useInfoStore())
</script>
