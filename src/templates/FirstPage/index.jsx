import { Base, ItemsDiv } from "./styles";
import { FirstContent } from "../../components/FirstContent";

export function FirstPage(props) {
  return (
    <Base>
      <ItemsDiv>
        <FirstContent price={props.price} />
      </ItemsDiv>
    </Base>
  );
}
