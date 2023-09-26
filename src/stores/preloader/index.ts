import state from './state'
import actions from './actions'
import getters from './getters'

export const usePreloaderStore = defineStore('preloader', {
  state,
  actions,
  getters
})
