import * as types from './types.js'

export default {
  /* 加载数据 */
  [types.LOAD_DEMO] (state, data) {
    state.demoData = data
  }
}
