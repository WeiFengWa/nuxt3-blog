<template>
  <div class="flex flex-1 flex-col">
    <div
      class="cover-mask relative h-[220px] !w-full to-blue-500 duration-500 sm:h-[320px]"
    >
      <el-image class="h-full w-full" fit="cover" :src="data.cover"></el-image>
      <div
        class="text-se absolute bottom-0 z-10 w-full p-3 font-serif text-white"
      >
        <p class="mb-3 text-center text-2xl font-bold sm:text-4xl">
          {{ data.title }}
        </p>
        <p class="text-center">
          {{ formatTimeAgo(data.createTime) }}
          {{ data.readCount }} 阅读 {{ data.likeCount }} 点赞
        </p>
      </div>
    </div>
    <md-preview class="sm:px-[20%]" v-model="data.content"></md-preview>
    <div class="px-3 text-xs sm:!px-[20%]">
      <el-divider border-style="dashed">End</el-divider>
      <p class="flex justify-between pb-3">
        <span>最后编辑于 {{ formatTimeAgo(data.updateTime) }}</span>
        <span>© 允许规范转载</span>
      </p>
      <p>文章标题：{{ data.title }}</p>
      <p>文章作者：{{ data.author }}</p>
      <p>
        文章链接：<a class="hover:underline" :href="href">{{ href }}</a>
      </p>
      <template v-if="!data.original">
        <p>原文作者：{{ data.originalAuthor }}</p>
        <p>
          原文链接：<a class="hover:underline" :href="data.link">{{
            data.link
          }}</a>
        </p>
      </template>
    </div>
    <div
      class="m-3 grid grid-cols-2 gap-x-3 gap-y-3 rounded-lg border border-dashed p-3 sm:!mx-auto sm:w-[60%]"
    >
      <el-input> <template #prepend>昵称</template> </el-input>
      <el-input> <template #prepend>头像</template> </el-input>
      <el-input> <template #prepend>邮箱</template> </el-input>
      <el-input> <template #prepend>网站</template> </el-input>
      <el-input
        class="col-span-2"
        type="textarea"
        placeholder="发表啥呢"
        maxlength="150"
        rows="4"
        show-word-limit
      ></el-input>
      <div class="col-span-2 select-none text-right">
        <el-button
          class="submit relative z-0 cursor-pointer overflow-hidden rounded bg-slate-200 px-4 py-1 font-serif font-bold duration-500 hover:text-white"
        >
          提交
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { articleDetailApi } from '@/api'
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import { formatTimeAgo } from '@/utils'

const route = useRoute()

const href = ref('')

onMounted(() => {
  href.value = location.href
})

const { data } = await articleDetailApi(route.params.id)
</script>

<style scoped>
:deep(.el-input-group__prepend) {
  @apply px-3 after:text-red-500 after:content-['*'];
}

.submit {
  @apply before:absolute before:left-0 before:top-0 before:z-[-1] before:flex before:h-full before:w-0 before:bg-sky-400 before:bg-blend-difference before:duration-500 hover:before:w-full;
}
</style>
