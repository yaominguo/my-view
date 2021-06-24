import { createStore, DispatchOptions, CommitOptions } from 'vuex'
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

/** 去除tuple第一项 */
type CutHead<Tuple extends unknown[]> = ((...args: Tuple) => unknown) extends (
  first: any,
  ...rest: infer Result
) => unknown
  ? Result
  : never

type MutationsType = typeof mutations
type CommitPayload = {
  [key in keyof MutationsType]: CutHead<Parameters<MutationsType[key]>>[0]
}
/** 取代Vuex中的Commit类型，以此加强约束和代码提示 */
export interface Commit {
  <T extends keyof CommitPayload>(
    type: T,
    payload?: CommitPayload[T],
    options?: CommitOptions
  ): void
}
type ActionsType = typeof actions
type DispatchPayload = {
  [key in keyof ActionsType]: CutHead<Parameters<ActionsType[key]>>[0]
}
/** 取代Vuex中的Dispatch类型，以此加强约束和代码提示 */
export interface Dispatch {
  <T extends keyof DispatchPayload>(
    type: T,
    payload?: DispatchPayload[T],
    options?: DispatchOptions
  ): Promise<any>
}
