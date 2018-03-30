import {normalize} from 'normalizr'
import {ArrayOfPugs} from '../../schema'
import add, {ADD_ENTITIES} from '../add'

export const getPugs = () => (dispatch, _, {axios}) => axios.get('/pugs')
  .then(({data}) => dispatch(add(normalize(data, ArrayOfPugs))))
  .catch(console.error.bind(console))

export default (state = {}, action) => {
  console.log(action)
  if (action.type === ADD_ENTITIES) {
    return {
      ...state,
      ...action.entities.pugs
    }
  }
  return state
}
