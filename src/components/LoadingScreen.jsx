import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-primary text-white">
      <div className="text-5xl animate-spin">
        <AiOutlineLoading3Quarters />
      </div>
    </div>
  );
}
