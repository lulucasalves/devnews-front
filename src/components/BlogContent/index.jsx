import { Base, ItemsDiv, Div, Span } from './styles';
import { BlogText } from '../BlogText';
import { Button } from '../Button';
import Image from 'next/image';

export function BlogContent(props) {
  return (
    <Base {...props}>
      <ItemsDiv>
        <Div display="block">
          <Div margin="0 0 40px 0">
            <Image width="26px" height="26px" src="/clap.png" />
            <BlogText margin="0 0 0 16px">Hey, welcome</BlogText>
          </Div>
          <BlogText
            margin="0 0 24px 0"
            fontWeight="900"
            fontSize="72px"
            lineHeight="72px"
          >
            News about <br /> the <Span color="#61DCFB">React</Span> world
          </BlogText>
          <BlogText fontWeight="400" margin="0 0 40px 0" color="#E1E1E6">
            Get acess to all the publications
            <br />
            <Span color="#61DCFB" fontWeight="700">
              for $9,90 month
            </Span>
          </BlogText>
          <Button>Subscribe now</Button>
        </Div>
        <Image width="334px" height="520px" src="/woman.png" />
      </ItemsDiv>
    </Base>
  );
}
