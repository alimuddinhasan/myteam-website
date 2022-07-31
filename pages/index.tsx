import Head from "next/head";

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Next.js Base App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex-1 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl'>Welcome to Next.js Base App!</h1>
      </main>

      <footer className='h-24 w-full flex justify-center items-center'>
        <a href='https://alimuddinhasan.com' target='_blank'>
          Created by <span>Alimuddin Hasan</span>
        </a>
      </footer>
    </div>
  );
}
