import { Result } from '../../api/models'

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig()

  const url = getRequestPath(e).replace('/api', '')
  const res = await $fetch<Result<any>>(url as string, {
    baseURL: config.BASE_URL,
    method: getMethod(e),
    params: getQuery(e),
    headers: e.context.headers,
  })
  const { code } = res
  console.log(`==============${code}========${config.TEST}======`)

  return { ...res, test: config.TEST }
})
