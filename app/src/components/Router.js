import React, {Component} from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import AuthRequired from '@components/auth/AuthRequired'
import {Footer, NavigationBar} from '@organisms'
import {Account, Dashboard, LogIn, LogOut, SignUp, Welcome} from '@pages'

const AuthenticatedDashboard = AuthRequired(Dashboard)
const ConnectedDashboard = connect()(AuthenticatedDashboard)

const AuthenticatedAccount = AuthRequired(Account)
const ConnectedAccount = connect()(AuthenticatedAccount)

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <NavigationBar />
          <Route exact path='/' component={Welcome} />
          <Route exact path='/log-in' component={LogIn} />
          <Route exact path='/log-out' component={LogOut} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/account' component={ConnectedAccount} />
          <Route exact path='/dashboard' component={ConnectedDashboard} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
