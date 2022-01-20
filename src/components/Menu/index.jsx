import { Base, ItemsDiv, Div } from "./styles";
import { MenuText } from "../MenuText";
import { Logo } from "../Logo";
import { GithubButton } from "../GithubButton";
import { useRouter } from "next/dist/client/router";
import { routesDocument } from "../../routes";

export function Menu(props) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Base>
      <ItemsDiv>
        <Div margin="0">
          <Logo margin="0 83px 0 0" />
          <Div margin="0">
            <MenuText
              cursor="pointer"
              margin="0 27px 0 0"
              active={path == routesDocument.initialPage}
              onClick={() => router.push(routesDocument.initialPage)}
            >
              Home
            </MenuText>

            <MenuText
              cursor="pointer"
              active={path != routesDocument.initialPage}
              onClick={() => router.push(routesDocument.postsPage)}
            >
              Posts
            </MenuText>
          </Div>
        </Div>
        <GithubButton />
      </ItemsDiv>
    </Base>
  );
}
