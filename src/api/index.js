import { axios } from '@/utils/request'
const baseUrl = '/api'

/**
 * 根据客户Id查询客户基本信息
 * {"AccountId":"String"}
 * @param parameter
 * @returns {*}
 */
export function getAccountInfo (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryCustomerInfoByIdReq',
    method: 'post',
    data: parameter
  })
}

/**
 * 根据客户Id获取最后的充值和消耗时间
 * {"AccountId":"String"}
 * @param parameter
 * @returns {*}
 */
export function getAccountTime (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryLastRechargeConsumeTimeByIdReq',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询客户总览
 * @param parameter
 * @returns {*}
 */
export function getAccountView (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryCustomerOverviewReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 查询客户列表
 * {"AccountId":"String","AccountName":"String","PageIndex":0,"PageSize":0,"OrdereBy":"String","IsDesc":0,"UserId":0,"SystemType":0,"Source":0}
 * @param parameter
 * @returns {*}
 */
export function getAccountList (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryCustomerInfoPageReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 检查是否进行过背调
 * @param parameter
 * @returns {*}
 */
export function checkQuiz (parameter) {
  return axios({
    url: baseUrl + '/json/reply/CheckQuizResultExistReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 查询背调问题列表
 * @param parameter
 * @returns {*}
 */
export function getQuizQuestion (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryQuizReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 查询背调问题答案列表
 * @param parameter
 * @returns {*}
 */
export function getQuizAnswer (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryQuizResultReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 新增背调问题答案
 * @param parameter
 * @returns {*}
 */
export function addQuizAnswer (parameter) {
  return axios({
    url: baseUrl + '/json/reply/AddQuizResultReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 修改背调问题答案
 * @param parameter
 * @returns {*}
 */
export function updateQuizAnswer (parameter) {
  return axios({
    url: baseUrl + '/json/reply/UpdateQuizResultReq',
    method: 'post',
    data: parameter
  })
}
/**
 * 自动处理背调信息（更新最后背调时间）
 * @param parameter
 * @returns {*}
 */
export function AutoHandQuiz (parameter) {
  return axios({
    url: baseUrl + '/json/reply/AutoHandQuizResultReq',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询公司主体
 * @param parameter
 * @returns {*}
 */
export function getCompanyList (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryCompanyReq',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询媒体账户
 * @param parameter
 * @returns {*}
 */
export function getMediaAccountList (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryMediaAccountInfoReq',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询运营负责人
 * @param parameter
 * @returns {*}
 */
export function getOwnerListByMedia (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryOwnerByMediaIdsReq',
    method: 'post',
    data: parameter
  })
}

/**
 * 查询产品名
 * @param parameter
 * @returns {*}
 */
export function getProductNameByMedia (parameter) {
  return axios({
    url: baseUrl + '/json/reply/QueryProductInfoByMediaIdsReq ',
    method: 'post',
    data: parameter
  })
}
