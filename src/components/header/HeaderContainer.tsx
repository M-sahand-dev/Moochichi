import { type JSX } from "react";
import { Header, Navigation } from "../index";

export const HeaderContainer = (): JSX.Element => {
  return (
    <div className="">
      <div className="">
        {/* Header */}
        <Header />
        {/* Navigation Menu */}
        <Navigation />
      </div>
    </div>
  );
};
