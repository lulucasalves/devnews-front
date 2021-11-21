import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export function IconExample(props) {
  return (
    <Container {...props}>
      <FontAwesomeIcon icon={faCoffee} />
    </Container>
  )
}
