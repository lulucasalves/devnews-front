import { Base, ItemsDiv, Div } from './styles';
import { DefaultText } from '../DefaultText';
import { IconGithub } from '../Icons/IconGithub';
import { FiX } from 'react-icons/fi';

export function GithubButton(props) {
  const logged = true;

  function quit() {}

  return (
    <Base {...props}>
      <ItemsDiv>
        {logged ? (
          <Div>
            <IconGithub logged={logged} margin="0 17px 0 0" />
            <Div>
              <DefaultText margin="0 16px 0 0">lulucasalves</DefaultText>
              <FiX  />
            </Div>
          </Div>
        ) : (
          <Div>
            <IconGithub logged={logged} margin="0 17px 0 0" />
            <Div>
              <DefaultText>Sing in with GitHub</DefaultText>
            </Div>
          </Div>
        )}
      </ItemsDiv>
    </Base>
  );
}
