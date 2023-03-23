import { FC } from "react";
import { format } from "date-fns";

type Props = {
  title: string;
  source: string;
  publishedAt: Date;
  onAction: () => void;
};
const NewsListItem: FC<Props> = (props) => {
  return (
    <li
      className="pt-3 cursor-pointer hover:text-teal-600"
      onClick={props.onAction}
    >
      <h2 className="font-bold">{props.title}</h2>
      <p className="text-sm italic">
        <span>{format(new Date(props.publishedAt), "dd.MM.yyyy")}</span>
        <span> | {props.source}</span>
      </p>
    </li>
  );
};

export default NewsListItem;
