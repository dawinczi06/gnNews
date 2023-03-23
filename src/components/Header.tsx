import { FC, useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import FeedbackModal from "./FeedbackModal";
import { useDispatch, useSelector } from "react-redux";
import { newsViewChange, RootState } from "../store";
import { Bars4Icon, Squares2X2Icon } from "@heroicons/react/24/outline";
import cx from "classnames";

const Header: FC = () => {
  const [isFeedbackOpened, setIsFeedbackOpened] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state.isNewsGrid);
  const dispatch = useDispatch();

  return (
    <>
      <header className="px-5 bg-gray-100">
        <div className="h-16 max-w-screen-2xl flex justify-between items-center mx-auto">
          <Link href={"/"} className="text-4xl font-bold">
            <span className="text-teal-600">gn</span>
            <span className="text-gray-700">News</span>
          </Link>
          <div className="space-x-3 flex items-center">
            <button
              onClick={() => dispatch(newsViewChange())}
              disabled={state}
              title="Grid view"
            >
              <Squares2X2Icon
                className={cx(
                  "w-8 h-8 hover:text-teal-600",
                  state ? "text-teal-600" : "text-black hover:text-teal-600"
                )}
              />
            </button>
            <button
              title="List view"
              onClick={() => dispatch(newsViewChange())}
              disabled={!state}
            >
              <Bars4Icon
                className={cx(
                  "w-8 h-8 hover:text-teal-600",
                  !state ? "text-teal-600" : "text-black hover:text-teal-600"
                )}
              />
            </button>
          </div>
          <div>
            <button
              onClick={() => setIsFeedbackOpened(true)}
              className="border border-gray-500 px-2 py-1 rounded hover:bg-teal-600 hover:border-teal-600 hover:text-white"
            >
              Feedback
            </button>
          </div>
        </div>
      </header>
      {isFeedbackOpened && (
        <Modal>
          <FeedbackModal setIsFeedbackOpened={setIsFeedbackOpened} />
        </Modal>
      )}
    </>
  );
};

export default Header;
