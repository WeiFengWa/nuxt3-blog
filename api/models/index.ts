export interface Base {
  createTime: string
  createBy: string
  updateTime: string
  updateBy: string
  status: boolean
  remark: string
  deleted: boolean
}

export interface Result<T> {
  code: number
  message: string
  data: T
  time: number
}

export interface Page<T> {
  pageNum: number
  pageSize: number
  rows: T[]
  total: number
  totalPage: number
}

export interface Info {
  id: number
  title: string
  description: string
  logo: string
  background: string
  onLineTime: string
  recordNumber: string
  status: boolean
  notice: string
  fileUploadType: string
  articleCount: number
  tagCount: number
  categoryCount: number
  about: string
}

export interface TagCountInfo {
  id: number
  tag: string
  name: string
  count: number
}

export interface Tag extends Base {
  id: number
  tag: string
  name: string
}

export interface Article extends Base {
  id: number
  title: string
  content: string
  cover: string
  likeCount: number
  readCount: number
  author: string
  original: boolean
  originalAuthor: string
  link: string
  categoryId: number
  tags: number[]
}

export interface Leave extends Base {
  id: number
  parent: number
  nickName: string
  content: string
  email: string
  avatar: string
  ip: string
  address: string
  link: string
  privacy: boolean
  pinned: boolean
  examine: number
  children: Leave[]
}
