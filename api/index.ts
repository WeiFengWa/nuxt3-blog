import { Article, Info, Leave, Page, TagCountInfo } from '@/api/models'
import { LeaveRequest } from '@/api/models/request'

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

export const tagArticleListApi = (id: any) => {
  return request<Article[]>(`/api/article/tag/${id}`)
}

export const leaveListApi = (params: any = {}) => {
  return request<Page<Leave>>('/api/leave/message', {
    params,
  })
}

export const leaveMessageApi = (body: LeaveRequest) => {
  return request<Boolean>('/api/leave/message', {
    method: 'POST',
    body,
  })
}
