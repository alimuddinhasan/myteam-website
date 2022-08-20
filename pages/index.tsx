import BaseScreen from "@/components/BaseScreen";
import FeaturedItem from "@/components/FeaturedItem";
import Review from "@/components/Review";
import { Container, Header } from "../components";

export default function Home() {
  return (
    <BaseScreen pageTitle='Frontend Mentor | myteam website challenge - Homepage'>
      <Header />
      <section className='bg-sacramento-state-green overflow-hidden '>
        <img
          src='/assets/bg-pattern-home-3.svg'
          alt='bg-featured'
          className='float-right h-[244px] w-[200px] translate-x-1/2'
        />
        <Container>
          <div className='px-5 py-10'>
            <div className='flex flex-col justify-center max-w-5xl gap-8'>
              <hr
                className='w-12 border-2 border-light-coral'
                data-testid='h-line'
              />
              <h1 className='text-2xl font-bold text-white'>
                Build &amp; manage distributed teams like no one else.
              </h1>
            </div>
            <div className='flex flex-col gap-8 mt-16'>
              <FeaturedItem
                title='Experienced Individuals'
                description='Our network is made up of highly experienced professionals who are passionate about what they do.'
                icon='assets/icon-person.svg'
              />
              <FeaturedItem
                title='Experienced Individuals'
                description='Our network is made up of highly experienced professionals who are passionate about what they do.'
                icon='assets/icon-person.svg'
              />
              <FeaturedItem
                title='Experienced Individuals'
                description='Our network is made up of highly experienced professionals who are passionate about what they do.'
                icon='assets/icon-person.svg'
              />
              <FeaturedItem
                title='Experienced Individuals'
                description='Our network is made up of highly experienced professionals who are passionate about what they do.'
                icon='assets/icon-person.svg'
              />
            </div>
          </div>
        </Container>
      </section>
      <section className='bg-deep-jungle-green py-36 px-5 bg-[url("/assets/bg-pattern-home-4-about-3.svg"),_url("/assets/bg-pattern-home-5.svg")] bg-no-repeat bg-[position:left_top,_right_bottom] flex justify-center'>
        <Container>
          <div className='flex flex-col items-center gap-8'>
            <h1 className='font-bold text-2xl lg:text-5xl text-center text-white'>
              Delivering real results for top companies. Some of our{" "}
              <span className='text-rapture-blue'>success stories.</span>
            </h1>
            <div className='flex flex-col lg:flex-row items-center gap-8'>
              <Review
                review='We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!'
                name='Aiysha Reese'
                jobTitle='Founder of Manage'
                avatar='assets/avatar-kady.jpg'
              />

              <Review
                review='We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!'
                name='Aiysha Reese'
                jobTitle='Founder of Manage'
                avatar='assets/avatar-kady.jpg'
              />
              <Review
                review='We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!'
                name='Aiysha Reese'
                jobTitle='Founder of Manage'
                avatar='assets/avatar-kady.jpg'
              />
            </div>
          </div>
        </Container>
      </section>
    </BaseScreen>
  );
}
