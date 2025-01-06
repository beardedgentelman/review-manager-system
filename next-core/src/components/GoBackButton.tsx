"use client";

import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";

export const GoBackButton = () => {
  const router = useRouter()

  return (
      <div className='flex justify-start w-full'>
        <button className="flex items-center font-semibold hover:opacity-80"
                onClick={() => router.back()}>
          <ArrowLeft size={20}/>
          <span className="ml-1">Back</span>
        </button>
      </div>
  );
};