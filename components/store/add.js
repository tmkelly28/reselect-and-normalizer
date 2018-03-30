export const ADD_ENTITIES = 'ADD_ENTITIES'

export default (normalized) => ({
  type: ADD_ENTITIES,
  ids: normalized.result,
  entities: normalized.entities
})
