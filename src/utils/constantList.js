/**
 * 结算方式
*/
export const settlementList = [
  {
    value: 100,
    label: '客户预付'
  },
  {
    value: 200,
    label: '云想垫付，按消耗每月后结算'
  },
  {
    value: 400,
    label: '云想垫付，按充值每月后结算'
  },
  {
    value: 300,
    label: '云想垫付，按每次充值后结算'
  }
]

// 仅代运营 结算方式
export const settlementAgentList = [
  {
    value: 550,
    label: '云想垫付，按消耗*服务费每月后结算'
  }
]

/**
 * 运营方式
*/
export const operationModelList = [
  {
    value: 4,
    label: '云想运营',
    desc: '云想提供充值和运营服务，媒体账户交于量子或其他运营服务商',
    color: 'rgb(49, 189, 84)'
  },
  {
    value: 1,
    label: '客户自运营',
    desc: '云想仅提供充值业务，媒体账户由客户自运营',
    color: '#1890FF'
  },
  {
    value: 6,
    label: '仅代运营',
    desc: '云想仅提供媒体账户运营服务，不参与媒体账户的开户和充值',
    color: 'rgb(255, 85, 0)'
  }
]

/**
 * 返点类型
 */
export const discountType = [
  {
    value: 1,
    label: '返现'
  },
  {
    value: 2,
    label: '返货'
  }
]

// 抵扣类型
export const deductionType = {
  1: 28, // 激励返点
  2: 26, // 反基础点
  3: 30, // 运营核减
  4: 32, // 业务核减
  5: 33 // 直播抵扣
}

// 服务内容
export const serviceType = [
  {
    value: 1,
    label: '品牌代播',
    desc: '为客户提供直播服务，收取服务费或GMV抽佣。'
  },
  {
    value: 2,
    label: '小店代运营',
    desc: '为客户提供网店代运营服务。'
  },
  {
    value: 4,
    label: '蓝V代运营',
    desc: '为客户代运营蓝V账户。'
  }
]

// 年份下拉选择
export const yearList = [2020, 2021, 2022]

// 直播 抵扣状态
export const DEDU_STATUS = [
  { value: 0, label: '未抵扣', color: '' },
  { value: 1, label: '部分抵扣', color: '#87d068' },
  { value: 2, label: '全部抵扣', color: '#31bd54' },
  { value: -1, label: '作废', color: '#f50' }
]
// 直播 政策状态
export const LIVE_POLICY_STATUS = [
  // { value: 0, label: '全部', color: '' },
  // { value: 1, label: '新建/提交审批', color: '' },
  { value: 1, label: '生效中', color: '#31bd54' },
  { value: 2, label: '审核中', color: '#f8c200' },
  { value: 4, label: '已过期', color: '#f50' },
  { value: 6, label: '已作废', color: '#f50' },
  { value: 8, label: '待生效', color: '#f8c200' },
  { value: -1, label: '驳回', color: '#f50' },
  { value: -2, label: '申请人撤回', color: '#f50' }
]
// 直播 审批状态
export const LIVE_AUDIT_STATUS = [
  // { value: 0, label: '全部', color: '' },
  // { value: 1, label: '新建/提交审批', color: '' },
  { value: 2, label: '审批中', color: '#f8c200' },
  { value: 4, label: '审批通过', color: 'rgb(49, 189, 84)' },
  { value: -1, label: '驳回', color: '#f50' },
  { value: -2, label: '申请人撤回', color: '#f50' }
]

// 服务内容、服务模式
export const SERVER_MODE = [
  { value: 1, label: '品牌代播', color: '' },
  { value: 2, label: '小店代运营', color: '' },
  { value: 4, label: '蓝V代运营', color: '' }
]
