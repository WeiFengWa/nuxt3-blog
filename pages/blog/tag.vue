<template>
  <div class="content-view">
    <span>
      <span class="text-bg !text-base">标签</span>
      <span class="pl-2 text-xs text-slate-500"
        >({{ tagInfoList.length }})</span
      >
    </span>
    <div class="flex flex-wrap pt-3.5">
      <nuxt-link
        :to="`/tag/${item.id}`"
        class="mr-4 flex items-center"
        v-for="item in tagInfoList"
        :key="item.id"
      >
        <span
          :style="{
            '--weight': item.count > 0 ? item.count : 1,
            '--size': (item.count > 0 ? item.count : 1) + 'px',
          }"
          class="tag pr-2 duration-200 hover:text-blue-500"
          ># {{ item.name }}</span
        >
        <span class="text-xs text-slate-500">({{ item.count }})</span>
      </nuxt-link>
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
