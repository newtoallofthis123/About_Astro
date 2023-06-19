import React from 'react';

export default function Init() {
    const [icon, setIcon] = React.useState('bi-moon');
    const setTheme = (theme: string) => {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.add(theme);
        }
    };
    const toggleTheme = (theme: string) => {
        let set_theme = theme;
        if (theme === 'system') {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                set_theme = 'dark';
            } else {
                set_theme = 'light';
            }
        }
        if (set_theme === 'dark') {
            setIcon('bi-sun');
        } else {
            setIcon('bi-moon');
        }
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    };
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const theme = localStorage.getItem('theme');
            if (theme) {
                toggleTheme(theme);
            } else {
                toggleTheme('system');
            }
        }
    }, []);
    return (
        <>
            Toggle Mode:
            <button
                style={{
                    marginLeft: '0.5rem',
                    background: 'none',
                    color: 'var(--color)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                }}
                onClick={() => {
                    const theme = localStorage.getItem('theme');
                    if (theme === 'dark') {
                        toggleTheme('light');
                    } else {
                        toggleTheme('dark');
                    }
                }}
            >
                <i className={`bi ${icon}`}></i>
            </button>{' '}
            or
            <button
                style={{
                    marginLeft: '0.5rem',
                    background: 'none',
                    color: 'var(--color)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                }}
                onClick={() => {
                    toggleTheme('system');
                }}
            >
                <i className="bi bi-repeat"></i>
            </button>
        </>
    );
}
