import {ADD_ENTITIES} from '../add'

export default (state = {}, action) => {
  if (action.type === ADD_ENTITIES) {
    return {
      ...state,
      ...action.entities.owners
    }
  }
  return state
}
