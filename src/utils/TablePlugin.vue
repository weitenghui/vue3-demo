<template>
  <div>
    <div class="plugin-view" ref="plugin-view">
      <!-- 列表 -->
      <slot></slot>
      <!-- 头部浮动 -->
      <slot></slot>
      <!-- 进度条 -->
      <div @scroll="scrollEvent" class="progress-bar" ref="progress-bar">
        <div class="progress-view" ref="progress-view"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bottomHeight: {
      type: Number,
      default: () => 0 // 如果是 ant 框架自带分页栏 高度应该是 65px
    }
  },
  data () {
    return {
      // 监听器
      erd: undefined,
      // 是否滚动了头部悬浮
      isSuspensionScroll: false,
      // 是否进入了自定义滚动条
      isPBScroll: false,
      // 当前插件父视图
      pluginView: undefined,
      // 当前自定义进度条
      progressBar: undefined,
      progressView: undefined,
      // 当前最外层滚动对象
      scrollView: undefined,
      // 当前展示的 table
      tableWrapper: undefined,
      // 当前展示的 table 的 tableBody
      tableBody: undefined,
      // 当前展示的 table 的 header
      tableThead: undefined,
      // 当前展示的 table 的 header 的高度
      tableTheadHeight: 0,
      // 头部悬浮的 table
      tableWrapperSuspension: undefined,
      // 头部悬浮部分
      tableBodySuspension: undefined
    }
  },
  // watch: {
  //   // 监听列表高度变化，有变化就需要重新布置位置
  //   'tableWrapper.clientHeight': {
  //     handler (newHeight, oldHeight) {
  //       console.log('tableWrapper.clientHeight', newHeight, oldHeight)
  //       this.scrollChange()
  //     }
  //   },
  //   // 监听列表头高度变化，有变化就需要重新布置位置
  //   'tableThead.clientHeight': {
  //     handler (newHeight, oldHeight) {
  //       console.log('tableThead.clientHeight', newHeight, oldHeight)
  //       this.tableTheadHeight = newHeight
  //       this.tableWrapperSuspension.style.height = `${newHeight}px`
  //       this.scrollChange()
  //     }
  //   }
  // },
  methods: {
    // 内容宽度变化刷新修改进度条宽度
    reloadUI () {
      // 将进度条的宽度与 tableBody 保持一致
      setTimeout(() => {
        this.progressView.style.width = `${this.tableBody.scrollWidth}px`
      }, 10)
    },
    // 自定义滚动条滚动中
    scrollEvent (e) {
      if (this.isPBScroll) {
        this.tableBody.scrollLeft = e.target.scrollLeft
        this.tableBodySuspension.scrollLeft = e.target.scrollLeft
      }
    },
    // 滚动变化处理
    scrollChange () {
      // 获取元素的大小及其相对于视口的位置
      const pluginViewRect = this.pluginView.getBoundingClientRect()
      // 检查 tableBody 宽度是否还支持滚动
      const isTableBodyScroll = this.tableBody.clientWidth < this.tableBody.scrollWidth
      // 滚动控件进度条上面以滚动过的高度
      const topY = this.scrollView.scrollTop
      // 滚动控件进度条上面以滚动过的高度 + 滚动控件高度 = 当前滚动控件窗口的最底部Y值位置
      const lastY = topY + this.scrollView.clientHeight
      // 当前距离窗口顶部的高度 + 滚动控件进度条上面以滚动过的高度 = 当前控件距离顶部的滚动距离
      const offsetTop = pluginViewRect.y + topY
      // 最小Y值
      const minY = offsetTop + this.progressView.clientHeight
      // 最大Y值
      const maxY = offsetTop + this.pluginView.clientHeight - this.bottomHeight
      // 判断 lastY 是否在 最大最小Y值范围以内 && tableBody 的宽度是否还支持滚动
      if (lastY > minY && lastY < maxY && isTableBodyScroll) {
        this.progressBar.style.display = 'block'
        this.progressBar.style.bottom = `${this.bottomHeight + (maxY - lastY)}px`
        this.progressBar.scrollLeft = this.tableBody.scrollLeft
      } else {
        this.progressBar.style.display = 'none'
      }
      // 判断头部悬浮位置
      this.tableWrapperSuspension.style.top = `${Math.max(Math.min(-pluginViewRect.y, (maxY - this.tableTheadHeight - offsetTop)), 0)}px`
    }
  },
  mounted () {
    // 当前封装组件
    this.pluginView = this.$refs['plugin-view']
    // 当前自定义进度条
    this.progressBar = this.$refs['progress-bar']
    this.progressView = this.$refs['progress-view']
    // 当前滚动监听对象
    const scrollListener = window
    // 当前滚动对象
    this.scrollView = document.documentElement
    // 获得所有的 table
    const tableWrappers = this.pluginView.getElementsByClassName('ant-table-wrapper')
    // 当前展示的 table
    this.tableWrapper = tableWrappers[0]
    // 用于头部悬浮的 table
    this.tableWrapperSuspension = tableWrappers[1]
    // 获取头部高度用于悬浮
    this.tableThead = this.tableWrapper.getElementsByClassName('ant-table-thead')[0]
    this.tableTheadHeight = this.tableThead.clientHeight
    // 获取用于展示数据的 tableBody
    const tableScroll = this.tableWrapper.getElementsByClassName('ant-table-scroll')[0]
    this.tableBody = tableScroll.getElementsByClassName('ant-table-body')[0]
    // 将进度条的宽度与 tableBody 保持一致
    this.progressView.style.width = `${this.tableBody.scrollWidth}px`
    // 添加进入自定义进度条监听，以防重复设置滚动
    this.progressBar.onmouseenter = () => {
      this.isPBScroll = true
      this.isSuspensionScroll = false
    }
    // 添加进 tableBody 监听，以防重复设置滚动
    this.tableBody.onmouseenter = () => {
      this.isPBScroll = false
      this.isSuspensionScroll = false
    }
    // 添加 tableBody 滚动监听 以便同步滚动进度
    this.tableBody.addEventListener('scroll', (e) => {
      // 非自定义进度条滚动 非头部悬浮滚动
      if (!this.isPBScroll && !this.isSuspensionScroll) {
        this.progressBar.scrollLeft = e.target.scrollLeft
        this.tableBodySuspension.scrollLeft = e.target.scrollLeft
      }
    })
    // 通过使用定时器的方式来让代码延迟执行，每次窗口改变的时候就清除事件，只有停下改变之后才会继续再执行，解决resize执行多次的问题。
    var resizeTimer = null
    // 窗口大小变化监听
    window.onresize = () => {
      if (resizeTimer) { clearTimeout(resizeTimer) }
      resizeTimer = setTimeout(() => {
        this.scrollChange()
      }, 100)
    }
    // 监听滚动对象
    scrollListener.addEventListener('scroll', (e) => {
      this.scrollChange()
    })

    // element-resize-detector 使用简介: https://www.jianshu.com/p/b9004cb2fa2c
    var elementResizeDetectorMaker = require('element-resize-detector')
    // 创建实例
    this.erd = elementResizeDetectorMaker()
    // 监听 tableWrapper 大小变化
    this.erd.listenTo(this.tableWrapper, (element) => {
      this.scrollChange()
    })
    // 监听 tableThead 大小变化
    this.erd.listenTo(this.tableThead, (element) => {
      this.tableTheadHeight = element.clientHeight
      this.tableWrapperSuspension.style.height = `${this.tableTheadHeight + 2}px`
      this.scrollChange()
    })

    // 头部悬浮处理
    this.tableWrapperSuspension.style.position = 'absolute'
    this.tableWrapperSuspension.style.top = '0'
    this.tableWrapperSuspension.style.left = '0'
    this.tableWrapperSuspension.style.right = '0'
    this.tableWrapperSuspension.style.height = `${this.tableTheadHeight + 2}px`
    this.tableWrapperSuspension.style.overflow = 'hidden'
    // 获取头部悬浮的 tableBody
    const tableScrollSuspension = this.tableWrapperSuspension.getElementsByClassName('ant-table-scroll')[0]
    this.tableBodySuspension = tableScrollSuspension.getElementsByClassName('ant-table-body')[0]
    // 添加进 tableBody 监听，以防重复设置滚动
    this.tableBodySuspension.onmouseenter = () => {
      this.isPBScroll = false
      this.isSuspensionScroll = true
    }
    // 添加 tableBody 滚动监听 以便同步滚动进度
    this.tableBodySuspension.addEventListener('scroll', (e) => {
      // 非自定义进度条滚动 悬浮头部滚动
      if (!this.isPBScroll && this.isSuspensionScroll) {
        this.progressBar.scrollLeft = e.target.scrollLeft
        this.tableBody.scrollLeft = e.target.scrollLeft
      }
    })
  },
  beforeDestroyed () {
    // 移除监听器
    if (this.erd) {
      this.erd.uninstall(this.tableWrapper)
      this.erd.uninstall(this.tableThead)
    }
  }
}
</script>

<style scoped>
.plugin-view {
  position: relative;
}
.progress-view {
  height: 15px;
}
.progress-bar {
  position: absolute;
  overflow-x: auto;
  display: none;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
