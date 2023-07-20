import { Result } from '@/api/models'

export default defineEventHandler(async (e) => {
  const url = getRequestPath(e).replace('/api', '')
  const method = getMethod(e)
  let body
  if (method !== 'GET') body = await readBody(e)

  const config = useRuntimeConfig()
  const headers = getHeaders(e)

  console.log(`访问${url}`)
  console.log(headers)

  const res = await $fetch<Result<any>>(url, {
    baseURL: config.BASE_URL,
    method,
    params: getQuery(e),
    headers: {
      // 'x-real-ip': headers['x-real-ip'] as string,
      // 'x-forwarded-for': headers['x-forwarded-for'] as string,
    },
    body,
  }).catch((error) => {
    console.log('错误', error)
    return error.data
  })
  console.log(`======${res.code}-${config.TEST}======`)
  return res
})
