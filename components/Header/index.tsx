import React from "react";
import Button from "../Button";

export default function Header() {
  return (
    <header className='flex justify-center bg-midnight-green py-10'>
      <div className='grow flex justify-between items-center max-w-5xl'>
        <div className='flex items-center'>
          <img src='assets/logo.svg' className='mr-5' alt='myteam-logo' />
          <Button label='home' isFlat />
          <Button label='about' isFlat />
        </div>
        <Button label='contact us' />
      </div>
    </header>
  );
}
