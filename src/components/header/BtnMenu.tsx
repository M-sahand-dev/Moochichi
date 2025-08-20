import { type JSX } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const BtnMenu = (): JSX.Element => {
  return (
    <button
      type="button"
      className="bg-secondary p-4 rounded-full grid place-items-center text-white text-4xs">
      {/* Icon or text can be added here */}
      <GiHamburgerMenu />
    </button>
  );
};
