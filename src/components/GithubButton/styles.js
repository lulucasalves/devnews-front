import styled from "styled-components";

export const Base = styled.div`
  max-width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  max-width: ${(props) => (props.width ? props.width : "")};
  padding: ${(props) => (props.padding ? props.padding : "14px 17px")};

  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  margin: ${(props) => (props.margin ? props.margin : "0 ")};
  background: ${(props) => (props.background ? props.background : "#1F2729")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "50px"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;

export const Div = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  max-width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  margin: ${(props) => (props.margin ? props.margin : "0 ")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;
