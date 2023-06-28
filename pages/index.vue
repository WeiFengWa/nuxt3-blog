<template>
  <div
    class="flex h-screen select-none flex-col items-center gap-4 pt-[10vh] font-serif"
  >
    <el-avatar
      class="border border-dashed"
      :src="info.logo"
      :size="60"
    ></el-avatar>
    <p class="">{{ info.title }}</p>
    <p class="text-sm">{{ info.description }}</p>
    <div>
      <nuxt-link
        class="menu-item text-slate-400 duration-500 hover:text-slate-600"
        v-for="(item, index) in routes"
        :key="index"
        :to="item.path"
      >
        {{ item.meta?.title }}
      </nuxt-link>
    </div>
    <div class="flex-1"></div>
    <page-footer />
  </div>
</template>

<script setup lang="ts">
import { useInfoStore } from '@/stores/useInfoStore'

const { info } = toRefs(useInfoStore())
const { getInfo } = useInfoStore()
const routes = useRouter().options.routes

if (!info.value.title) {
  getInfo()
  console.log(
    '%c 微风哇 %c By 微风 %c',
    'background:#e9546b ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff; padding:5px 0;',
    'background:#ec8c69 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000; padding:5px 0;',
    'background:transparent',
  )
}
</script>

<style scoped>
.menu-item ~ .menu-item::before {
  content: '·';
  padding: 0 7px;
}
</style>
