import React from "react";

export default function Card({ children }) {
  return (
    <div className="container mx-auto m-4 text-white bg-black p-4 rounded-xl text-center text-2xl font-sans flex justify-evenly">
      {children}
    </div>
  );
}
