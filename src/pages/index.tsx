import Sidebar from "../components/Sidebar";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex w-full max-w-screen-2xl mx-auto py-10 h-full">
      <Sidebar />
      <div className="w-full text-center">
        <h1 className="mt-10 text-4xl font-bold">Welcome to gnNews!</h1>
        <p className="mt-10">
          Select country from list on the left to fetch most recent news from
          that country!
        </p>
        <div className="flex justify-center mt-10">
          <ArrowLeftIcon className="animate-bounce-animation w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
