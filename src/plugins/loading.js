// loading
import store from 'store/'
const loading = {}

loading.install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    // 显示/隐藏遮罩
    showLoad: {
      get () {
        return (flag) => {
          store.commit('SHOWLOADINGFLAG', flag)
        }
      }
    }
  })
}
export default loading
