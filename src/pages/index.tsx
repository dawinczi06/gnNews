import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-full max-w-screen-2xl mx-auto py-10 h-full">
      <Sidebar />
      <div className="w-full">
        <h1 className="text-gray-500">TEST</h1>
      </div>
    </div>
  );
}
