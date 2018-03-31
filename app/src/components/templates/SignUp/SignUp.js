import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading} from '@atoms'
import {Masthead} from '@molecules'
import {SignUpForm} from '@organisms'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const SignUp = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='account'>
        <FormattedMessage id='auth.signup.title' />
      </Heading>
    </Masthead>
    <Grid w={1} p='1rem'>
      <Alert type='error' message={props.errorMessage} />
      <Alert type='success' message={props.successMessage} />
    </Grid>

    {!props.successMessage &&
      <div>
        <Grid w={[1, 1 / 4, 1 / 4]} />
        <Grid w={[1, 1 / 2, 1 / 2]} p='1rem'>
          <SignUpForm onSubmit={props.formHandler} />
        </Grid>
      </div>
    }

    {props.successMessage &&
      <Heading level={2} icon='success'>
        Thank you for signing up. Please check your email to activate your account.
      </Heading>
    }

  </div>
)

SignUp.propTypes = {
  formHandler: PropTypes.func,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default SignUp
