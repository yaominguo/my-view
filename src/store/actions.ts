import { CommitOptions } from 'vuex'
import mutations from './mutations'
interface Commit {
  (type: keyof typeof mutations, payload?: any, options?: CommitOptions): void
}

export default {
  exampleAction({ commit }: { commit: Commit }): void {
    // DO SOMETHING
    commit('SET_LOADING', true)
  },
}
