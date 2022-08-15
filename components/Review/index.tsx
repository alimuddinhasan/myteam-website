import React from "react";

interface IHomeProps {
  review: string;
  name: string;
  jobTitle: string;
}

export default function Review({ jobTitle, name, review }: IHomeProps) {
  return (
    <div className='flex flex-col items-center text-white py-14'>
      <p className='text-center font-semibold text-xs'>"{review}"</p>
      <h2 className="font-bold text-sm text-rapture-blue">{name}</h2>
      <p className="italic text-[13px]">{jobTitle}</p>
    </div>
  );
}
