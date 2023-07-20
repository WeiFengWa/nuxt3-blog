<template>
  <div class="flex h-screen flex-col items-center gap-3 pt-[10vh]">
    <el-avatar
      class="border border-dashed"
      :src="info.logo"
      :size="60"
    ></el-avatar>
    <p class="font-semibold">{{ info.title }}</p>
    <p class="text-sm">{{ info.description }}</p>
    <MIcon name="iconamoon:location-pin-duotone" label="中国 · 贵州" />
    <div class="text-sm">
      <nuxt-link class="menu-item duration-500 hover:text-blue-500" to="/">
        首页
      </nuxt-link>
      <template v-for="item in routes" :key="item.path">
        <nuxt-link
          v-if="!item.meta?.hidden"
          class="menu-item duration-500 hover:text-blue-500"
          :to="item.path"
        >
          {{ item.meta?.title }}
        </nuxt-link>
      </template>
    </div>
    <div class="flex-1"></div>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import VTypical from 'vue-typical'
import { useInfoStore } from '@/stores/useInfoStore'

const { info } = toRefs(useInfoStore())
const routes = useRouter().options.routes[1].children
</script>

<style scoped>
.menu-item ~ .menu-item::before {
  content: '·';
  padding: 0 7px;
}
</style>
