<template>
  <el-scrollbar class="!h-screen" @scroll="onScroll">
    <NavBar :scroll-top="top" :is-up="up" />
    <div
      class="flex flex-1 flex-col"
      style="min-height: calc(100% - 53px * 2 - 32px)"
    >
      <slot></slot>
    </div>
    <PageFooter />
    <el-backtop
      v-if="top > 20"
      target=".el-scrollbar__wrap"
      :right="40"
      :bottom="40"
    >
      <Icon name="iconamoon:arrow-up-2" />
    </el-backtop>
  </el-scrollbar>
</template>

<script setup>
const top = ref(0)
const up = ref(false)

const onScroll = ({ scrollTop }) => {
  up.value = scrollTop > top.value
  top.value = scrollTop
}
</script>

<style scoped></style>
