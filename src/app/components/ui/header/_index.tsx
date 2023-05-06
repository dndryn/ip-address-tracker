import React from "react";
import Heading from "./mainHeading";
import '@style/header';

function Header(props): JSX.Element {
  return (
    <header className="has-rows">
      <Heading name='IP Address Tracker' />
    </header>
  );
}
export default Header;
