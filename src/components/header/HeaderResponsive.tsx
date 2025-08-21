import { type JSX } from "react";
import { BtnMenu, Cart, SearchBox, Title } from "../index";
import { Link } from "react-router-dom";
import { PiUserBold } from "react-icons/pi";

export const HeaderResponsive = (): JSX.Element => {
  return (
    <header className="max-lg:flex hidden  flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full">
        {/* Btn toggle Menu */}
        <BtnMenu />

        {/* Title logo Link */}
        <Title />
        <div className="flex items-center gap-4">
          {/* Link My Account */}
          <Link
            to="/"
            className="bg-secondary p-4 rounded-full grid place-items-center text-white  text-4xs max-sm:hidden max-lg:bg-white max-lg:border max-lg:text-primary max-lg:border-primary">
            <PiUserBold className="w-5 h-5" />
          </Link>
          {/* Btn Cart */}
          <Link to={"/"}>
            <Cart />
          </Link>
        </div>
      </div>
      <SearchBox />
    </header>
  );
};
