import { type JSX } from "react";
import { Link } from "react-router-dom";

export const Title = (): JSX.Element => {
  return (
    //  Title logo Link
    <Link to={"/"} className="text-xs text-primary flex items-center gap-1.5">
      <div className="bg-secondary w-10 h-4 rounded-2xl"></div>
      <span className="font-bold">موچیچی</span> <span>شاپ</span>
    </Link>
  );
};
