import { type JSX } from "react";
import { Header, HeaderResponsive, Navigation } from "../index";

export const HeaderContainer = (): JSX.Element => {
  return (
    <div className="">
      <div className="">
        {/* Header */}
        <Header />
        {/* Navigation Menu */}
        <Navigation />
        {/* Header Responsive */}
        <HeaderResponsive />
      </div>
    </div>
  );
};
