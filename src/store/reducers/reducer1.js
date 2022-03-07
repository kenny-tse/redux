import * as ACTION_TYPES from '../actions/action_types'

// this is the actual redux state
const initalState = {
  stateprop1: false
}

const rootReducers = (state = initalState, action) => {

  switch (action.type) {

    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateprop1: true
      }

    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false
      }

    default:
      return state;
  }
}

export default rootReducers;