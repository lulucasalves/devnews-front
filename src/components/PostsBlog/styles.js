import styled from "styled-components";

export const Base = styled.div`
  max-width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  overflow: hidden;
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : "block")};
  max-width: ${(props) => (props.width ? props.width : "100%")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  margin: ${(props) => (props.margin ? props.margin : "80px auto 50px auto")};
  padding: ${(props) => (props.padding ? props.padding : "0 450px")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;

export const Div = styled.div`
  display: ${(props) => (props.display ? props.display : "block")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0 0 32px 0")};
  border-bottom: ${(props) =>
    props.border ? props.border : "1px solid #323238"};
  cursor: ${(props) => (props.cursor ? props.cursor : "")};
`;
