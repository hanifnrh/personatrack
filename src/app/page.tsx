"use client";
import { FaHeart, FaSpotify } from "react-icons/fa";

export default function Home() {
  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <div className="px-6 sm:px-0 grid grid-cols-1 gap-4 my-32 items-center justify-items-center">
      <h1 className="text-3xl body-bold text-white">Personatrack</h1>
      <p className="bg-white bg-opacity-10 text-white body text-center rounded-xl p-4">
        Describe your personality based on your top artists and genres you&apos;re listening to on Spotify. Also would describe what animal and celebrity align with your personality.
      </p>
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
