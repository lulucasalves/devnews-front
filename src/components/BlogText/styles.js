import styled from 'styled-components'

export const Base = styled.p`
  color: ${props => (props.color ? props.color : '#E1E1E6')};
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '35px')};
  margin: ${props => (props.margin ? props.margin : '0')};
`
