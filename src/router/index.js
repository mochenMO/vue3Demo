// //引入vue-router
// import { createRouter, createWebHashHistory } from 'vue-router'
// //ES6  import输入  export 输出
// // 模块化 默认私有，如何被别人使用？
// // 通过export 输出
// // 如何使用
// // export default 默认输出
// import Index from '@/views/static/index.vue'
// import LayoutAdmin from '@/layout/admin/index.vue'
// //白名单
// const whiteList = [
//     "/",
//     "/login"
// ]
// import { useUserStore } from '../store/user'

// //路由表
// const routes = [
//     {
//         path: '/',//访问路径 http://127.0.0.1:5173/cx/XfDGdOkjVo7deIxQjurcf8BEnNf 
//         name: 'home', //命名路由
//         component: Index,   //key:value  默认//页面组件 components 普通组件 页面组件和普通组件是一对多
//     },
//     {
//         path: '/adcate',
//         name: 'adCate',
//         component: () => import('../views/static/adCate.vue')// 懒加载
//     },
//      {
//         path: '/memorabilia', name: 'memorabilia', component: () => import('../views/admin/memorabilia.vue') //懒加载 
//     },
//     {
//         path: '/classroom', name: 'classroom', component: () => import('../views/static/classroom.vue') //懒加载 
//     },
//     {
//         path: '/classinfo', name: 'classinfo', component: () => import('../views/static/classinfo.vue') //懒加载 
//     },
//     {
//         path: '/copyright', name: 'copyright', component: () => import('../views/static/copyright.vue') //懒加载 
//     },
//     {
//         path: '/department',
//         name: 'department',
//         component: () => import('@/views/admin/department.vue'), // 懒加载
//       },
//     {
//         path: '/major', name: 'major', component: () => import('../views/admin/major.vue') //懒加载 
//     },
//     {
//         path: '/articleCat4', name: 'articleCat4', component: () => import('../views/static/articleCat4.vue') //懒加载 
//     },
//     {
//         path: '/backend', name: 'backend', component: () => import('../views/static/backend.vue') //懒加载 
//     },
//     {
//         path: '/student', name: 'student', component: () => import('../views/static/student.vue') //懒加载 
//     },
//     {
//         path: '/patent',
//         name: 'patent',
//         component: () => import('../views/static/patent.vue'), // 懒加载
//     },
//     {
//         path: '/adCate',
//         name: 'adCate',
//         component: () => import('../views/static/adCate.vue'), // 懒加载
//     },
//     {
//         path: '/course',
//         name: 'course',
//         component: () => import('../views/static/course.vue'), // 懒加载
//     },
//     {
//         path: '/menurule',
//         name: 'menurule',
//         component: () => import('../views/static/menurule.vue'), // 懒加载
//     },
//     {
//         path: '/competition',
//         name: 'competition',
//         component: () => import('../views/static/competition.vue'), // 懒加载
//     },    
//     {
//         path: '/login',
//         name: 'login',
//         component: () => import('../views/static/login.vue')// 懒加载
//     },
//     {
//         path: '/frontendMenu',
//         name: 'frontendMenu',
//         component: () => import('@/views/admin/frontendMenu.vue'), // 懒加载
//       },
//     {
//         path: '/interview',
//         name: 'interview',
//         component: () => import('../views/admin/interviewcontroller.vue')// 懒加载
//     },
//     {
//         path: '/dormitory', name: 'dormitory', component: () => import('../views/admin/dormitory.vue') //懒加载 
//     },
//     {
//         path: '/admin',
//         name: 'admin',
//         component: LayoutAdmin,
//         children: [
//             {
//                 path: '',
//                 name: 'admin-index',
//                 component: () => import('@/views/admin/index.vue')
//             },
//             {
//                 path: 'info',
//                 name: 'admin-info',
//                 component: () => import('@/views/admin/info.vue')
//             },
//             {
//                 path: 'logout',
//                 name: 'admin-logout',
//                 component: () => import('@/views/admin/logout.vue')
//             }, {
//                 path: 'changepassword',
//                 name: 'admin-changepassword',
//                 component: () => import('@/views/admin/changepassword.vue')
//             },
//             {
//                 path: 'forgetpassword',
//                 name: 'admin-forgetpassword',
//                 component: () => import('@/views/admin/forgetpassword.vue')
//             }

//         ]
//     },



//     {
//         path: '/:pathMatch(.*)*',
//         name: '404',
//         component: () => import('../views/404.vue')// 懒加载  
//     }

// ]
// const router = createRouter({
//     //模式
//     history: createWebHashHistory(),
//     routes
// })
// //前置路由守卫
// //用户状态 user.js
// router.beforeEach((to, from, next) => {
//     const userStore = useUserStore();

//     if (whiteList.includes(to.path)) {
//         next();
//     }
//     else {

//         if (userStore.token && userStore.token.length > 0) {
//             next()
//         }
//         else {
//             next({ name: "login" })
//         }

//     }


// })
// export default router;




// ======================================================================================






// import { createRouter, createWebHashHistory } from 'vue-router'


// const routes = [
//     {
//         path: '/login',
//         name: 'Login', 
//         component: () => import("../views/login/index.vue"),  
//     }
// ]


// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// })



// export default router;




// ==========================================================================================




import { createRouter, createWebHashHistory } from 'vue-router'

// import Index from '@/views/static/index.vue'
// import LayoutAdmin from '@/layout/admin/index.vue'


//白名单
const whiteList = [
    "/",
    "/login"
]
import { useUserStore } from '../store/user'

//路由表
const routes = [
    {
        path: '/',                                                // url访问路径 
        name: 'login',                                            // 命名路由
        component:  () => import('../views/login/login.vue')      // 实际文件路径  
    },
    
    {
        path: '/login02',                                                // url访问路径 
        name: 'login02',                                            // 命名路由
        component:  () => import('../views/login/login02.vue')      // 实际文件路径  
    },

    {
        path: '/test',                                               // url访问路径 
        name: 'test',                                            // 命名路由
        component:  () => import('../views/test02.vue')      // 实际文件路径  
    },


    // 登录页面
    {
        path: '/login',                                     // url访问路径 
        name: 'login',                                      // 命名路由
        component: () => import('../views/login/login.vue') // 实际文件路径  
    },

    {
        path: '/home',                                          
        component: () => import('../views/home/home.vue'),                                     
        children:[
            {
                path: '', 
                name:'userInfo',
                component: () => import('../views/home/userInfo.vue')
            },
            {
                path: 'userInfo', 
                name:'userInfo',
                component: () => import('../views/home/userInfo.vue')
            },
            {
                path: 'userLevel', 
                name: 'userLevel', 
                component: () => import('../views/home/userLevel.vue')
            },
            {
                path: 'userArticle', 
                name: 'userArticle', 
                component: () => import('../views/home/userArticle.vue')
            },
            {
                path: 'memorabilia',
                name: 'memorabilia',  
                component: () => import('../views/home/memorabilia.vue')
            },
            {
                path: 'userLog', 
                name:'userLog',
                component: () => import('../views/home/userLog.vue')
            },
        ]  
    },

    // test
    {
        path: '/classroom', name: 'classroom', component: () => import('../views/test/classroom.vue') //懒加载 
    },

    // 404页面
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//前置路由守卫
//用户状态 user.js
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (whiteList.includes(to.path)) {
        next();
    }
    else {

        if (userStore.token && userStore.token.length > 0) {
            next()
        }
        else {
            next({ name: "login" })
        }
    }
})
export default router;

