import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import numberTriviaUsecase from "domain/usecase/numberTrivia.usecase";
import { addBy, reduceBy } from "store/counter/counterSlice";
import { useForm } from "react-hook-form";
import { updateTrivia } from "store/trivia/triviaSlice";

const schema = Joi.object({
  number: Joi.number().required(),
});

interface IFormData {
  number: number;
}

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const trivia = useSelector((state: RootState) => state.trivia);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IFormData>({
    resolver: joiResolver(schema),
  });

  const submitHandler = handleSubmit(async (data) => {
    const trivia = await numberTriviaUsecase.getNumberTrivia(data.number);
    dispatch(updateTrivia(trivia));
  });
  
  return (
    <div className='h-screen flex flex-col'>
      <Head>
        <title>Next.js Base App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex-1 flex flex-col justify-center items-center gap-3'>
        {/* <h1 className='font-bold text-5xl'>Welcome to Next.js</h1>
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
        </div> */}
        <h1 className='font-bold text-4xl'>Number Trivia App!</h1>
        <form onSubmit={submitHandler} className='flex gap-3 items-start'>
          <div>
            <input
              {...register("number")}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Number'
            />
            {errors.number && (
              <p className='text-red-600'>{errors.number.message}</p>
            )}
          </div>

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Submit
          </button>
        </form>
        <article className='mt-5'>
          <p>{trivia.trivia}</p>
        </article>
      </main>

      <footer className='h-24 w-full flex justify-center items-center'>
        <a href='https://alimuddinhasan.com' target='_blank'>
          Created by <span>Alimuddin Hasan</span>
        </a>
      </footer>
    </div>
  );
}
