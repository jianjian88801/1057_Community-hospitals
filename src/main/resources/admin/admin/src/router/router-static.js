import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import huanzhe from '@/views/modules/huanzhe/list'
    import yaopinxinxi from '@/views/modules/yaopinxinxi/list'
    import yaopinjinjia from '@/views/modules/yaopinjinjia/list'
    import daijianchaliebiao from '@/views/modules/daijianchaliebiao/list'
    import jianchajieguo from '@/views/modules/jianchajieguo/list'
    import zhenduanxinxi from '@/views/modules/zhenduanxinxi/list'
    import wanchengzhusheliebiao from '@/views/modules/wanchengzhusheliebiao/list'
    import hushi from '@/views/modules/hushi/list'
    import zhusheliebiao from '@/views/modules/zhusheliebiao/list'
    import quyaoliebiao from '@/views/modules/quyaoliebiao/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yaopinguanliyuan from '@/views/modules/yaopinguanliyuan/list'
    import yaofeijiesuan from '@/views/modules/yaofeijiesuan/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/huanzhe',
        name: '患者',
        component: huanzhe
      }
      ,{
	path: '/yaopinxinxi',
        name: '药品信息',
        component: yaopinxinxi
      }
      ,{
	path: '/yaopinjinjia',
        name: '药品进价',
        component: yaopinjinjia
      }
      ,{
	path: '/daijianchaliebiao',
        name: '待检查列表',
        component: daijianchaliebiao
      }
      ,{
	path: '/jianchajieguo',
        name: '检查结果',
        component: jianchajieguo
      }
      ,{
	path: '/zhenduanxinxi',
        name: '诊断信息',
        component: zhenduanxinxi
      }
      ,{
	path: '/wanchengzhusheliebiao',
        name: '完成注射列表',
        component: wanchengzhusheliebiao
      }
      ,{
	path: '/hushi',
        name: '护士',
        component: hushi
      }
      ,{
	path: '/zhusheliebiao',
        name: '注射列表',
        component: zhusheliebiao
      }
      ,{
	path: '/quyaoliebiao',
        name: '取药列表',
        component: quyaoliebiao
      }
      ,{
	path: '/yisheng',
        name: '医生',
        component: yisheng
      }
      ,{
	path: '/yaopinguanliyuan',
        name: '药品管理员',
        component: yaopinguanliyuan
      }
      ,{
	path: '/yaofeijiesuan',
        name: '药费结算',
        component: yaofeijiesuan
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
