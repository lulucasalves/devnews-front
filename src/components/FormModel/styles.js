import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  background-color: ${props => (props.background ? props.background : '')};
  height: ${props => (props.height ? props.height : '')};
  padding: ${props => (props.padding ? props.padding : '0')};
`

export const ItemsDiv = styled.div`
  display: ${props => (props.display ? props.display : 'block')};
  max-width: ${props => (props.width ? props.width : '100%')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
`

export const Div = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'block')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  margin: ${props => (props.margin ? props.margin : '0')};
  border: ${props => (props.border ? props.border : '0')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0')};
  padding: ${props => (props.padding ? props.padding : '0')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
`
