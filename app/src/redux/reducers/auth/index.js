import * as constants from '@constants/auth'

export default function (state = {}, action) {
  switch (action.type) {
    case constants.AUTHENTICATED:
      return {...state, authenticated: true}
    case constants.LOG_IN_SUCCESS:
      return {...state, authenticated: true}
    case constants.UNAUTHENTICATED:
      console.log('unauthenticated')
      return {...state, authenticated: false}
    case constants.LOG_IN_ERROR:
      return {...state, errorMessage: action.payload}
    case constants.LOG_IN_UNLOAD:
      return {...state, log_in_error: null}

    // Sign Up
    case constants.SIGN_UP_IN_PROGRESS:
      return {...state, errorMessage: null, successMessage: null}
    case constants.SIGN_UP_ERROR:
      return {...state, errorMessage: 'auth.signup.error'}
    case constants.SIGN_UP_SUCCESS:
      return {...state, successMessage: 'auth.signup.success', errorMessage: null}
    case constants.SIGN_UP_UNLOAD:
      return {...state, successMessage: null, errorMessage: null}

    // Activation
    case constants.ACTIVATION_SUCCESS:
      return {...state, activation_successful: true, loading: false}
    case constants.ACTIVATION_IN_PROGRESS:
      return {...state, loading: true}
    case constants.ACTIVATION_ERROR:
      return {...state, error: true, loading: false, errorMessage: 'unable to activate account'}

    // Password Reset
    case constants.PASSWORD_RESET_ERROR:
      return {...state, password_reset_error: action.payload}
    case constants.PASSWORD_RESET_UNLOAD:
      return {...state, password_reset_error: null}
  }
  return state
}
