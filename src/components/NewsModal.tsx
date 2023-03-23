import { FC, useRef } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NewsDto } from "../pages/country/[id]";
import useClickOutside from "../hooks/useClickOutside";

type Props = {
  data: NewsDto;
  setIsModalOpened: (value: NewsDto | undefined) => void;
};
const NewsModal: FC<Props> = (props) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => props.setIsModalOpened(undefined));

  return (
    <div className="relative w-full max-w-2xl">
      <div
        ref={modalRef}
        className="relative z-10 overflow-hidden rounded-lg bg-white p-6 shadow-xl transition transition md:p-10"
      >
        <h2 className="font-bold">{props.data.title}</h2>
        <p className="text-xs mt-1">
          Author: {props.data.author} | Date:{" "}
          {format(new Date(props.data.publishedAt), "dd.MM.yyyy")}
        </p>
        {props.data.urlToImage && (
          <img className="mt-5" src={props.data.urlToImage} alt="newsImage" />
        )}
        <p className="mt-5 text-sm">{props.data.content}</p>
        <div className="mt-5 text-sm italic">
          <span>Source: </span>
          <Link
            href={props.data.url}
            target="_blank"
            className="hover:text-teal-800 underline"
          >
            Link
          </Link>
        </div>
      </div>
      <div className="absolute top-3 right-3 z-20">
        <button
          onClick={() => props.setIsModalOpened(undefined)}
          className="font-bold"
        >
          <XMarkIcon className="w-6 h-6 hover:text-teal-800" />
        </button>
      </div>
    </div>
  );
};

export default NewsModal;
