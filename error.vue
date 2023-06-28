<template>
  <h1>{{ error.statusCode }}</h1>
  <div>{{ error.message }}</div>
  <el-button type="primary" @click="handlerError">返回主页</el-button>
</template>

<script setup>
defineProps({
  error: Object,
})

const handlerError = () => clearError({ redirect: '/' })
</script>
