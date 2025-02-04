"use client";

import Link from "next/link";


const About = () => {
    return (
        <div className="px-6 sm:px-0 flex flex-col gap-4 py-20 h-96 justify-start">
            <h1 className="text-center text-white body-bold text-xl">Contact</h1>
            <p className="text-white body-light text-center text-sm">
                You can reach me out at <a href="mailto:dailyziel@gmail.com" className="border-b border-white">dailyziel@gmail.com</a> or visit my website at  <a href="https://www.dailyziel.com/" className="border-b border-white">dailyziel.com</a>.
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
