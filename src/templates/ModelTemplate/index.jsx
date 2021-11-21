import { Container, ItemsDiv, Div } from './styles'
import Head from 'next/head'
import { Model } from '../../components/Model'
import { Example } from '../../components/Icons'

export function ModelTemplate() {
  return (
    <Container>
      <Head>
        <title>Example</title>
      </Head>
      <ItemsDiv>
        <Div>
          <Model margin="0 10px 0 0">Let´s code</Model>
          <Example />
        </Div>
      </ItemsDiv>
    </Container>
  )
}
