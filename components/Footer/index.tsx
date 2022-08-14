import React from "react";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className='bg-dark-green py-10 ' role='footer'>
      <div className='max-w-5xl flex flex-col items-center justify-center gap-5'>
        <img src='assets/logo.svg' className='w-24' alt='myteam-logo' />
        <div className='flex'>
          <Button label='home' isFlat />
          <Button label='about' isFlat />
        </div>
        <p className='text-center text-white opacity-60 font-semibold'>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </p>
        <div className='flex'>
          <Button icon='assets/icon-facebook.svg' isFlat />
          <Button icon='assets/icon-pinterest.svg' isFlat />
          <Button icon='assets/icon-twitter.svg' isFlat />
        </div>
        <p className='text-center text-white opacity-60 font-semibold'>
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
