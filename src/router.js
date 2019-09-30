import Vue    from 'vue';
import Router from 'vue-router';
// import Home   from '@/views/Home';

Vue.use( Router );

export default new Router( {
    mode: 'history',
    base: process.env.BABEL_ENV,
    routes: [
        /* {
             path: '/',
             name: 'home',
             hideInMenu: true,
             component: Home,
         },*/
        {
            path: '/passport',
            name: 'passport',
            hideInMenu: true,
            component: () => import( '@/views/passport/Passport.vue' ),
            children: [
                {
                    path: '/passport',
                    redirect: '/passport/sign-in',
                },
                {
                    path: '/passport/sign-in',
                    name: 'sign-in',
                    component: () => import( '@/views/passport/sign-in/SignIn.vue' ),
                },
                {
                    path: '/passport/sign-up',
                    name: 'sign-up',
                    component: () => import( '@/views/passport/sign-up/SignUp.vue' ),
                },
            ],
        },
        {
            path: '/',
            meta: { authority: [ 'user', 'admin' ] },
            component: () =>
                import( '@/views/console/Console.vue'),
            children: [
                // dashboard
                {
                    path: '/',
                    redirect: '/dashboard/analysis',
                },
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    meta: { icon: 'dashboard', title: '仪表盘' },
                    component: { render: h => h( 'router-view' ) },
                    children: [
                        {
                            path: '/dashboard/analysis',
                            name: 'analysis',
                            meta: { title: '分析页', icon: 'user' },
                            component: () => import( './views/Home' ),
                        },
                    ],
                },
                // form
                {
                    path: '/form',
                    name: 'form',
                    component: { render: h => h( 'router-view' ) },
                    meta: { icon: 'form', title: '表单', authority: [ 'admin' ] },
                    children: [
                        {
                            path: '/form/basic-form',
                            name: 'basicform',
                            meta: { title: '基础表单' },
                            component: () => import( './views/Home' ),
                        },
                        {
                            path: '/form/step-form',
                            name: 'stepform',
                            hideChildrenInMenu: true,
                            meta: { title: '分布表单' },
                            component: () => import( './views/Home' ),
                            children: [
                                {
                                    path: '/form/step-form',
                                    redirect: '/form/step-form/info',
                                },
                                {
                                    path: '/form/step-form/info',
                                    name: 'info',
                                    component: () => import( './views/Home' ),
                                },
                                {
                                    path: '/form/step-form/confirm',
                                    name: 'confirm',
                                    component: () => import( './views/Home' ),
                                },
                                {
                                    path: '/form/step-form/result',
                                    name: 'result',
                                    component: () => import( './views/Home' ),
                                },
                            ],
                        },
                    ],
                },
                // Exception
                {
                    path: '/exception',
                    name: 'exception',
                    component: { render: h => h( 'router-view' ) },
                    redirect: '/exception/403',
                    meta: { title: '异常页', icon: 'warning', authority: [ 'admin' ] },
                    children: [
                        {
                            path: '/exception/403',
                            name: 'exception403',
                            component: () => import( '@/views/Home' ),
                            meta: { title: '403' },
                        },
                        {
                            path: '/exception/404',
                            name: 'exception404',
                            component: () => import( '@/views/Home' ),
                            meta: { title: '404' },
                        },
                        {
                            path: '/exception/500',
                            name: 'exception500',
                            component: () => import('@/views/Home'),
                            meta: { title: '500' },
                        },
                    ],
                },
                // Profile
                {
                    path: '/profile',
                    name: 'profile',
                    component: { render: h => h( 'router-view' ) },
                    redirect: '/profile/basic',
                    meta: { title: '详情页', icon: 'profile', authority: [ 'admin' ] },
                    children: [
                        {
                            path: '/profile/basic',
                            name: 'basic',
                            component: () => import( '@/views/Home'),
                            meta: { title: '基础详情页' },
                        },
                        {
                            path: '/profile/advanced',
                            name: 'advanced',
                            component: () => import( '@/views/Home'),
                            meta: { title: '高级详情页' },
                        },
                    ],
                },
            ],
        },
    ],
} );
