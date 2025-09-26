import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(2025);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.getElementById('footer');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => observer.disconnect();
    }, []);

    const footerLinks = {
        courses: [
            { name: 'IELTS Academic', href: '#' },
            { name: 'IELTS General', href: '#' },
            { name: 'Speaking Practice', href: '#' },
            { name: 'Writing Workshop', href: '#' },
            { name: 'Mock Tests', href: '#' }
        ],
        resources: [
            { name: 'Free Practice Tests', href: '#' },
            { name: 'Study Materials', href: '#' },
            { name: 'Score Calculator', href: '#' },
            { name: 'Tips & Strategies', href: '#' },
            { name: 'Success Stories', href: '#' }
        ],
        support: [
            { name: 'Help Center', href: '#' },
            { name: 'Live Chat', href: '#' },
            { name: 'Contact Us', href: '#' },
            { name: 'Technical Support', href: '#' },
            { name: 'Refund Policy', href: '#' }
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Our Team', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press Kit', href: '#' },
            { name: 'Partnerships', href: '#' }
        ]
    };

    const socialLinks = [
        {
            name: 'Facebook',
            icon: '📘',
            href: '#',
            color: 'hover:text-blue-500'
        },
        {
            name: 'Twitter',
            icon: '🐦',
            href: '#',
            color: 'hover:text-sky-500'
        },
        {
            name: 'Instagram',
            icon: '📸',
            href: '#',
            color: 'hover:text-pink-500'
        },
        {
            name: 'LinkedIn',
            icon: '💼',
            href: '#',
            color: 'hover:text-blue-600'
        },
        {
            name: 'YouTube',
            icon: '📹',
            href: '#',
            color: 'hover:text-red-500'
        },
        {
            name: 'TikTok',
            icon: '🎵',
            href: '#',
            color: 'hover:text-pink-600'
        }
    ];

    return (
        <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            <div className="relative z-10">
                <div className="container mx-auto px-6 pt-16 pb-8">
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center space-x-3 group">
                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                                        <span className="text-white font-bold text-xl">P</span>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    ProIELTS
                                </h3>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                Empowering students worldwide to achieve their IELTS dreams through AI-powered learning, expert guidance, and proven strategies.
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                                    <div className="text-2xl font-bold text-green-400">50K+</div>
                                    <div className="text-xs text-gray-400">Students</div>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                                    <div className="text-2xl font-bold text-blue-400">98%</div>
                                    <div className="text-xs text-gray-400">Success Rate</div>
                                </div>
                                <div className="text-center p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                                    <div className="text-2xl font-bold text-purple-400">4.9★</div>
                                    <div className="text-xs text-gray-400">Rating</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Stay Updated 📧</h4>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                                    />
                                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        Subscribe ✨
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                                <span>📚</span>
                                <span>Courses</span>
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.courses.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                                <span>📖</span>
                                <span>Resources</span>
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                                <span>🛟</span>
                                <span>Support</span>
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                                <span>🏢</span>
                                <span>Company</span>
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <h4 className="text-lg font-semibold text-white">Follow Us:</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                                            title={social.name}
                                        >
                                            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                                                {social.icon}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="text-center">
                                    <div className="text-2xl mb-1">🏆</div>
                                    <div className="text-xs text-gray-400">Award Winner</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-1">✅</div>
                                    <div className="text-xs text-gray-400">Certified</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl mb-1">🔒</div>
                                    <div className="text-xs text-gray-400">Secure</div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm text-center md:text-left">
                                © {currentYear} <span className="font-semibold text-white">ProIELTS Institute</span>. All Rights Reserved.
                                <span className="block md:inline mt-1 md:mt-0 md:ml-2">
                                    Made with <span className="text-red-500 animate-pulse">❤️</span> for IELTS aspirants worldwide.
                                </span>
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;