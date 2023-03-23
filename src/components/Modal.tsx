import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import usePortal from "../hooks/usePortal";

type Props = {
  children?: ReactNode;
};

const Modal: FC<Props> = (props) => {
  const portal = usePortal();
  return portal
    ? createPortal(
        <div className="bg-gray-500 fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-opacity-40 px-3">
          {props.children}
        </div>,
        portal
      )
    : null;
};

export default Modal;
