import styled from 'styled-components'
import {Box} from 'grid-styled'

const Container = styled(Box)`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #efefef;
`
const StyledFooter = styled(Box)`
  width: 100%;
  padding: 0.5rem;
`

export {
  Container,
  StyledFooter
}
