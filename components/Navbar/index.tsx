import React from "react";
import Button from "../Button";
import Container from "../Container";

export default function Navbar() {
  return (
    <nav
      className='flex justify-center bg-midnight-green pt-10 px-5 relative'
      role='navbar'
    >
      <Container>
        <div className='flex flex-col items-center'>
          <div className='flex justify-between items-center self-stretch'>
            <div className='flex items-center gap-5'>
              <img src='assets/logo.svg' className='mr-5' alt='myteam-logo' />
              <Button className='hidden sm:inline-block' label='home' isFlat />
              <Button className='hidden sm:inline-block' label='about' isFlat />
            </div>
            <Button
              className='sm:hidden'
              icon='assets/icon-hamburger.svg'
              isFlat
            />
            <Button className='hidden sm:inline-block' label='contact us' />
          </div>
        </div>
      </Container>
    </nav>
  );
}
