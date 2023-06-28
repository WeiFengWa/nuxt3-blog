import { defineStore } from 'pinia'
import { infoApi } from '@/api'
import { Info } from '@/api/models'

export const useInfoStore = defineStore('info', () => {
  const info = ref(<Info>{})

  const getInfo = async () => {
    const { data } = await infoApi()
    info.value = data
  }

  return {
    info,
    getInfo,
  }
})
