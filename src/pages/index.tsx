import Sidebar from "../components/Sidebar";
import { ArrowLeftIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import useIseMobile from "../hooks/isMobile";

export default function Home() {
  const isMobile = useIseMobile(768);

  return (
    <div className="flex flex-col md:flex-row flex-1 max-w-screen-2xl mx-auto h-full w-full py-10">
      <Sidebar />
      <div className="w-full text-center">
        {isMobile && (
          <div className="flex justify-center mt-10">
            <ArrowUpIcon className="animate-bounce w-10 h-10" />
          </div>
        )}
        <h1 className="mt-10 text-4xl font-bold">Welcome to gnNews!</h1>
        <p className="mt-10">
          Select country from list {isMobile ? "above" : "on the left"} to fetch
          most recent news from that country!
        </p>
        {!isMobile && (
          <div className="flex justify-center mt-10">
            <ArrowLeftIcon className="animate-bounce-animation w-10 h-10" />
          </div>
        )}
      </div>
    </div>
  );
}
