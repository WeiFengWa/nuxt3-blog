<template>
  <div class="content-view">
    <span>
      <span class="text-bg !text-base">留言</span>
      <span class="pl-2 text-xs text-slate-500">({{ data.total }})</span>
    </span>
    <div v-for="item in data.rows" :key="item.id">
      <leave-message-item
        :data="item"
        :reply-id="leave.parent"
        @reply="reply"
        @cancel-reply="cancelReply"
      >
        <leave-message-item
          v-for="subItem in item.children"
          :key="subItem.id"
          :data="subItem"
          :reply-id="leave.parent"
          @reply="reply"
          @cancel-reply="cancelReply"
        >
          <leave-message-item
            v-for="ssubItem in subItem.children"
            :key="ssubItem.id"
            :data="ssubItem"
            :reply-id="leave.parent"
            hidden-reply
            @reply="reply"
            @cancel-reply="cancelReply"
          >
          </leave-message-item>
        </leave-message-item>
      </leave-message-item>
    </div>
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
    <div class="mt-3.5 rounded-lg border border-dashed p-3">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <el-input v-model="leave.nickName">
          <template #prepend>昵称</template>
        </el-input>
        <el-input v-model="leave.email">
          <template #prepend>邮箱</template>
        </el-input>
        <el-input v-model="leave.link">
          <template #prepend>网站</template>
        </el-input>
      </div>
      <el-input
        v-model="leave.content"
        class="my-3"
        type="textarea"
        maxlength="150"
        :rows="4"
        show-word-limit
        :placeholder="tips"
      ></el-input>
      <div class="text-right">
        <el-button @click="submit(leave)">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLeaveStore } from '@/stores/useLeaveStore'
const { getData, submit, query, next, prev } = useLeaveStore()
const { data, leave } = toRefs(useLeaveStore())

const tips = ref('留下点啥呢')

getData()

const reply = (id: number, nickName: string) => {
  if (id && id !== 0) {
    tips.value = `回复 @${nickName}`
    leave.value.parent = id
  }
}

const cancelReply = () => {
  leave.value.parent = null
  tips.value = '留下点啥呢'
}
</script>

<style scoped>
:deep(.el-input-group__prepend) {
  @apply px-3 after:text-red-500 after:content-['*'];
}
</style>
