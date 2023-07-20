<template>
  <div class="content-view">
    <h1 class="text-xl">Hi! 这里是微风的小窝👋</h1>
    <p>就这样，想到再来补吧</p>
    <md-preview v-model="info.about"></md-preview>
  </div>
</template>

<script setup>
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import { useInfoStore } from '@/stores/useInfoStore'
const { info } = toRefs(useInfoStore())
</script>
