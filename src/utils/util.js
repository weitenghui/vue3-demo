export function timeFix () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把王者', '我猜你可能累了', '不要emo', '一起爬山吗?', '打工人']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader (callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () {}
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate (id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
/**
 * 获取input光标位置
 */
export const getPosition = function (element) {
  let cursorPos = 0
  console.log(element.selectionStart)
  if (document.selection) { // IE
    var selectRange = document.selection.createRange()
    selectRange.moveStart('character', -element.value.length)
    cursorPos = selectRange.text.length
  } else if (element.selectionStart || element.selectionStart === '0') {
    cursorPos = element.selectionStart
  }
  return cursorPos
}
/**
 * 取两个数之间的随机值
 */
export const getRandomInt = function (min, max) {
  min = Math.ceil(min * 100)
  max = Math.floor(max * 100)
  const ram = Number(((Math.random() * (max - min) + min) / 100).toFixed(2))
  return ram // 不含最大值，含最小值
}
/**
 * 数组对象去重
 */
export const removeRept = function (arr, key) {
  const obj = {}
  arr = arr.reduce(function (item, next) {
    if (!obj[next[key]]) {
      obj[next[key]] = true
      item.push(next)
    }
    return item
  }, [])
  return arr
}

export const dingding = function (url) {
  const dftLink = 'dingtalk://dingtalkclient/page/link'
  if (url) {
    window.open(url)
    return
  }
  window.open(dftLink)
}

export const handlerRoutes = function (keys = [], routes) {
  if (!keys.length) {
    return []
  }
  const arr = []
  routes.forEach(item => {
    if (keys.includes(item.meta.key)) {
      if (item.children) {
        item.children = item.children.filter(item => keys.includes(item.meta.key) || !item.meta.key)
      }
      arr.push(item)
    }
  })
  return arr
}
// 根据权限配置菜单
export const handlerMenus = function (keys, routes) {
  const menus = []
  routes.forEach(item => {
    if (keys && keys.includes(item.meta.key)) {
      if (item.children) {
        item.children = item.children.filter(child => {
          if (!child.meta.key) {
            return child
          } else {
            if (keys.includes(child.meta.key)) {
              return child
            }
          }
        })
      }
      menus.push(item)
    }
  })
  let initMenus = []
  if (menus.length) {
    initMenus = menus.map(item => {
      return {
        key: item.path,
        icon: item.meta.icon || '',
        navName: item.meta.title || '',
        child: item.children && item.children.map(child => {
          return {
            key: child.path,
            navName: child.meta.title || '',
            show: child.meta.show
          }
        }).filter(v => v.show)
      }
    })
  }
  return initMenus
}

// 当前季度
export const currentQuarter = () => {
  // Math.floor((new Date().getMonth() % 3 === 0 ? (new Date().getMonth() / 3) : (new Date().getMonth() / 3 + 1)))
  const month = new Date().getMonth()
  if (month < 3) {
    return 1
  } else if (month < 6) {
    return 2
  } else if (month < 9) {
    return 3
  } else if (month < 12) {
    return 4
  }
}

// 当前相邻季度
export const adjacentQuarter = () => {
  const currentYear = new Date().getFullYear()
  let quarter1 = null
  let quarter2 = null
  let quarter3 = null
  let quarter4 = null
  if (currentQuarter() === 1) {
    quarter1 = { label: `${currentYear - 1}Q3`, value: `${currentYear - 1 + ',' + 3}` }
    quarter2 = { label: `上季度`, value: `${currentYear - 1 + ',' + 4}` }
    quarter3 = { label: `本季度`, value: `${currentYear + ',' + 1}` }
    quarter4 = { label: `${currentYear}Q2`, value: `${currentYear + ',' + 2}` }
  } else if (currentQuarter() === 2) {
    quarter1 = { label: `${currentYear - 1}Q4`, value: `${currentYear - 1 + ',' + 4}` }
    quarter2 = { label: `上季度`, value: `${currentYear + ',' + 1}` }
    quarter3 = { label: `本季度`, value: `${currentYear + ',' + 2}` }
    quarter4 = { label: `${currentYear}Q3`, value: `${currentYear + ',' + 3}` }
  } else if (currentQuarter() === 3) {
    quarter1 = { label: `${currentYear}Q1`, value: `${currentYear + ',' + 1}` }
    quarter2 = { label: `上季度`, value: `${currentYear + ',' + 2}` }
    quarter3 = { label: `本季度`, value: `${currentYear + ',' + 3}` }
    quarter4 = { label: `${currentYear}Q4`, value: `${currentYear + ',' + 4}` }
  } else if (currentQuarter() === 4) {
    quarter1 = { label: `${currentYear}Q2`, value: `${currentYear + ',' + 2}` }
    quarter2 = { label: `上季度`, value: `${currentYear + ',' + 3}` }
    quarter3 = { label: `本季度`, value: `${currentYear + ',' + 4}` }
    quarter4 = { label: `${currentYear + 1}Q1`, value: `${currentYear + 1 + ',' + 1}` }
  }
  return [quarter1, quarter2, quarter3, quarter4]
}

export const adjacentQuarter2 = () => {
  const currentYear = new Date().getFullYear()
  let quarter1 = null
  let quarter2 = null
  let quarter3 = null
  let quarter4 = null
  let q = '一'
  if (currentQuarter() === 1) {
    q = '一'
    quarter1 = { label: `${currentYear - 1}第三季度`, value: `${currentYear - 1 + ',' + 3}` }
    quarter2 = { label: `${currentYear - 1}第四季度`, value: `${currentYear - 1 + ',' + 4}` }
    quarter3 = { label: `${currentYear}第${q}季度`, value: `${currentYear + ',' + 1}` }
    quarter4 = { label: `${currentYear}第二季度`, value: `${currentYear + ',' + 2}` }
  } else if (currentQuarter() === 2) {
    q = '二'
    quarter1 = { label: `${currentYear - 1}第四季度`, value: `${currentYear - 1 + ',' + 4}` }
    quarter2 = { label: `${currentYear}第一季度`, value: `${currentYear + ',' + 1}` }
    quarter3 = { label: `${currentYear}第${q}季度`, value: `${currentYear + ',' + 2}` }
    quarter4 = { label: `${currentYear}第三季度`, value: `${currentYear + ',' + 3}` }
  } else if (currentQuarter() === 3) {
    q = '三'
    quarter1 = { label: `${currentYear}第一季度`, value: `${currentYear + ',' + 1}` }
    quarter2 = { label: `${currentYear}第二季度`, value: `${currentYear + ',' + 2}` }
    quarter3 = { label: `${currentYear}第${q}季度`, value: `${currentYear + ',' + 3}` }
    quarter4 = { label: `${currentYear}第四季度`, value: `${currentYear + ',' + 4}` }
  } else if (currentQuarter() === 4) {
    q = '四'
    quarter1 = { label: `${currentYear}第二季度`, value: `${currentYear + ',' + 2}` }
    quarter2 = { label: `${currentYear}第三季度`, value: `${currentYear + ',' + 3}` }
    quarter3 = { label: `${currentYear}第${q}季度`, value: `${currentYear + ',' + 4}` }
    quarter4 = { label: `${currentYear + 1}第一季度`, value: `${currentYear + 1 + ',' + 1}` }
  }
  return [quarter1, quarter2, quarter3, quarter4]
}

// kpi 季度列表
export const quarterList = (start) => {
  if (!start) {
    start = new Date().getFullYear()
  }
  const result = []
  for (let i = start; i < start + 4; i++) {
    const obj = {
      value: i,
      label: i,
      children: []
    }
    for (let j = 1; j < 5; j++) {
      obj.children.push({
        value: j,
        label: 'Q' + j
      })
    }
    result.push(obj)
  }
  return result
}

// 单位转换 大于10个亿的 把万元 转换为亿
export const handlerUnit = (data, key) => {
  data = JSON.parse(JSON.stringify(data))
  const unitNum = 100000 // 10亿 现在的数据是以万元为单位
  if (data.find(item => item[key] > unitNum)) {
    data.forEach(item => {
      item[key] = parseFloat((item[key] / 10000).toFixed(2))
    })
  }
  return data
}

// 金额格式化
export const fmoney = function (msg, n) {
  msg = Math.round((Math.round(msg * 10000) / 10000) * 100) / 100
  n = n > 0 && n <= 20 ? n : 2
  var recordPlusOrMinus = false
  let s = 0
  if (msg < 0) {
    recordPlusOrMinus = true
    s = Math.abs(msg)
  } else {
    recordPlusOrMinus = false
    s = msg
  }
  s = parseFloat((s + '').replace('/[^\\d\\.-]/g', '')).toFixed(n) + ''
  var l = s.split('.')[0].split('').reverse()
  var r = s.split('.')[1]
  var t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  if (recordPlusOrMinus === true) {
    return '-' + t.split('').reverse().join('') + '.' + r
  }
  return t.split('').reverse().join('') + '.' + r
}

// 小于一万 转换为元 小于一亿 转换为万元
export const handlerToWanUnit = (money) => {
  let unit = '元'
  let m = money
  if (money < 0) {
    if (money > -10000) {
      unit = '元'
      m = money
    } else if (money <= -10000 && money >= -100000000) {
      unit = '万元'
      m = Math.round((money / 10000) * 100) / 100
    } else {
      unit = '亿元'
      m = Math.round((money / 100000000) * 100) / 100
    }
  } else {
    if (money < 10000) {
      unit = '元'
      m = money
    } else if (money >= 10000 && money <= 100000000) {
      unit = '万元'
      m = Math.round((money / 10000) * 100) / 100
    } else {
      unit = '亿元'
      m = Math.round((money / 100000000) * 100) / 100
    }
  }
  return {
    money: fmoney(m),
    unit
  }
}
