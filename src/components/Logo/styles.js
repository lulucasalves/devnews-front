import styled from 'styled-components'

export const Base = styled.p`
  color: ${props => (props.color ? props.color : '#E1E1E6')};
  font-size: ${props => (props.fontSize ? props.fontSize : '32px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '37,5px')};
  margin: ${props => (props.margin ? props.margin : '0')};
  cursor: ${props => (props.cursor ? props.cursor : 'default')};
`
