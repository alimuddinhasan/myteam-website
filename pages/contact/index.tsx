import BaseScreen from "@/components/BaseScreen";
import ContactItem from "@/components/ContactItem";
import Container from "@/components/Container";

export default function Contact() {
  return (
    <BaseScreen
      pageTitle='Frontend Mentor | myteam website challenge - Contact'
      showGetStarted={false}
    >
      <section role='contact' className='bg-midnight-green flex justify-center'>
        <Container>
          <div className='flex flex-col items-center gap-5 px-5 py-24'>
            <h1 className='text-4xl font-bold text-white'>Contact</h1>
            <h2 className='text-3xl font-bold text-light-coral'>
              Ask us about
            </h2>
            <div className='flex flex-col gap-5'>
              <ContactItem
                icon='/assets/icon-person.svg'
                label='The quality of our talent network'
              />
              <ContactItem
                icon='/assets/icon-cog.svg'
                label='Usage & implementation of our software'
              />
              <ContactItem
                icon='/assets/icon-chart.svg'
                label='How we help drive innovation'
              />
            </div>
          </div>
        </Container>
      </section>
    </BaseScreen>
  );
}
