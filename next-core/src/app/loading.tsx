import {LoaderCircle} from "lucide-react";

const Loading = () => (
    <div className="absolute flex justify-center items-center h-screen w-screen gap-1">
      <div className="animate-spin" role="status">
        <LoaderCircle size={28} strokeWidth={3}/>
      </div>
      <span className="visually-hidden">Loading...</span>
    </div>
);

export default Loading;