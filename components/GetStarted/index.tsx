import React from "react";
import Button, { ButtonColor } from "../Button";

export default function GetStarted() {
  return (
    <section
      className='bg-light-coral py-20 bg-[url("/assets/bg-pattern-home-6-about-5.svg")] bg-no-repeat bg-left-bottom'
      role='get-started'
    >
      <div className='flex flex-col items-center max-w-5xl gap-5'>
        <h1 className='font-bold text-2xl text-dark-green text-center'>
          Ready to get started?
        </h1>
        <Button className='py-2' label='contact us' color={ButtonColor.dark} />
      </div>
    </section>
  );
}
