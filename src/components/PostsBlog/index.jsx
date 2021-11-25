import { Base, ItemsDiv, Div } from './styles';
import { BlogText } from '../BlogText';
import { DefaultText } from '../DefaultText';
import { useRouter } from 'next/dist/client/router';
import { routesDocument } from '../../routes';

export function PostsBlog(props) {
  const content = props.content;
  const router = useRouter();

  return (
    <Base>
      <ItemsDiv>
        {content.map((val) => {
          return (
            <Div
              cursor="pointer"
              margin="32px 0 0 0"
              key={val.slug}
              onClick={() => router.push(`/posts/${val.slug}`)}
            >
              <DefaultText fontWeight="400" color="#A8A8B3" margin="0 0 16px 0">
                {val.updatedAt}
              </DefaultText>
              <BlogText margin="0 0 5px 0">{val.title}</BlogText>
              <DefaultText fontWeight="400" color="#A8A8B3" margin="0 0 16px 0">
                {val.excerpt}
              </DefaultText>
            </Div>
          );
        })}
      </ItemsDiv>
    </Base>
  );
}
