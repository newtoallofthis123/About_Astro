import React from "react";
import "./styles/nav.scss";
import { motion } from "framer-motion";

export default function NormalNav() {
    const [nav, setNav] = React.useState(false);
    return (
        <>
            <nav>
                <div id="nav">
                    <div className="flex flex-row border-y-4 border-black justify-between items-center p-5">
                        <div className="flex-shrink-0 flex flex-row justify-around"> 
                            <img
                                width={192}
                                height={192}
                                className="w-10 h-10"
                                src="/logo192.webp"
                                alt="NoobScience Logo"
                            />
                            <a
                                href="/"
                                className=" px-5 nav-title font-bold uppercase text-center text-4xl no-underline"
                            >
                                NoobScience
                            </a>
                        </div>
                        <ul
                            className="
                            items-end
                        hidden gap-x-6
                        list-none
                        lg:flex flex-row p-5 justify-center border-black
                        "
                        >
                            {[
                                'about',
                                'blog',
                                'projects',
                                'skills',
                                'resume',
                                'updates',
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
                        <div
                            onClick={() => setNav(!nav)}
                            className="space-y-1 cursor-pointer z-50 lg:hidden"
                        >
                            <motion.span
                                animate={{
                                    rotateZ: nav ? 45 : 0,
                                    y: nav ? 8 : 0,
                                }}
                                className="block h-0.5 w-8 bg-black"
                            ></motion.span>
                            <motion.span
                                animate={{
                                    opacity: nav ? 0 : 1,
                                }}
                                className="block h-0.5 w-8 bg-black"
                            ></motion.span>
                            <motion.span
                                animate={{
                                    rotateZ: nav ? -45 : 0,
                                    y: nav ? -8 : 0,
                                }}
                                className="block h-0.5 w-8 bg-black"
                            ></motion.span>
                        </div>
                        {nav && (
                            <motion.div
                                className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center"
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
                                        'updates',
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
                </div>
            </nav>
        </>
    );
}