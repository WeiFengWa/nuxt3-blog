import { defineStore } from 'pinia'
import { Leave, Page } from '@/api/models'
import { LeaveRequest } from '@/api/models/request'
import { leaveListApi, leaveMessageApi } from '@/api'

export const useLeaveStore = defineStore('leave', () => {
  const data = ref(<Page<Leave>>{})

  const query = reactive({
    pageNum: 1,
    pageSize: 10,
    totalPage: 0,
  })

  const leave = ref(<LeaveRequest>{})

  const getData = async () => {
    const { data: res } = await leaveListApi(query)
    data.value = res
    query.totalPage = data.value.totalPage
  }

  const submit = async (data: any) => {
    const { data: ok } = await leaveMessageApi(leave.value)
    if (ok) {
      ElMessage.success('留言成功')
      leave.value = <LeaveRequest>{}
    }
  }

  const next = () => {
    if (query.pageNum < query.totalPage) {
      query.pageNum++
      getData()
    }
  }

  const prev = () => {
    if (query.pageNum > 1) {
      query.pageNum--
      getData()
    }
  }

  return {
    data,
    query,
    getData,
    next,
    prev,
    submit,
    leave,
  }
})
