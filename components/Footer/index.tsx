import React from "react";
import Button from "../Button";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className='bg-dark-green py-10 px-5 flex justify-center' role='footer'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center sm:items-stretch justify-center lg:justify-between gap-5'>
          <div className='flex flex-col sm:flex-row gap-5 sm:justify-between'>
            <div className='flex flex-col items-center sm:items-start gap-5 sm:justify-between'>
              <img src='assets/logo.svg' className='w-24' alt='myteam-logo' />
              <div className='flex gap-5'>
                <Button className='p-0' label='home' isFlat />
                <Button className='p-0' label='about' isFlat />
              </div>
            </div>
            <p className='text-center sm:text-right lg:text-left text-white opacity-60 font-semibold'>
              987 Hillcrest Lane
              <br />
              Irvine, CA
              <br />
              California 92714
              <br />
              Call Us : 949-833-7432
            </p>
          </div>
          <div className='flex flex-col sm:flex-row lg:flex-col gap-5 sm:justify-between items-center lg:items-end'>
            <div className='flex gap-5'>
              <Button icon='assets/icon-facebook.svg' isFlat />
              <Button icon='assets/icon-pinterest.svg' isFlat />
              <Button icon='assets/icon-twitter.svg' isFlat />
            </div>
            <p className='text-center sm:text-right text-white opacity-60 font-semibold'>
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
