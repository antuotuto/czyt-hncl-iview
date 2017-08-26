const routers = [{
    path: '/',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
  },
  {
    path: '/design',
    meta: {
      title: 'design'
    },
    component: (resolve) => require(['./views/design.vue'], resolve)
  }
];
export default routers;
