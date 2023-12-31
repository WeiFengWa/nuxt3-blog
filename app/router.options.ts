import { RouterConfig } from 'nuxt/schema'

export default <RouterConfig>{
  routes: (_routes) => [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/index.vue'),
      meta: { title: '首页' },
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/pages/blog.vue'),
      meta: { title: '博客' },
      children: [
        {
          path: '/blog',
          name: 'Blog',
          component: () => import('@/pages/blog/index.vue'),
          meta: { title: '博客' },
        },
        {
          path: '/tag',
          name: 'Tag',
          component: () => import('@/pages/blog/tag.vue'),
          meta: {
            title: '标签',
          },
        },
        {
          path: '/tag/:id',
          name: 'TagArticle',
          component: () => import('@/pages/blog/tag/index.vue'),
          meta: {
            title: '标签文章',
            hidden: true,
          },
        },
        {
          path: '/leave',
          name: 'Leave',
          component: () => import('@/pages/blog/leave.vue'),
          meta: { title: '留言' },
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/pages/blog/about.vue'),
          meta: { title: '关于' },
        },
        {
          path: 'article/:id',
          name: 'Article',
          component: () => import('@/pages/blog/article/index.vue'),
          meta: { title: '文章', hidden: true, fixed: true },
        },
      ],
    },
  ],
}
