import { Commit, Dispatch } from './index'

interface Method {
  commit: Commit
  dispatch: Dispatch
}

export default {
  example({ commit }: Method): void {
    // DO SOMETHING
    commit('SET_LOADING', true)
  },
}
