import {createSelector} from 'reselect'

export const selectPugs = ({pugs, owners}) => {
  return Object.keys(pugs)
    .map(id => ({
      ...pugs[id],
      owner: owners[pugs[id].ownerId]
    }))
}

const byColor = name => ({color}) => color === name
const fawn = byColor('fawn')
const black = byColor('black')
export const selectFawnPugs = createSelector(
  selectPugs,
  (pugs) => pugs.filter(fawn)
)
export const selectBlackPugs = createSelector(
  selectPugs,
  (pugs) => pugs.filter(black)
)
