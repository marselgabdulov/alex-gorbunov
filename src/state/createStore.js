import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `TOGGLE_NAVPANNEL`) {
    return Object.assign({}, state, {
      isNavPannelVisible: !state.isNavPannelVisible,
    })
  }
  return state
}

const initialState = { isNavPannelVisible: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
