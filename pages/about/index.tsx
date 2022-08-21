import BaseScreen from "@/components/BaseScreen";
import Container from "@/components/Container";
import Director from "@/components/Director";

export default function Home() {
  return (
    <BaseScreen pageTitle='Frontend Mentor | myteam website challenge - Homepage'>
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
      <section role='directors' className='bg-deep-jungle-green'>
        <Container>
          <div className='flex flex-col gap-5 items-stretch px-5'>
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
        </Container>
      </section>
    </BaseScreen>
  );
}
