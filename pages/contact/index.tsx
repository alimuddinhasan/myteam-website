import BaseScreen from "@/components/BaseScreen";
import ContactItem from "@/components/ContactItem";
import Container from "@/components/Container";
import Input, { InputType } from "@/components/Input";
import Button, { ButtonColor } from "@/components/Button";

export default function Contact() {
  return (
    <BaseScreen
      pageTitle="Frontend Mentor | myteam website challenge - Contact"
      showGetStarted={false}
    >
      <section
        role="contact"
        className="bg-midnight-green flex justify-center relative overflow-hidden"
      >
        <img
          src="/assets/bg-pattern-contact-2.svg"
          alt="bg-top-left"
          className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2"
        />
        <Container className="py-24">
          <div className="flex flex-col items-center gap-5 px-5 mb-10">
            <h1 className="text-4xl font-bold text-white">Contact</h1>
            <h2 className="text-3xl font-bold text-light-coral">
              Ask us about
            </h2>
            <div className="flex flex-col gap-5">
              <ContactItem
                icon="/assets/icon-person.svg"
                label="The quality of our talent network"
              />
              <ContactItem
                icon="/assets/icon-cog.svg"
                label="Usage & implementation of our software"
              />
              <ContactItem
                icon="/assets/icon-chart.svg"
                label="How we help drive innovation"
              />
            </div>
          </div>
          <form action="" className="px-5">
            <div className="flex flex-col gap-5 mb-5">
              <Input label="Name" />
              <Input label="Email Address" />
              <Input label="Company Name" />
              <Input label="Title" />
              <Input type={InputType.TextArea} label="Message" />
            </div>
            <Button
              label="submit"
              color={ButtonColor.secondary}
              className="grow-0"
            />
          </form>
        </Container>
      </section>
    </BaseScreen>
  );
}
