<template>
  <div class="flex flex-1 flex-col p-4 sm:mx-auto sm:w-3/5">
    <span>
      <span
        class="relative font-semibold before:absolute before:bottom-0 before:flex before:h-2/5 before:w-full before:rounded-lg before:bg-blue-700 before:bg-opacity-50"
        >标签</span
      >
      <span class="pl-2 text-xs text-slate-500"
        >({{ tagInfoList.length }})</span
      >
    </span>
    <div class="flex flex-wrap pt-4">
      <el-link class="mr-4" v-for="item in tagInfoList" :key="item.id">
        <span
          :style="{
            '--weight': item.count > 0 ? item.count : 1,
            '--size': (item.count > 0 ? item.count : 1) + 'px',
          }"
          class="tag pr-2 duration-200 hover:text-blue-500"
          ># {{ item.name }}</span
        >
        <span class="text-xs text-slate-500">({{ item.count }})</span>
      </el-link>
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/useBlogStore'
const { tagInfoList } = toRefs(useBlogStore())
const { getTagInfoList } = useBlogStore()

if (tagInfoList.value.length === 0) {
  getTagInfoList()
}
</script>

<style scoped>
.tag {
  font-size: calc(12px + var(--size));
  font-weight: calc(var(--weight) * 100);
}
</style>
