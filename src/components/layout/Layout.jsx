import { useContext } from "react";
import { Context } from "../../context";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  const { isBurgerActive, burgerStateHandler, setIsBurgerActive } =
    useContext(Context);

  return (
    <>
      <MainNavigation
        isBurgerActive={isBurgerActive}
        burgerStateHandler={burgerStateHandler}
      />
      <main onClick={() => setIsBurgerActive(false)}>{props.children}</main>
    </>
  );
};

export default Layout;
