'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/prediction/${inputValue}`)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <form
        className="flex flex-col gap-2 w-full max-w-sm
       bg-white p-8 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-xl">
          Name :
        </label>
        <input
          name="name"
          type="text"
          className="border border-black rounded p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="Submit" className="bg-blue-200 rounded p-2">
          Predict Data
        </button>
      </form>
    </div>
  );
}
