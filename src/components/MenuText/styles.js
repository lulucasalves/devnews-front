import styled from "styled-components";

export const Base = styled.p`
  color: ${(props) => (props.active ? "#E1E1E6" : "#A8A8B3")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.active ? "700" : "400")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "18.75px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  position: ${(props) => (props.position ? props.position : "relative")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  display: ${(props) => (props.display ? props.display : "block")};
  cursor: ${(props) => (props.cursor ? props.cursor : "")};

  &:after {
    content: "";
    border: ${(props) => (props.active ? "solid 2px #f8d05d" : "")};
    border-radius: 10px 10px 0 0;
    position: absolute;
    width: 100%;
    top: 46.5px;
    left: 0;
  }
`;
