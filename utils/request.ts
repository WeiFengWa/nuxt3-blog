import { Result } from '@/api/models'

export const request = <T>(url: string, options?: any): Promise<Result<T>> => {
  return new Promise((resolve, reject) => {
    // useFetch<Result<T>>(url, {
    //   ...options,
    // }).then(({ data }) => {
    //   resolve(data.value!)
    //   console.log(data.value?.code)
    // })

    $fetch<Result<T>>(url, {
      ...options,
    })
      .then((data) => {
        if (process.client) {
          // console.log('结果', data)
        }
        if (data.code === 200) {
          if (data.message !== 'success') ElMessage.success(data.message)
          resolve(data)
        } else {
          ElMessage.error(data.message)
          console.log(data.message)
        }
      })
      .catch((error) => {
        console.log(error)
        ElMessage.error(error)
      })
  })
}
