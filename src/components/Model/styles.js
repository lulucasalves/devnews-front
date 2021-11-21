import styled from 'styled-components'

export const Container = styled.h1`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : 'Montserrat, sans-serif'};
  color: ${props => (props.color ? props.color : '#363636')};
  font-size: ${props => (props.fontSize ? props.fontSize : '24px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '900')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '29px')};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : '0.75px'};
  margin: ${props => (props.margin ? props.margin : '0')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
`
