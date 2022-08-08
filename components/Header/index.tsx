import React from "react";
import Button from "../Button";

export default function Header() {
  return (
    <header className='flex justify-center bg-midnight-green py-10 pl-5 pr-3'>
      <div className='grow flex justify-between items-center max-w-5xl'>
        <div className='flex items-center'>
          <img src='assets/logo.svg' className='mr-5' alt='myteam-logo' />
          <Button className='hidden' label='home' isFlat />
          <Button className='hidden' label='about' isFlat />
        </div>
        <Button className='sm:hidden' icon='assets/icon-hamburger.svg' isFlat />
        <Button className='hidden sm:inline-block' label='contact us' />
      </div>
    </header>
  );
}
