import state from './state'
import actions from './actions'
import getters from './getters'

export const usePreloaderStore = defineStore('preloader', {
  state,
  actions,
  getters
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreloaderStore, import.meta.hot))
}
