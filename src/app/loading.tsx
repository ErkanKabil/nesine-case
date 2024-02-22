import React from "react";

const Bullet = ({ className }: { className: string }) => {
  return (
    <span
      className={`inline-block h-4 w-4 animate-bounce rounded-full bg-blue-800 duration-500 ${className}`}
    ></span>
  );
};
export default async function Loading() {
  return (
    <div className="flex gap-1.5 w-[100vw] h-[100vh] items-center justify-center">
      <Bullet className="delay-0" />
      <Bullet className="delay-100" />
      <Bullet className="delay-200" />
    </div>
  );
}
