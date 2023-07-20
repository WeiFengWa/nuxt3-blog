<template>
  <span
    :style="{
      '--right': label ? '4px' : '0',
      '--size': size ? size + 'px' : 'inherit',
      '--color': color,
    }"
    class="icon-view"
  >
    <Icon class="icon" :name="name" :size="size" :color="color" />
    <span class="label">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
  },
  label: {
    type: String,
  },
  size: {
    type: String,
    default: '14',
  },
  color: {
    type: String,
  },
})
</script>

<style scoped lang="scss">
.icon-view {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .icon {
    margin-right: var(--right);
  }

  .label {
    font-size: var(--size);
    color: var(--color);
  }
}
</style>
