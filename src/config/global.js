// export const debug = '&debug=true'

// export const isTest = window.location.host.indexOf('test') > -1 || window.location.host.indexOf('localhost') > -1

const isTest = (process.env.VUE_APP_NAME === 'TEST' || process.env.VUE_APP_NAME === 'DEV')

console.log('是否测试服', isTest)

export const debug = isTest ? '&debug=true' : ''

export const PRIVATE_KEY = isTest ? 'BC299CA0E3B97C25320997FDD94ECB6CE4B5F79DB1A6B903276C01D694324C6FBE4193249C45691485BE01017D6DAD91' : '79F6FD1193C5791444FDA0B34BC245BDA0ECAB0E5050DC82718D57DAC43D2140F1744B3977120FABCCE4AD315009B06A'

export const DING_CORPID = isTest ? 'ding9372fbc850ec805f35c2f4657eb6378f' : 'ding0e60fa6bbdf4b2b935c2f4657eb6378f'

// 账期限制固定后门 ddid 测试环境 王屹丰 线上 任丽萍
export const DDID = isTest ? 327 : 37

// 是否钉钉环境
export const isDD = window.navigator.appVersion.indexOf('DingTalk') > -1
// export const isDD = true
