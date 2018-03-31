import React from 'react'
import {Grid} from 'grid-styled'
import {Alert, Heading, Button} from '@atoms'
import {Masthead} from '@molecules'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'

const Activate = props => (
  <div>
    <Masthead>
      <Heading level={2} icon='account'>
        <FormattedMessage id='auth.activate.title' />
      </Heading>
    </Masthead>

    <Alert type='error' message={props.errorMessage} />
    <Alert type='success' message={props.successMessage} />

    <Grid w={[1, 1 / 4, 1 / 4]} />
    {props.successMessage &&
      <Grid w={[1]} p='1rem'>
        <Heading level={3}>
          <FormattedMessage id='auth.activate.nextStep' />
        </Heading>
        <Button
          type='button'
          href='/log-in'
          width='auto'
        >
          <FormattedMessage id='auth.logIn.cta' />
        </Button>
      </Grid>
    }
  </div>
)

Activate.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
}

export default Activate
