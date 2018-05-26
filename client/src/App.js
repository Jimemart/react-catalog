import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import List from './containers/List/List'
import Single from './containers/Single/Single'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path='/' exact component={List} />
            <Route path='/phone/:id' exact render={() => (
                !this.props.selectedPhone ? ( <Redirect push to="/" />
            ) : (<Single />
            )
          )} />
          </Switch>
        </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    selectedPhone: state.selectedPhone
  }
}

export default withRouter(connect(mapStateToProps)(App));
