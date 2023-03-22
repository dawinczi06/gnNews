import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  const handleOpenModal = () => {};

  return (
    <header className="px-5 bg-gray-100">
      <div className="h-16 max-w-screen-2xl flex justify-between items-center mx-auto">
        <Link href={"/"} className="text-4xl font-bold">
          <span className="text-teal-600">gn</span>
          <span className="text-gray-700">News</span>
        </Link>
        <div>Switch</div>
        <div>
          <button
            onClick={handleOpenModal}
            className="border border-gray-500 px-2 py-1 rounded hover:bg-gray-500 hover:text-white"
          >
            Feedback
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
