import React from 'react'

export const List = ({of, render}) => (
  <ul>{of.map(render)}</ul>
)
