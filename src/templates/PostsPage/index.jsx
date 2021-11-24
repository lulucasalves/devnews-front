import { Base, ItemsDiv } from './styles';
import { PostsBlog } from '../../components/PostsBlog';

export function PostsPage() {
  return (
    <Base>
      <ItemsDiv>
        <PostsBlog />
      </ItemsDiv>
    </Base>
  );
}
