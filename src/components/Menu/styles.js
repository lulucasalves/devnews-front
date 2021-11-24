import styled from 'styled-components';

export const Base = styled.div`
  max-width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  border-bottom: ${(props) =>
    props.bottom ? props.bottom : '1px solid #29292E'};
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  max-width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '80px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'space-between'};

  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  padding: ${(props) => (props.padding ? props.padding : '0 300px')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`;

export const Div = styled.div`
  display: ${(props) => (props.display ? props.display : 'flex')};
  max-width: ${(props) => (props.width ? props.width : '100%')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
`;
