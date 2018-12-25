import * as types from './types.js'

export default {
  /* 加载列表 */
  load_demo_data: ({ commit }, data) => {
    commit(types.LOAD_DEMO, data)
  }
}
