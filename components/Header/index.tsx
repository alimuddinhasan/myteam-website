import React from "react";
import Button from "../Button";
import Container from "../Container";

export default function Header() {
  return (
    <header
      className='flex justify-center bg-midnight-green pt-10 px-5 relative'
      role='header'
    >
      <img
        className='hidden lg:block max-w-sm absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
        src='/assets/bg-pattern-about-2-contact-1.svg'
        alt='bg-pattern-about-2-contact-1'
      />
      <Container className="z-10">
        <div className='flex flex-col items-center'>
          <div className='flex flex-col lg:flex-row items-center lg:items-stretch py-20 max-w-md lg:max-w-none gap-5'>
            <h1
              className='text-white text-6xl sm:text-7xl font-bold text-center lg:text-left lg:basis-1/2'
              data-testid='title'
            >
              Find the <br />
              best <span className='text-light-coral'>talent</span>
            </h1>
            <div className='flex flex-col justify-between lg:basis-1/2'>
              <hr
                className='hidden lg:block w-12 border-2 border-light-coral'
                data-testid='header-h-line'
              />
              <p
                className='font-semibold text-base lg:text-sm text-center lg:text-left text-white'
                data-testid='description'
              >
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end self-stretch'>
            <img
              className='max-w-sm'
              src='/assets/bg-pattern-home-2.svg'
              alt='bg-pattern-home-2'
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
