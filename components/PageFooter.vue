<template>
  <div class="flex flex-col py-4 text-xs sm:px-[20%]">
    <span class="flex justify-center gap-3">
      <el-link :underline="false" href="https://github.com/WeiFengWa">
        <MIcon name="line-md:github-twotone" label="Github" />
      </el-link>
      <el-link :underline="false" href="">
        <MIcon name="line-md:email-opened-twotone" label="Email" />
      </el-link>
    </span>
    <el-link type="primary" :underline="false">
      Copyright © 2023 WeiFengWa
    </el-link>
    <el-link
      type="success"
      href="https://beian.miit.gov.cn"
      target="_blank"
      :underline="false"
    >
      {{ info.recordNumber }}
    </el-link>
  </div>
</template>

<script setup lang="ts">
import { useInfoStore } from '@/stores/useInfoStore'
const { info } = toRefs(useInfoStore())
</script>
