import { Base, ItemsDiv, Div } from './styles';
import { DefaultText } from '../DefaultText';
import { IconGithub } from '../Icons/IconGithub';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

export function GithubButton(props) {
  const [session] = useSession();

  console.log(session);

  return (
    <Base {...props}>
      <ItemsDiv>
        {session ? (
          <Div>
            <IconGithub logged={session} margin="0 17px 0 0" />
            <Div>
              <DefaultText margin="0 16px 0 0">{session.user.name}</DefaultText>
              <FiX onClick={() => signOut()} />
            </Div>
          </Div>
        ) : (
          <Div onClick={() => signIn('github')}>
            <IconGithub logged={session} margin="0 17px 0 0" />
            <Div>
              <DefaultText>Sing in with GitHub</DefaultText>
            </Div>
          </Div>
        )}
      </ItemsDiv>
    </Base>
  );
}
