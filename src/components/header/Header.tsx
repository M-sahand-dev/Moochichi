import { type JSX } from "react";
import { Title } from "../index";

export const Header = (): JSX.Element => {
  return (
    <header className="">
      <div className="">
        <div className="">
          {/* Title logo Link */}
          <Title />
          {/* Search box */}
        </div>
        <div className="">
          {/* Link My Account */}
          {/* Btn Cart */}
        </div>
      </div>
    </header>
  );
};
