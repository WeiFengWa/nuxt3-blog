export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', (e) => {
    console.log(e)
  })
  return {
    provide: {
      test: '123123',
    },
  }
})
