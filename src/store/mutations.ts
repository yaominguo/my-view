import { GlobalStateProps } from './index'

export default {
  setLoading(state: GlobalStateProps, val: boolean) {
    state.showLoading = val
  },
}
