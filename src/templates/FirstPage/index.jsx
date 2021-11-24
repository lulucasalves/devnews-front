import { Base, ItemsDiv, Div } from './styles';
import { Menu } from '../../components/Menu';
import { FirstContent } from '../../components/FirstContent';

export function FirstPage(props) {
  return (
    <Base>
      <ItemsDiv>
        <Menu />
        <FirstContent price={props.price} />
      </ItemsDiv>
    </Base>
  );
}
