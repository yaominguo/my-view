import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export interface GlobalStateProps {
  showLoading: boolean
}
export default createStore<GlobalStateProps>({
  state,
  mutations,
  actions,
})
