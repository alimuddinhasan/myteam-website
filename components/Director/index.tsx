import React from "react";
import Button from "../Button";

interface IDirectorProps {
  avatar: string;
  name: string;
  positon: string;
  quote: string;
  socials: {
    twitter: string;
    linkedin: string;
  };
}

export default function Director({
  avatar,
  name,
  positon,
  quote,
  socials,
}: IDirectorProps) {
  return (
    <div className='bg-sacramento-state-green relative mb-10'>
      <div className='flex flex-col items-center py-5 gap-5 '>
        <img
          className='w-24 rounded-full border-2'
          src={avatar}
          alt='director-avatar'
        />
        <div className='mb-10'>
          <h2 className='text-rapture-blue text-sm font-bold text-center'>
            {name}
          </h2>
          <p className='italic font-medium text-white text-center'>{positon}</p>
        </div>
        <Button
          className='bg-light-coral w-14 h-14 flex justify-center items-center rounded-full absolute bottom-0 translate-y-1/2'
          isFlat
          icon='/assets/icon-cross.svg'
          dataTestid='button-plus'
        />
      </div>
    </div>
  );
}
