import styled from 'styled-components'

export const Container = styled.p`
  color: ${props => (props.color ? props.color : '#000')};
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  margin: ${props => (props.margin ? props.margin : '0')};
`
