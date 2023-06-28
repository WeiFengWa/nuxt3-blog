import { Result } from '@/api/models'

export const request = <T>(url: string, options?: any): Promise<Result<T>> => {
  return new Promise((resolve, reject) => {
    $fetch<Result<T>>(url, {
      ...options,
    })
      .then((data) => {
        // console.log('结果', data)
        if (data.code === 200) {
          resolve(data)
        } else {
          ElMessage.error(data.message)
          console.log(`异常${data.message}`)
          reject(data)
        }
      })
      .catch((error) => {
        console.log(error.message)
        reject(error)
      })
  })
}
