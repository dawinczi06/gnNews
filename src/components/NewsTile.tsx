import { FC } from "react";
import { format } from "date-fns";

type Props = {
  onAction: () => void;
  title: string;
  source: string;
  publishedAt: Date;
  img: string | null;
};
const NewsTile: FC<Props> = (props) => {
  return (
    <li
      onClick={props.onAction}
      className="flex flex-col shadow-md hover:scale-105 transition cursor-pointer overflow-hidden rounded"
    >
      <img
        src={props.img ?? "/placeholder-image.jpg"}
        alt="news-image"
        className="h-40 object-cover"
      />
      <div className="p-3 flex flex-col justify-between h-full">
        <h2 className="text-sm font-bold">{props.title}</h2>
        <div className="mt-auto italic">
          <p className="text-xs mt-3">Source: {props.source}</p>
          <p className="text-xs">
            Date: {format(new Date(props.publishedAt), "dd.MM.yyyy kk:mm:ss")}
          </p>
        </div>
      </div>
    </li>
  );
};

export default NewsTile;
