import { createStore, DispatchOptions, CommitOptions } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

export interface GlobalStateProps {
  showLoading: boolean
}
/** ------------------------------------- 分隔线 --------------------------------------- */

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
const store = createStore<GlobalStateProps>({
  state,
  mutations,
  actions,
})
type StoreType = typeof store

/** 修改Store类型上的commit和dispatch方法类型， 使其在页面中使用store.commit等方法有约束和提示 */
interface MyStore extends StoreType {
  commit: Commit
  dispatch: Dispatch
}
export default store as MyStore
