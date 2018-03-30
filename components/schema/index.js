import {schema} from 'normalizr'

export const Owner = new schema.Entity('owners')
export const Pug = new schema.Entity('pugs', {
  owner: Owner
})
export const ArrayOfPugs = new schema.Array(Pug)
