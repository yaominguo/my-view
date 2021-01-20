import { GlobalStateProps } from './index'

export default {
  setLoading(state: GlobalStateProps, val: Boolean) {
    state.showLoading = val
  },
}
