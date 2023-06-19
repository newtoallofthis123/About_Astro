import React from 'react';
import Init from './theme';

export default function Footer() {
    const [footer, setFooter] = React.useState(false)
    const [show, setShow] = React.useState(true)
    const [theme, setTheme] = React.useState<any>('light')
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 1028) {
                setFooter(true)
                setShow(false)
            }
            if (localStorage.getItem('theme') == null) {
                localStorage.setItem('theme', 'light')
            }
            setTheme(localStorage.getItem('theme'))
            //@ts-ignore
            document.documentElement.classList.add(localStorage.getItem('theme'))
        }
    }, [])
    const toggleTheme = () => {
        if (typeof window !== 'undefined') {
            if (theme == 'light') {
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
            } else {
                localStorage.setItem('theme', 'light');
                setTheme('light');
                document.documentElement.classList.remove('dark');
            }
        }
    }
    return (
        <>
            <footer className="border-t-2 p-5 bg-white dark:bg-slate-950 text-black dark:text-white border-black dark:border-white">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-2/6">
                        <div className="flex flex-row ml-8 items-center">
                            <img
                                width={32}
                                height={32}
                                src="/logo192.webp"
                                alt="Noob Logo"
                            />
                            <h1
                                style={{
                                    fontFamily: 'Roboto, sans-serif',
                                }}
                                className="text-3xl text-center font-bold pl-2"
                            >
                                NoobScience {new Date().getFullYear()}
                            </h1>
                        </div>
                        <ul className="py-4 ml-8 text-lg leading-8">
                            <li>All Rights Reserved</li>
                            <li>
                                Toggle Theme to {' '}
                                <button
                                    onClick={() => {
                                        toggleTheme();
                                    }}
                                >
                                    {theme == 'light' ? (
                                        <i className="bi bi-moon-fill text-xl"></i>
                                    ) : (
                                        <i className="bi bi-sun-fill text-xl"></i>
                                    )}
                                </button>
                            </li>
                            {/* <li>
                                Code licensed under{' '}
                                <a href="https://license.noobscience.rocks">
                                    MIT
                                </a>
                            </li> */}
                            <li>Made with pride in 🪷 India</li>
                            <li>
                                With{' '}
                                <i className="bi bi-heart-fill text-lg text-red-500"></i>{' '}
                                by Ishan Joshi
                            </li>
                        </ul>
                    </div>
                    {show && (
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    setFooter(!footer);
                                }}
                                className="text-center underline text-lg p-2"
                            >
                                See Links
                            </button>
                        </div>
                    )}
                    {footer && (
                        <>
                            <div className="w-full flex md:justify-center items-center flex-row md:w-2/6">
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex flex-col mr-10 md:mr-20 pr-5">
                                        <h1 className="text-xl pb-4">Links</h1>
                                        <a
                                            href="/about"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            About
                                        </a>
                                        <a
                                            href="/projects"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Projects
                                        </a>
                                        <a
                                            href="/blog"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Blog
                                        </a>
                                        <a
                                            href="/skills"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Skills
                                        </a>
                                        <a
                                            href="/resume"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Resume
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="flex flex-col mr-10 md:mr-20 pr-5">
                                        <h1 className="text-xl pb-4">
                                            Dynamic
                                        </h1>
                                        <a
                                            href="/updates"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Updates
                                        </a>
                                        <a
                                            href="/notes"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Notes
                                        </a>
                                        <a
                                            href="/go"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Go Url
                                        </a>
                                        <a
                                            href="/code"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Pastebin
                                        </a>
                                        <a
                                            href="/blog"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Noobites
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="flex flex-col mr-10 md:mr-20 pr-5">
                                        <h1 className="text-xl pb-4">
                                            Resources
                                        </h1>
                                        <a
                                            href="/i/tos"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Terms
                                        </a>
                                        <a
                                            href="/i/privacy"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Privacy
                                        </a>
                                        <a
                                            href="/contact"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Contact
                                        </a>
                                        <a
                                            href="/i/bugs"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Bugs
                                        </a>
                                        <a
                                            href="/i/support"
                                            className="text-lg text-gray-600 no-underline hover:underline"
                                        >
                                            Support
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/6 text-center">
                                <h1 className="text-2xl pt-4 lg:pt-0">
                                    Socials
                                </h1>
                                <ul className="flex flex-row justify-center items-center text-xl pt-3 gap-8">
                                    <li>
                                        <a
                                            className="no-underline"
                                            href="/social/github"
                                        >
                                            <i className="bi bi-github"></i>
                                            <br />
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="no-underline"
                                            href="/social/ig"
                                        >
                                            <i className="bi bi-instagram"></i>
                                            <br />
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="no-underline"
                                            href="/social/twitter"
                                        >
                                            <i className="bi bi-twitter"></i>
                                            <br />
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="no-underline"
                                            href="/social/mail"
                                        >
                                            <i className="bi bi-envelope"></i>
                                            <br />
                                            Mail
                                        </a>
                                    </li>
                                </ul>
                                <p className="pt-6 text-xl">
                                    Do or do not, there is no try.
                                </p>
                                <p className="pt-2 text-lg">- Master Yoda</p>
                            </div>
                        </>
                    )}
                </div>
            </footer>
        </>
    );
}
