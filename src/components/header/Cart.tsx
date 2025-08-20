import { type JSX } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

export const Cart = (): JSX.Element => {
  return (
    <div className=" relative">
      <button
        type="button"
        className=" bg-senary rounded-4xl p-4 flex items-center gap-2 cursor-pointer text-3xs font-medium">
        <BsCart3 className="text-secondary font-bold" />
        <span className="max-lg:hidden">سبد خرید</span>
        <FaChevronDown className="max-lg:hidden" />
      </button>
      <div className=""></div>
    </div>
  );
};
