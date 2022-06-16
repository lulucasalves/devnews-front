import styled from "styled-components";

export const Base = styled.div`
  max-width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  overflow: hidden;
`;

export const ItemsDiv = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  max-width: ${(props) => (props.width ? props.width : "100%")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  margin: ${(props) => (props.margin ? props.margin : "160px auto 0 auto")};
  padding: ${(props) => (props.padding ? props.padding : "0 300px")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
`;

export const Div = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
`;

export const Span = styled.span`
  color: ${(props) => (props.color ? props.color : "#61DCFB")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
