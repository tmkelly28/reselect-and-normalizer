import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {List} from './utils'
import {selectPugs} from './store/selectors'
import {getPugs} from './store/modules/pugs'

export const PugsList = ({pugs}) => (
  <List
    of={pugs}
    render={({id, name, owner}) => (
      <li key={id}>
        {name}{owner && `, ${owner.name}`}
      </li>
    )}
  />
)

export const loadPugs = Show => class PugLoader extends Component {
  componentDidMount = () => this.props.load()
  render = () => <Show {...this.props} />
}

export default compose(
  connect(
    (state) => ({
      pugs: selectPugs(state)
    }),
    (dispatch) => ({
      load: () => dispatch(getPugs())
    })
  ),
  loadPugs
)(PugsList)
