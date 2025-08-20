import { type JSX } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export const SearchBox = (): JSX.Element => {
  return (
    <div className="w-md h-11 max-lg:w-full relative">
      <div className="flex items-center gap-2 bg-tertiary rounded-4xl p-4 border border-quaternary ">
        <input
          type="search"
          placeholder="جستجو در فروشگاه ..."
          className="w-full outline-none text-quinary search-input"
        />
        <Link to={"/"} className="text-quinary cursor-pointer">
          <FiSearch className="w-6 h-6" />
        </Link>
      </div>
      {/* Placeholder for additional elements, if needed for show more options */}
      <div className=""></div>
    </div>
  );
};
