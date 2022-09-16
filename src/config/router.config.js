// eslint-disable-next-line
import { BasicLayout, BasicLayoutTop } from '@/layouts'
import { isDD } from './global'
const tabs = [BasicLayout, BasicLayoutTop]
const tabsKey = isDD ? 1 : 0 // 如果是钉钉环境就用第二种布局方式
export const asyncRouterMap = [
  {
    path: '/',
    component: tabs[tabsKey],
    redirect: '/account/list',
    meta: { title: '首页', icon: 'home', key: 'pc-page-home' }
  },
  {
    path: '/account',
    name: 'account',
    component: tabs[tabsKey],
    meta: { title: '客户列表', icon: 'usergroup-delete', key: 'pc-accountMenu' },
    children: [
      {
        path: '/account/list',
        name: 'accountList',
        meta: { title: '客户列表', keepAlive: true, show: true, key: 'pc-accountMenu-page-account/list' },
        component: () => import('@/views/account/list')
      },
      {
        path: '/account/policyLists',
        name: 'policyLists',
        meta: { title: '政策查询', keepAlive: false, show: true, key: 'pc-accountMenu-page-account/policyLists' },
        component: () => import('@/views/account/policyLists')
      },
      {
        path: '/account/deductionLists',
        name: 'deductionLists',
        meta: { title: '抵扣查询', keepAlive: false, show: true, key: 'pc-accountMenu-page-account/deductionLists' },
        component: () => import('@/views/account/deductionLists')
      },
      {
        path: '/account/new-dedu',
        name: 'newDeduction',
        meta: { title: '申请抵扣', keepAlive: false, show: false },
        component: () => import('@/views/account/newDeduction/index')
      },
      {
        path: '/account/details/:accountId/:activeKey',
        name: 'details',
        meta: { title: '客户详情', keepAlive: false, show: false, key: 'pc-accountMenu-page-account/details' },
        component: () => import('@/views/account/details')
      },
      {
        path: '/account/new-policy/:accountId/:action',
        name: 'policy',
        meta: { title: '申请信息流政策', keepAlive: false, show: false, key: 'pc-accountMenu-page-account/newPolicy' },
        component: () => import('@/views/account/policy/new-policy')
      },
      {
        path: '/account/new-policy-live/:accountId',
        name: 'policy-live',
        meta: { title: '申请直播政策', keepAlive: false, show: false, key: 'pc-accountMenu-page-account/newPolicyLive' },
        component: () => import('@/views/account/live/policyApply')
      },
      {
        path: '/account/new-deduction-live/:accountId/:skuId?',
        name: 'deduction-live',
        meta: { title: '申请直播抵扣', keepAlive: false, show: false, key: 'pc-accountMenu-page-account/newDeductionLive' },
        component: () => import('@/views/account/live/deductionApply')
      },
      {
        path: '/account/brand-edit/:accountId',
        name: 'brand-edit',
        meta: { title: '品牌项目信息', keepAlive: false, show: false, key: 'pc-accountMenu-page-account/brandEdit' },
        component: () => import('@/views/account/live/brandEdit')
      },
      {
        path: '/account/new-agent-policy/:accountId/:action',
        name: 'agent-policy',
        meta: { title: '申请仅代运营', keepAlive: false, show: false, key: 'pc-accountMenu-page-account/newPolicy' },
        component: () => import('@/views/account/policy/agent-policy')
      }
    ]
  },
  {
    path: '/kpi',
    name: 'kpi',
    component: tabs[tabsKey],
    meta: { title: 'KPI与提成', icon: 'pie-chart', key: 'pc-kpiMenu' },
    children: [
      {
        path: '/kpi/index',
        name: 'kpi-index',
        meta: { title: 'KPI', keepAlive: false, show: true, key: 'pc-kpiMenu-page-kpi/index' },
        component: () => import('@/views/account/kpi/index')
      },
      {
        path: '/kpi/department-kpi',
        name: 'department-kpi',
        meta: { title: '部门提成', keepAlive: false, show: true, key: 'pc-kpiMenu-page-kpi/department-kpi' },
        component: () => import('@/views/account/kpi/department-kpi')
      },
      {
        path: '/kpi/personal-kpi',
        name: 'personal-kpi',
        meta: { title: '个人提成', keepAlive: false, show: true, key: 'pc-kpiMenu-page-kpi/personal-kpi' },
        component: () => import('@/views/account/kpi/personal-kpi')
      }
    ]
  },
  {
    path: '/approvalForm',
    name: 'approvalForm',
    component: tabs[tabsKey],
    meta: { title: '审批单', icon: 'file-sync', key: 'pc-approvalFormMenu' },
    children: [
      {
        path: '/approvalForm/historyList',
        name: 'historyList',
        meta: { title: '审批历史', keepAlive: false, show: true, key: 'pc-approvalFormMenu-page-approvalForm/history' },
        component: () => import('@/views/approvalForm/historyList')
      },
      {
        path: '/approvalForm/pendingList',
        name: 'pendingList',
        meta: { title: '待我审批', keepAlive: false, show: true, key: 'pc-approvalFormMenu-page-approvalForm/pending' },
        component: () => import('@/views/approvalForm/pendingList')
      },
      {
        path: '/approvalForm/initiatedList',
        name: 'initiatedList',
        meta: { title: '我发起的', keepAlive: false, show: true, key: 'pc-approvalFormMenu-page-approvalForm/initiated' },
        component: () => import('@/views/approvalForm/initiatedList')
      }
    ]
  },
  {
    path: '/config',
    name: 'config',
    component: tabs[tabsKey],
    meta: { title: '配置列表', icon: 'unordered-list', key: 'pc-configMenu' },
    children: [
      {
        path: '/config/expiryCredit',
        name: 'expiryCredit',
        meta: { title: '授信自动过期', keepAlive: true, show: true, key: 'pc-configMenu-page-config/expiry' },
        component: () => import('@/views/config/expiryCredit')
      },
      {
        path: '/config/messageAlert',
        name: 'messageAlert',
        meta: { title: '授信&政策消息提醒', keepAlive: true, show: true, key: 'pc-configMenu-page-config/message' },
        component: () => import('@/views/config/messageAlert')
      },
      {
        path: '/config/mediaBack',
        name: 'mediaBack',
        meta: { title: '媒体前返配置', keepAlive: true, show: true, key: 'pc-configMenu-page-config/mediaBack' },
        component: () => import('@/views/config/mediaBack')
      }
    ]
  },
  {
    path: '/systemSettings',
    name: 'systemSettings',
    component: tabs[tabsKey],
    meta: { title: '系统设置', icon: 'tool', key: 'pc-systemMenu' },
    children: [
      {
        path: '/systemSettings/rolePermissionConfig',
        name: 'rolePermissionConfig',
        meta: { title: '角色&权限配置', keepAlive: true, show: true, key: 'pc-systemMenu-page-system/role' },
        component: () => import('@/views/systemSettings/rolePermissionConfig.vue')
      },
      {
        path: '/systemSettings/1024',
        name: 'role1024',
        meta: { title: '系统权限配置', keepAlive: true, show: false, key: 'pc-systemMenu-page-system/1024' },
        component: () => import('@/views/systemSettings/1024.vue')
      }
    ]
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/check',
    name: 'check',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user/Check')
  }
]
export const notFoundRouterMap = [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/404')
  }
]
