"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { FaHeart, FaSpotify } from "react-icons/fa";
export default function Home() {
  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <div className="px-6 sm:px-0 grid grid-cols-1 gap-4 my-20 items-center justify-items-center">
      <h1 className="text-3xl body-bold text-white text-center">Sonatra - Describe Your Music Persona</h1>
      <div className="justify-center items-center bg-white bg-opacity-10 text-white body text-center rounded-xl p-4 flex flex-col gap-4">
        <p>
          Log in with Spotify to know your music persona!
        </p>
        <div className="text-sm body border-b border-green-500 text-green-500 inline-flex gap-2 w-fit">
          Get Spotify here <MoveRight />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="body-light text-white text-sm">
            This app is made with
          </h1>
          <div className="flex justify-center items-center gap-2 body-bold text-white text-md">
            <Image
              src="/spotify-logo.svg"
              width={500}
              height={500}
              alt="Spotify Logo"
              className="h-6 w-auto"
            />
            API
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-all body inline-flex items-center justify-center gap-2"
        >
          <span className="text-xl">
            <FaSpotify />
          </span>
          Login with Spotify
        </button>
        <button
          className="bg-red-500 text-white px-4 py-3 rounded-full hover:bg-red-600 transition-all body inline-flex items-center justify-center"
        >
          <a href="https://teer.id/dailyziel" className="inline-flex items-center justify-center  gap-2">
            <span className="text-xl">
              <FaHeart />
            </span>
            Support me on Trakteer
          </a>
        </button>
      </div>

      <div className="text-white body-light">
        Made by <a href="https://www.dailyziel.com/" className="hover:border-b border-white">Ziel</a>
      </div>
    </div>
  );
}
