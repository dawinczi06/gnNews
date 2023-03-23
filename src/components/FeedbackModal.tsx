import { FC, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useClickOutside from "../hooks/useClickOutside";

type Props = {
  setIsFeedbackOpened: (v: boolean) => void;
};
const FeedbackModal: FC<Props> = (props) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => props.setIsFeedbackOpened(false));

  return (
    <div className="relative w-full max-w-lg">
      <div
        ref={modalRef}
        className="relative z-10 space-y-5 overflow-hidden rounded-lg bg-white p-6 shadow-xl transition transition md:p-10"
      >
        <div>
          <h2 className="font-bold">What was the biggest challenge:</h2>
          <p className="mt-2">
            I think the biggest challenge was to find and implement correct
            country flag library (to fit dynamic list rendering).
          </p>
        </div>
        <div>
          <h2 className="font-bold">What was the most fun:</h2>
          <p className="mt-2">
            Pretty much the whole project. Because the task wasn't too big, it
            was fun to quickly create small working app with couple different
            technologies.
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => props.setIsFeedbackOpened(false)}
          className="font-bold"
        >
          <XMarkIcon className="w-6 h-6 hover:text-teal-800" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
