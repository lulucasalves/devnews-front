import styled from "styled-components";

export const Base = styled.button`
  color: ${(props) => (props.color ? props.color : "#121214")};

  background: ${(props) => (props.background ? props.background : "#EBA417")};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "23,44px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "20px 63px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "50px"};
`;
