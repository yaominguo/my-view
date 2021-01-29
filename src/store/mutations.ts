import { GlobalStateProps } from './index'

export default {
  SET_LOADING(state: GlobalStateProps, val: boolean): void {
    state.showLoading = val
  },
}
