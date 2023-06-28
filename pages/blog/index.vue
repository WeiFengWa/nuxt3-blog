<template>
  <div class="flex flex-1 flex-col p-4 sm:mx-auto sm:w-3/5">
    <span>
      <span
        class="relative font-semibold before:absolute before:bottom-0 before:flex before:h-2/5 before:w-full before:rounded-lg before:bg-blue-700 before:bg-opacity-50"
        >文章</span
      >
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
      <span
        v-show="query.pageNum > 1"
        class="relative flex cursor-pointer text-xs text-slate-500 before:absolute before:bottom-0 before:flex before:h-2/5 before:w-full before:rounded-lg before:bg-blue-700 before:bg-opacity-50"
        @click="prev"
        >上一页</span
      >
      <span class="flex-1"></span>
      <span
        v-show="query.pageNum < query.totalPage"
        class="relative flex cursor-pointer text-xs text-slate-500 before:absolute before:bottom-0 before:flex before:h-2/5 before:w-full before:rounded-lg before:bg-blue-700 before:bg-opacity-50"
        @click="next"
        >下一页</span
      >
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from '@/stores/useBlogStore'
import { formatTimeAgo } from '@/utils'
const { articleList } = toRefs(useBlogStore())
const { getArticleList, query, next, prev } = useBlogStore()

if (articleList.value.length === 0) {
  getArticleList()
}

const toDetail = (id) => {
  useRouter().push({ path: `/blog/article/${id}` })
}
</script>
