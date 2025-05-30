import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Alex Brahar</h1>
          <p className="text-lg">UI Designer</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p>Email: <a href="mailto:uname@gmail.com" className="underline">uname@gmail.com</a></p>
          <p>Web: <a href="https://www.websitename.com" className="underline">websitename.com</a></p>
        </div>
      </div>
    </header>
  );
}