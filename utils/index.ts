export const formatTimeAgo = (timestamp: string) => {
  if (!timestamp) return
  const now = new Date().getTime()
  const diff = now - new Date(timestamp).getTime()

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = month * 12

  const yearAgo = Math.floor(diff / year)
  const monthAgo = Math.floor(diff / month)
  const dayAgo = Math.floor(diff / day)
  const hourAgo = Math.floor(diff / hour)
  const minuteAgo = Math.floor(diff / minute)
  const secondAgo = Math.floor(diff / second)

  if (yearAgo > 0) {
    return `${yearAgo}年前`
  } else if (monthAgo > 0) {
    return `${minuteAgo}个月前`
  } else if (dayAgo > 0) {
    return `${dayAgo}天前`
  } else if (hourAgo > 0) {
    return `${hourAgo}小时前`
  } else if (minuteAgo > 1) {
    return `${minuteAgo}分钟前`
  } else if (secondAgo > 30) {
    return `${secondAgo}秒前`
  } else {
    return '刚刚'
  }
}
