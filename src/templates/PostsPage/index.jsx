import { Base, ItemsDiv } from "./styles";
import { PostsBlog } from "../../components/PostsBlog";

export function PostsPage(props) {
  return (
    <Base>
      <ItemsDiv>
        <PostsBlog content={props.content} />
      </ItemsDiv>
    </Base>
  );
}
