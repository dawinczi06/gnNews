import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Footer: FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  const state = useSelector((state: RootState) => state.newsCount);
  const formatDate = () => {
    const date = format(new Date(Date.now()), "kk:mm:ss");
    setCurrentDate(date);
  };

  useEffect(() => {
    formatDate();
    const interval = setInterval(() => formatDate(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-12 flex justify-center items-center bg-gray-800 text-gray-50">
      <div>
        Current time: {currentDate} | Articles quantity: {state}
      </div>
    </div>
  );
};

export default Footer;
