import React from 'react';
import { Link } from 'react-router-dom';

export default function Teste() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-slate-50">
      <h1 className="text-center text-4xl font-semibold text-violet-500">
        Electron + Typescript + React + Tailwind + Prettier + React Routes Boilerplate
      </h1>
      <h1 className="text-center text-xl font-semibold text-slate-600">
        Hello, this is the <b className="font-bold">test page</b> of <br /> the application!
      </h1>
      <Link className="rounded-md bg-blue-400 p-3 font-medium text-white" to={'/'}>
        Return to home
      </Link>
    </div>
  );
}
