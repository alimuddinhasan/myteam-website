import React from "react";
import Button from "../Button";

export default function Header() {
  return (
    <header className='flex flex-col justify-center bg-midnight-green pt-10 px-5' role="header">
      <div className='grow flex justify-between items-center max-w-5xl'>
        <div className='flex items-center'>
          <img src='assets/logo.svg' className='mr-5' alt='myteam-logo' />
          <Button className='hidden' label='home' isFlat />
          <Button className='hidden' label='about' isFlat />
        </div>
        <Button className='sm:hidden' icon='assets/icon-hamburger.svg' isFlat />
        <Button className='hidden sm:inline-block' label='contact us' />
      </div>
      <div className='flex flex-col justify-center py-20 max-w-5xl'>
        <h1
          className='text-white text-6xl font-bold text-center mb-5'
          data-testid='title'
        >
          Find the best <span className='text-light-coral'>talent</span>
        </h1>
        <p
          className='font-semibold text-base text-center text-white'
          data-testid='description'
        >
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <img src='/assets/bg-pattern-home-2.svg' alt='bg-pattern-home-2' />
    </header>
  );
}
