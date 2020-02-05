export default [
  {
    path: '/',
    component: () => import('@/views/layouts/MainLayout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView')
      },
      ]
  },
  {
    path: '*',
    name: 'error-404',
    redirect: { name: 'home' }
  }
]
