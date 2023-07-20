<template>
  <div>
    <div
      class="datas-center flex border-b border-l border-dashed px-[7px] pb-3.5 pt-[7px]"
    >
      <el-avatar
        :src="
          data.avatar ||
          'https://tse1-mm.cn.bing.net/th/id/OIP-C.RUbXmWAbS7d7AeIlcFFbHgHaHa?pid=ImgDet&rs=1'
        "
        :size="35"
      ></el-avatar>
      <div class="flex-1 pl-1.5 text-xs">
        <p class="pb-0.5">
          <span class="font-semibold">{{ data.nickName }}</span>
          <span class="pl-2 text-slate-500">
            {{ formatTimeAgo(data.createTime) }}
            {{ data.address || '未知' }}
          </span>
        </p>
        <p>
          {{ data.content }}
          <span
            class="text-slate-500"
            :class="{ '!text-red-500': replyId === data.id }"
            v-show="!hiddenReply"
            @click="
              replyId !== data.id
                ? emits('reply', data.id, data.nickName)
                : emits('cancelReply')
            "
            >{{ replyId !== data.id ? '回复' : '取消回复' }}</span
          >
        </p>
      </div>
    </div>
    <div class="border-l border-dashed pl-3.5">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Leave } from '@/api/models'
defineProps<{
  data: Leave
  replyId: number | null
  hiddenReply?: boolean
}>()
const emits = defineEmits(['reply', 'cancelReply'])
</script>
