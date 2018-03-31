import React, {Component} from 'react'
import {connect} from 'react-redux'
import {activateAccount, activateUnload} from '@actions/auth'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import ActivateTemplate from '@templates/Activate'

class Activate extends Component {
  componentDidMount () {
    const key = queryString.parse(this.props.location.search).key
    this.props.dispatch(activateAccount(key))
  }

  componentWillUnmount () {
    this.props.dispatch(activateUnload())
  }

  render () {
    return (
      <ActivateTemplate
        successMessage={this.props.successMessage}
        errorMessage={this.props.errorMessage}
        isLoading={this.props.isLoading}
      />
    )
  }
}

Activate.propTypes = {
  dispatch: PropTypes.func,
  location: PropTypes.object,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  successMessage: PropTypes.string
}

function mapStateToProps (state) {
  return {
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    loading: state.auth.loading,
    successMessage: state.auth.successMessage
  }
}

export default connect(mapStateToProps)(Activate)
