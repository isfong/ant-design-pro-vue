import Vue    from 'vue';
import Router from 'vue-router';
import Home   from './views/Home.vue';

Vue.use( Router );

export default new Router( {
    mode: 'history',
    base: process.env.BABEL_ENV,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/passport',
            name: 'passport',
            hideInMenu: true,
            component: () => import('./views/passport/Passport.vue'),
            children: [
                {
                    path: '/passport',
                    redirect: '/passport/sign-in',
                },
                {
                    path: '/passport/sign-in',
                    name: 'sign-in',
                    component: () => import('./views/passport/sign-in/SignIn.vue'),
                },
                {
                    path: '/passport/sign-up',
                    name: 'sign-up',
                    component: () => import('./views/passport/sign-up/SignUp.vue'),
                },
            ],
        },
    ],
} );
