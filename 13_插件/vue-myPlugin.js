(function (window) {

  // 定义插件对象
  const MyPlugin = {}
  // 插件对象必须有一个install方法
  MyPlugin.install = function (Vue, options) {
    console.log('install()', options)

    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue.myGlobalMethod()')
    }

    // 2. 添加一个全局资源(asset)
    Vue.directive('my-directive', (el, binding) => {
      el.textContent = '------' + binding.value
    })

    // 4. 添加一个实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm.$myMethod()')
    }
  }

  //暴露插件对象
  window.MyPlugin = MyPlugin
})(window)

/* 
执行函数定义: 创建函数对象
执行函数: 执行函数对象内部包含所有语句

fn()
fn2()
function fn (){}
const fn2 = function (){}

*/