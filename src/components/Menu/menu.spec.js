import { render } from "@testing-library/react";
import { Menu } from ".";

jest.mock("next-auth/client", () => {
  return {
    signIn() {},

    signOut() {},

    useSession() {},
  };
});

test("active link", () => {
  const { debug } = render(<Menu />);

  debug();
});
