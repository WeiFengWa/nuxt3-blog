import { Article, Info, Page, TagCountInfo } from '@/api/models'

export const articleListApi = (params: any = {}) => {
  return request<Page<Article>>('/api/article', {
    params,
  })
}

export const articleDetailApi = (id: number) => {
  return request<Article>(`/api/article/${id}`)
}

export const infoApi = () => {
  return request<Info>('/api/info')
}

export const tagInfoApi = () => {
  return request<TagCountInfo[]>('/api/info/tag')
}
