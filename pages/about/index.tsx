import BaseScreen from "@/components/BaseScreen";
import Container from "@/components/Container";

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
    </BaseScreen>
  );
}
