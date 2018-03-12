import React, {Component} from 'react'
import {signUpAction, signUpUnloadAction} from '@actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import SignUpTemplate from '@templates/SignUp'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  componentWillUnmount () {
    this.props.signUpUnloadAction()
  }

  submit (values) {
    this.props.signUpAction(values, this.props.history)
  }

  render () {
    if (this.props.authenticated) {
      return (<h1>already logged in</h1>)
    } else {
      return (
        <SignUpTemplate
          formHandler={this.submit}
          errorMessage={this.props.errorMessage}
          successMessage={this.props.successMessage}
        />
      )
    }
  }
}

SignUp.propTypes = {
  authenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.object,
  signUpAction: PropTypes.func,
  signUpUnloadAction: PropTypes.func,
  successMessage: PropTypes.string
}

function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading,
    successMessage: state.auth.successMessage
  }
}

export default connect(mapStateToProps, {signUpAction, signUpUnloadAction})(SignUp)
