import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { ItemsDiv, Div } from './styles';
import { BlogText } from '../../components/BlogText';
import { DefaultText } from '../../components/DefaultText';



interface Post {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: Post) {
  return (
    <>
      <ItemsDiv>
        <Div key={post.slug} margin="80px 0 0 0">
          <BlogText
            margin="0 0 24px 0"
            fontSize="54px"
            fontWeight="900"
            lineHeight="60px"
          >
            {post.title}
          </BlogText>
          <DefaultText margin="0 0 32px 0" fontWeight="400" color="#A8A8B3">
            {post.updatedAt}
          </DefaultText>
          <DefaultText
            margin="0 0 64px 0"
            fontSize="18px"
            fontWeight="400"
            lineHeight="25px"
          >
            {post.content}
          </DefaultText>
        </Div>
      </ItemsDiv>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });
  const { slug } = params;

  if (!session) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      }
    }
  }


  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('posts', String(slug), {});
  console.log(RichText.asHtml(response.data.content))


  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asText(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  return {
    props: { post }
  }
}