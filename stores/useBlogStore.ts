import { defineStore } from 'pinia'
import { articleListApi, tagInfoApi } from '@/api'
import { Article, TagCountInfo } from '@/api/models'

export const useBlogStore = defineStore('blog', () => {
  const articleList = ref(<Article[]>[])

  const tagInfoList = ref(<TagCountInfo[]>[])

  const query = reactive({
    pageSize: 5,
    pageNum: 1,
    totalPage: 0,
  })

  const getArticleList = async () => {
    const {
      data: { rows, totalPage },
    } = await articleListApi(query)
    articleList.value = rows
    query.totalPage = totalPage
  }

  const getTagInfoList = async () => {
    const { data } = await tagInfoApi()
    tagInfoList.value = data
  }

  const next = () => {
    if (query.pageNum < query.totalPage) {
      query.pageNum++
      getArticleList()
    }
  }

  const prev = () => {
    if (query.pageNum > 1) {
      query.pageNum--
      getArticleList()
    }
  }

  return {
    articleList,
    tagInfoList,
    getArticleList,
    getTagInfoList,
    query,
    next,
    prev,
  }
})
