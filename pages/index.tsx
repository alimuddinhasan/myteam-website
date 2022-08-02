import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { addBy, reduceBy } from "store/counter/counterSlice";

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Next.js Base App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex-1 flex flex-col justify-center items-center gap-3'>
        <h1 className='font-bold text-5xl'>Welcome to Next.js</h1>
        <h1 className='font-bold text-4xl'>Counter Base App!</h1>
        <h2 className='font-bold text-4xl text-blue-500'>{counter}</h2>
        <div className='flex flex-col justify-center gap-2 '>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => dispatch(addBy(10))}
          >
            Add by 10
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => dispatch(reduceBy(5))}
          >
            Reduce by 5
          </button>
        </div>
      </main>

      <footer className='h-24 w-full flex justify-center items-center'>
        <a href='https://alimuddinhasan.com' target='_blank'>
          Created by <span>Alimuddin Hasan</span>
        </a>
      </footer>
    </div>
  );
}
