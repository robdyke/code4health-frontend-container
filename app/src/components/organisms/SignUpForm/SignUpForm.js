import React, {Component} from 'react'
import {Fields, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import * as Validate from '@validators'
import {Button, Checkbox, Paragraph} from '@atoms'
import {FormInput} from '@molecules'

const renderFields = (fields) => (
  <div>
    <FormInput
      type='text'
      placeholder='Username'
      label='Username'
      error={fields.username.meta.error} touched={fields.username.meta.touched}
      onChangeHandler={fields.username.input.onChange}
      onBlurHandler={fields.username.input.onBlur}
      content={fields.username.input.value}
      required
    />

    <FormInput
      type='text'
      placeholder='Email'
      label='Email'
      error={fields.email.meta.error} touched={fields.email.meta.touched}
      onChangeHandler={fields.email.input.onChange}
      onBlurHandler={fields.email.input.onBlur}
      content={fields.email.input.value}
      required
    />

    <FormInput
      type='password'
      placeholder='Password'
      label='Password'
      error={fields.password.meta.error} touched={fields.password.meta.touched}
      onChangeHandler={fields.password.input.onChange}
      onBlurHandler={fields.password.input.onBlur}
      content={fields.password.input.value}
      required
    />

    <FormInput
      type='password'
      placeholder='Confirm Password'
      label='Confirm Password'
      error={fields.confirmPassword.meta.error} touched={fields.confirmPassword.meta.touched}
      onChangeHandler={fields.confirmPassword.input.onChange}
      onBlurHandler={fields.confirmPassword.input.onBlur}
      content={fields.confirmPassword.input.value}
      required
    />

    <Checkbox type='checkbox' onChangeHandler={fields.termsAndConditions.input.onChange} checked={fields.termsAndConditions.input.checked}>
      I accept the <a href='#'>Terms and Conditions</a>
    </Checkbox>
  </div>
)

class SignUp extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.props.errorMessage}

        {this.props.successMessage &&
          <Paragraph>
            Thank you for signing up. Please check your email to activate your account.
          </Paragraph>
        }

        {!this.props.successMessage &&
          <div>
            <Fields names={['username', 'email', 'password', 'confirmPassword', 'termsAndConditions']} component={renderFields} />
            <Button type='submit' disabled={this.props.invalid || this.props.isLoading}>Create your account</Button>
            <Button variant='muted' href={`/log-in`}>
              Already registered? Log in
            </Button>
          </div>
        }
      </form>
    )
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.any,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  invalid: PropTypes.bool,
  isLoading: PropTypes.bool
}

const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'required'
  }

  if (!Validate.Email(values.email)) {
    errors.email = 'invalid email address'
  }

  if (!values.email) {
    errors.email = 'required'
  }

  if (!Validate.MinimumLength(values.password, 4)) {
    errors.password = 'password must be at least 4 characters'
  }

  if (!values.password) {
    errors.password = 'required'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'required'
  }

  if (!values.termsAndConditions) {
    errors.termsAndConditions = 'required'
  }

  if (!Validate.MinimumLength(values.confirmPassword, 4)) {
    errors.confirmPassword = 'password must be at least 4 characters'
  }

  if (!Validate.Match(values.password, values.confirmPassword)) {
    errors.confirmPassword = 'passwords must match'
  }

  return errors
}

const reduxFormSignUp = reduxForm({
  form: 'signUp',
  validate,
  fields: ['username', 'email', 'password', 'confirmPassword', 'termsAndConditions']
})(SignUp)

export default reduxFormSignUp
