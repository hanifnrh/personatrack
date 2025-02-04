"use client";

import Link from "next/link";


const About = () => {
    return (
        <div className="px-6 sm:px-0 grid grid-cols-1 gap-4 py-16">
            <h1 className="text-center text-white body-bold text-xl">About App</h1>
            <p className="text-white body-light text-justify text-sm">
                Sonatra is a tool to describe your music persona and gives you an animal and celebrity that aligns with your personality. As you know, there are so many Spotify based web app that gives you your top artists for particular time and describe your personality. Inspired by Receiptify, I had an idea to create an app to describe your personality based on your musical preferences. For now, this app is limited because I use API from the ChatGPT to generate the description of your personality. Support me on Trakteer so I can purchase better API plan and extend my monthly limit. Is it accurate? No it is just a fun tool and not based on any scientific data. Share more with your friends to know what animal and celebrity they are!
            </p>
            <div className="flex flex-col justify-center items-center">
                <Link href={"https://open.spotify.com/"} className="body text-white text-center text-md bg-green-500 rounded-full w-fit px-4 py-3" target="_blank">
                    Get Spotify Free!
                </Link>
            </div>

            <h2 className="text-center text-white body-bold text-xl mt-10">About Developer</h2>
            <p className="text-white body-light text-center text-sm">
                Hi I&apos;m Ziel and I love to make fun websites as well as designing them. Visit me at <a href="https://www.dailyziel.com/" className="border-b border-white">dailyziel.com</a> for more information about me!
            </p>
            <div className="flex flex-col justify-center items-center">
                <Link href={"https://dailyziel.com/"} className="body text-white text-center text-md bg-purple-700 rounded-full w-fit px-4 py-3" target="_blank">
                    Visit Developer
                </Link>
            </div>
        </div>
    );
};

export default About;
