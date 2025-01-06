import {ReactNode} from "react";
import {GoBackButton} from "@/components/GoBackButton";

const ReviewUpdateLayout = ({children}: { children: ReactNode }) => {

  return (
      <div
          className="min-h-screen h-screen max-h-screen flex flex-col w-full lg:w-1/3 items-center drop-shadow-2xl bg-gray-50 p-4">
        <GoBackButton/>
        {children}
      </div>
  );
};

export default ReviewUpdateLayout;