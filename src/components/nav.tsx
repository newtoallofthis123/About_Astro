import React from "react";
import "./styles/nav.scss";
import { motion } from "framer-motion";

export default function Nav() {
    const [nav, setNav] = React.useState(false);
    return (
        <>
            <nav>
                <div
                    className="bg-white dark:bg-gray-950 text-black dark:text-white"
                    id="nav"
                >
                    <div className="flex flex-row justify-center items-center p-5">
                        <img
                            width={192}
                            height={192}
                            className="lg:w-24 w-8"
                            src="/logo192.webp"
                            alt="NoobScience Logo"
                        />
                        <a
                            href="/"
                            className="
                    px-5
                    nav-title font-bold uppercase text-center text-4xl
                    no-underline
                    lg:text-9xl
                    "
                        >
                            NoobScience
                        </a>
                        <div
                            onClick={() => setNav(!nav)}
                            className="space-y-1 cursor-pointer z-50 lg:hidden"
                        >
                            <motion.span
                                animate={{
                                    rotateZ: nav ? 45 : 0,
                                    y: nav ? 8 : 0,
                                }}
                                className="block h-0.5 w-8 bg-black dark:bg-white"
                            ></motion.span>
                            <motion.span
                                animate={{
                                    opacity: nav ? 0 : 1,
                                }}
                                className="block h-0.5 w-8 bg-black dark:bg-white"
                            ></motion.span>
                            <motion.span
                                animate={{
                                    rotateZ: nav ? -45 : 0,
                                    y: nav ? -8 : 0,
                                }}
                                className="block h-0.5 w-8 bg-black dark:bg-white"
                            ></motion.span>
                        </div>
                        {nav && (
                            <motion.div
                                className="fixed flex bg-white dark:bg-black bottom-0 left-0 w-full h-screen items-center justify-center"
                                animate={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 25 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ul className="flex flex-col gap-4">
                                    {[
                                        'about',
                                        'blog',
                                        'projects',
                                        'skills',
                                        'resume',
                                        'quips',
                                        'contact',
                                        'github',
                                        'social',
                                        'notes',
                                    ].map((link) => (
                                        <li key={link} className="text-2xl">
                                            <a
                                                href={`/${link}`}
                                                className="special_underline"
                                            >
                                                {link.charAt(0).toUpperCase() +
                                                    link.slice(1)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                    <ul
                        className="
                        hidden gap-x-12
                        lg:flex flex-row border-y-4 p-5 justify-center border-black dark:border-white
                        "
                    >
                        {[
                            'about',
                            'blog',
                            'projects',
                            'skills',
                            'resume',
                            'quips',
                            'contact',
                            'github',
                            'social',
                            'notes',
                        ].map((link) => (
                            <li key={link} className="text-3xl">
                                <a
                                    href={`/${link}`}
                                    className="special_underline"
                                >
                                    {link.charAt(0).toUpperCase() +
                                        link.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}