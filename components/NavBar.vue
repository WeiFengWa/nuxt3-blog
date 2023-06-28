<template>
  <div
    :class="{
      '-translate-y-14': isUp,
      'backdrop-blur-sm': !isUp,
    }"
    class="fixed z-40 flex h-[53px] w-full select-none justify-end border-b border-none p-4 font-serif text-sm duration-500"
  >
    <nuxt-link to="/">微风哇</nuxt-link>
    <span class="flex-1"></span>
    <template v-for="item in routes" :key="item.path">
      <nuxt-link v-if="!item.meta?.hidden" class="mx-2" :to="`${item.path}`">
        {{ item.meta.title }}
      </nuxt-link>
    </template>
  </div>
  <div
    :class="{ '!h-0': route.meta.fixed }"
    class="h-[53px] duration-500"
  ></div>
</template>

<script setup>
defineProps({
  scrollTop: {
    type: Number,
    default: 0,
  },
  isUp: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()

const routes = useRouter().options.routes[1].children
</script>
