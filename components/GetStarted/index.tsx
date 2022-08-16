import React from "react";
import Button, { ButtonColor } from "../Button";
import Container from "../Container";

export default function GetStarted() {
  return (
    <section
      className='bg-light-coral bg-[url("/assets/bg-pattern-home-6-about-5.svg")] bg-no-repeat bg-left-bottom flex justify-center'
      role='get-started'
    >
      <Container className="py-20">
        <div className='flex flex-col sm:flex-row sm:justify-around items-center gap-5'>
          <h1 className='font-bold text-2xl lg:text-5xl text-dark-green text-center'>
            Ready to get started?
          </h1>
          <Button
            className='py-2'
            label='contact us'
            color={ButtonColor.dark}
          />
        </div>
      </Container>
    </section>
  );
}
