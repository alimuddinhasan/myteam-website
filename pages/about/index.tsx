import BaseScreen from "@/components/BaseScreen";
import Container from "@/components/Container";
import Director from "@/components/Director";

export default function About() {
  return (
    <BaseScreen pageTitle='Frontend Mentor | myteam website challenge - About'>
      <article
        className='flex justify-center bg-midnight-green px-5'
        role='header'
      >
        <Container>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col lg:flex-row items-center lg:items-stretch py-20 max-w-md lg:max-w-none gap-5'>
              <h1
                className='text-white text-6xl font-bold text-center'
                data-testid='title'
              >
                About
              </h1>
              <p
                className='font-semibold text-base lg:text-sm text-center lg:text-left text-white'
                data-testid='description'
              >
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </div>
        </Container>
      </article>
      <section role='directors' className='bg-deep-jungle-green relative overflow-hidden'>
        <img
          src='/assets/bg-pattern-about-2-contact-1.svg'
          alt='bg-top-left'
          className='absolute left-0 -translate-x-1/2 -translate-y-1/2 md:translate-y-0'
        />
        <img
          src='/assets/bg-pattern-home-4-about-3.svg'
          alt='bg-bottom-right'
          className='absolute right-0 bottom-0'
        />
        <Container>
          <div className='flex flex-col items-center gap-10 px-5 py-24'>
            <h1 className='text-2xl font-bold text-white'>
              Meet the directors
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl w-full'>
              <Director
                avatar='/assets/avatar-nikita.jpg'
                name='Nikita Marks'
                positon='Founder & CEO'
                quote='Deserunt magna incididunt voluptate fugiat deserunt amet laboris nostrud consectetur eu proident.'
                socials={{
                  linkedin: "https://www.linkedin.com",
                  twitter: "https://www.twitter.com",
                }}
              />
              <Director
                avatar='/assets/avatar-nikita.jpg'
                name='Nikita Marks'
                positon='Founder & CEO'
                quote='Deserunt magna incididunt voluptate fugiat deserunt amet laboris nostrud consectetur eu proident.'
                socials={{
                  linkedin: "https://www.linkedin.com",
                  twitter: "https://www.twitter.com",
                }}
              />
              <Director
                avatar='/assets/avatar-nikita.jpg'
                name='Nikita Marks'
                positon='Founder & CEO'
                quote='Deserunt magna incididunt voluptate fugiat deserunt amet laboris nostrud consectetur eu proident.'
                socials={{
                  linkedin: "https://www.linkedin.com",
                  twitter: "https://www.twitter.com",
                }}
              />
              <Director
                avatar='/assets/avatar-nikita.jpg'
                name='Nikita Marks'
                positon='Founder & CEO'
                quote='Deserunt magna incididunt voluptate fugiat deserunt amet laboris nostrud consectetur eu proident.'
                socials={{
                  linkedin: "https://www.linkedin.com",
                  twitter: "https://www.twitter.com",
                }}
              />
              <Director
                avatar='/assets/avatar-nikita.jpg'
                name='Nikita Marks'
                positon='Founder & CEO'
                quote='Deserunt magna incididunt voluptate fugiat deserunt amet laboris nostrud consectetur eu proident.'
                socials={{
                  linkedin: "https://www.linkedin.com",
                  twitter: "https://www.twitter.com",
                }}
              />
              <Director
                avatar='/assets/avatar-nikita.jpg'
                name='Nikita Marks'
                positon='Founder & CEO'
                quote='Deserunt magna incididunt voluptate fugiat deserunt amet laboris nostrud consectetur eu proident.'
                socials={{
                  linkedin: "https://www.linkedin.com",
                  twitter: "https://www.twitter.com",
                }}
              />
            </div>
          </div>
        </Container>
      </section>
    </BaseScreen>
  );
}
