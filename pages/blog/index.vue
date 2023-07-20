<template>
  <div class="content-view">
    <span>
      <span class="text-bg !text-base">文章</span>
      <span class="pl-2 text-xs text-slate-500"
        >({{ articleList.length }})</span
      >
    </span>
    <div
      class="border-b border-dashed py-3.5"
      v-for="item in articleList"
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
    <div class="flex-1"></div>
    <div class="flex justify-between pt-4">
      <span v-show="query.pageNum > 1" class="text-bg" @click="prev"
        >上一页</span
      >
      <span class="flex-1"></span>
      <span
        v-show="query.pageNum < query.totalPage"
        class="text-bg"
        @click="next"
        >下一页</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/useBlogStore'
import { formatTimeAgo } from '@/utils'
const { articleList } = toRefs(useBlogStore())
const { getArticleList, query, next, prev } = useBlogStore()

if (articleList.value?.length === 0) {
  getArticleList()
}

const toDetail = (id: Number) => {
  useRouter().push({ path: `/blog/article/${id}` })
}
</script>
