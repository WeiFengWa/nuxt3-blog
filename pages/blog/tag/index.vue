<template>
  <div class="content-view">
    <span>
      <span class="text-bg !text-base">文章</span>
      <span class="pl-2 text-xs text-slate-500">({{ data.length }})</span>
    </span>
    <div
      class="border-b border-dashed py-3.5"
      v-for="item in data"
      :key="item.id"
    >
      <span class="pr-2 text-xs text-slate-500">
        {{ formatTimeAgo(item.createTime) }}</span
      >
      <nuxt-link
        :to="`/blog/article/${item.id}`"
        class="text-sm duration-150 hover:text-blue-500"
      >
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTimeAgo } from '@/utils'
import { tagArticleListApi } from '@/api'

const { data } = await tagArticleListApi(useRoute().params.id)

const toDetail = (id: Number) => {
  useRouter().push({ path: `/blog/article/${id}` })
}
</script>
