import styled from 'styled-components'

export const Base = styled.p`
  color: ${props => (props.logged ? '#04D361' : '#EBA417')};
  font-size: ${props => (props.fontSize ? props.fontSize : '21px')};
  margin: ${props => (props.margin ? props.margin : '0')};
`
