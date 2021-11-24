import { Base } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function IconGithub(props) {
  return (
    <Base {...props}>
      <FontAwesomeIcon icon={faGithub} />
    </Base>
  )
}
