import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';
import { PostsBlog } from '../../components/PostsBlog';

export function PostsPage() {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
        <PostsBlog />
      </ItemsDiv>
    </Base>
  );
}
