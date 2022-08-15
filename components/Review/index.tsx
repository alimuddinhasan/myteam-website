import React from "react";

interface IHomeProps {
  review: string;
  name: string;
  jobTitle: string;
  avatar: string;
}

export default function Review({ avatar, jobTitle, name, review }: IHomeProps) {
  return (
    <div className='flex flex-col items-center text-white pt-9 bg-[url("/assets/icon-quotes.svg")] bg-no-repeat bg-top gap-5'>
      <p className='text-center font-semibold text-xs leading-6'>"{review}"</p>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-sm text-rapture-blue'>{name}</h2>
        <p className='italic text-[13px]'>{jobTitle}</p>
        <div className='w-16 h-16 border-2 mt-4 rounded-full'>
          <img
            src={avatar}
            alt='profile-picture'
            className='rounded-full'
          />
        </div>
      </div>
    </div>
  );
}
