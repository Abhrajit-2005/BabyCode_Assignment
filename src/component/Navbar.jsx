import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Courses', href: '#' },
        { name: 'Practice Tests', href: '#' },
        { name: 'AI Tutor', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Resources', href: '#' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white shadow-md'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <div className="flex justify-between items-center h-16 lg:h-20">

                    <div className="flex items-center group cursor-pointer">
                        <div className="relative mr-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                        </div>
                        <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                            ProIELTS
                        </h1>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${activeItem === item.name
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                    onClick={() => setActiveItem(item.name)}
                                >
                                    {item.name}
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-200 ${activeItem === item.name ? 'w-8' : 'w-0 group-hover:w-8'
                                        }`}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Sign In
                        </button>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Enroll Now
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {!isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100 pb-4'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg border border-gray-100 mt-2 shadow-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                                onClick={() => {
                                    setActiveItem(item.name);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 pb-2 border-t border-gray-100 mt-4">
                            <div className="flex flex-col space-y-2 px-4">
                                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg text-center">
                                    Sign In
                                </button>
                                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg text-center">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;