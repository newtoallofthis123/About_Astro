import React from 'react';
import './styles/nav.scss';
import { motion } from 'framer-motion';

export default function ExplainNav() {
    const [nav, setNav] = React.useState(false);
    return (
        <>
            <nav>
                <div
                    style={{
                        backgroundColor: '#f0f0f0',
                    }}
                    className="
                md:fixed  top-0 z-50 w-full
                shadow-md
                "
                    id="nav"
                >
                    <div className="flex flex-row justify-between items-center p-4">
                        <div className="flex-shrink-0 flex flex-row justify-around">
                            <img
                                width={192}
                                height={192}
                                className="w-6 h-6 md:w-8 md:h-8"
                                src="/assets/explains.png"
                                alt="NoobScience Logo"
                            />
                            <a
                                href="/explains"
                                className="px-5 font-bold text-center text-xl md:text-2xl no-underline"
                            >
                                Noob Explains
                            </a>
                        </div>
                        <ul
                            className="
                            items-end
                        hidden gap-x-6
                        list-none
                        lg:flex flex-row p-1 justify-center
                        "
                        >
                            {[
                                'popular',
                                'archive',
                                'best of',
                                'series',
                                'tutorials',
                                'contact',
                            ].map((link: any) => (
                                <li key={link} className="text-lg">
                                    <a
                                        href={`/explains/${link}`}
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
                                        'popular',
                                        'archive',
                                        'best of',
                                        'series',
                                        'tutorials',
                                        'contact',
                                    ].map((link) => (
                                        <li key={link} className="text-2xl">
                                            <a
                                                href={`/explains/${link}`}
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
