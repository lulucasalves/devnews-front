import styled from 'styled-components';

export const Base = styled.p`
  color: #737380;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  display: ${(props) => (props.display ? props.display : '')};
`;
