"use client";
import Link from "next/link";
import { RiBrainFill } from "react-icons/ri";

export default function Footer() {
    return (
        <div id="contact" className="px-6 py-10 sm:px-0 flex flex-col items-center justify-center">
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-y-10 justify-between items-start">
                <div className=" text-white body-light grid grid-cols-1 justify-items-start gap-y-4 gap-x-10">
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="/"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            Home
                        </span>
                    </Link>
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="/about"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            About
                        </span>
                    </Link>
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="/privacy"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            Privacy Policy
                        </span>
                    </Link>
                    <Link
                        className="flex justify-center items-center text-center group"
                        href="/contact"
                    >
                        <span className="border-b border-black dark:border-white inline-flex">
                            Contact
                        </span>
                    </Link>


                </div>
                <div className={`h-full backdrop:body-light text-end sm:text-end flex flex-col justify-between items-end text-white`}>
                    © 2024 Ziel - All Rights Reserved
                    <Link href="/" className="flex items-center gap-2 text-white" prefetch={false}>
                        <RiBrainFill size={30} />
                        <span className="text-xl body-bold">Personalify</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
