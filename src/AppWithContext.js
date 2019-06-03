import React from 'react'

import { AppContext } from './AppContext'

const AppWithContext = (Component) => {
  return (props) => (
    <AppContext.Consumer>
      {({ state, actions }) => {
        return <Component {...props} data={state} actions={actions} />
      }}
    </AppContext.Consumer>
  )
}

export default AppWithContext