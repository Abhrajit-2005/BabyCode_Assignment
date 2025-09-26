import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const images = [
        {
            url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            alt: "Students studying IELTS"
        },
        {
            url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            alt: "IELTS exam preparation"
        },
        {
            url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            alt: "Online learning platform"
        },
        {
            url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
            alt: "Success celebration"
        },
        {
            url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            alt: "AI-powered learning"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

            <div className="absolute inset-0 overflow-hidden">

                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full opacity-20 animate-float`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${20 + Math.random() * 60}px`,
                            height: `${20 + Math.random() * 60}px`,
                            background: `linear-gradient(45deg, ${['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)]
                                }, ${['#1D4ED8', '#7C3AED', '#059669', '#D97706', '#DC2626'][Math.floor(Math.random() * 5)]
                                })`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}


                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/5 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto lg:px-10 sm:px-15 py-10 lg:py-30">
                <div className="grid lg:grid-cols-2 gap-2 items-center">

                    <div className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex mt-10 items-center space-x-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-1 rounded-full text-sm font-semibold mb-8 border border-green-200 shadow-lg animate-bounce">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span>🎯 #1 IELTS Preparation Platform</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                                Achieve Your Dream
                            </span>
                            <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">
                                IELTS Score
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed max-w-2xl">
                            Join <span className="font-bold text-blue-600">50,000+</span> successful students who achieved their target scores with our
                            <span className="font-semibold text-purple-600"> AI-powered tools</span>,
                            expert guidance, and proven strategies.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
                            <div className="text-center group">
                                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">98%</div>
                                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-3xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">50K+</div>
                                <div className="text-sm text-gray-600 font-medium">Students</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">4.9★</div>
                                <div className="text-sm text-gray-600 font-medium">Rating</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                            <button className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <span className="relative z-10 flex items-center space-x-1">
                                    <span>🚀 Start Free Trial</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </button>

                            <button className="group px-15 py-4 bg-white/80 backdrop-blur-lg hover:bg-white text-gray-800 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
                                <span className="flex items-center space-x-2">
                                    <span>📽️ Watch Demo</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="relative max-w-lg mx-auto">
                            <div className="mt-2 mx-2 relative h-98 w-90 lg:h-[500px] lg:w-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">

                                <div className="relative h-full transform-gpu perspective-1000">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 transform ${index === currentSlide
                                                ? 'opacity-100 scale-100 rotate-0'
                                                : index === (currentSlide + 1) % images.length
                                                    ? 'opacity-0 scale-105 rotate-1'
                                                    : 'opacity-0 scale-95 -rotate-1'
                                                }`}
                                        >
                                            <img
                                                src={image.url}
                                                alt={image.alt}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                                >
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:-translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                                >
                                    <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'bg-white shadow-lg scale-125'
                                                : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-10px) rotate(1deg); }
                    50% { transform: translateY(-5px) rotate(-1deg); }
                    75% { transform: translateY(-15px) rotate(0.5deg); }
                }
                .animate-float {
                    animation: float linear infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default Hero;