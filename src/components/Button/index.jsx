import { Base } from './styles';
import { useSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { routesDocument } from '../../routes';

export function Button(props) {
  const router = useRouter();

  const [session] = useSession();

  function subscribe() {
    if (session) {
      return router.push(routesDocument.checkout);
    } else {
      signIn('github');
      return;
    }
  }

  return (
    <Base {...props} onClick={() => subscribe()}>
      {props.children}
    </Base>
  );
}
