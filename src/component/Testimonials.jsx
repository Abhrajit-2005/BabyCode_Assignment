import React, { useState, useEffect } from 'react';

const testimonialsData = [
    {
        quote: "The mock tests were incredibly accurate. I scored an 8.5 overall, and I couldn't have done it without this platform!",
        name: 'Priya Sharma',
        info: 'Scored 8.5 in Academic',
        location: 'Mumbai, India',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        rating: 5,
        course: 'IELTS Academic Prep',
        flag: '🇮🇳'
    },
    {
        quote: "The AI feedback on my writing was a game-changer. It pointed out mistakes I never knew I was making. Highly recommend!",
        name: 'John Martinez',
        info: 'Scored 8.0 in General Training',
        location: 'Toronto, Canada',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        rating: 5,
        course: 'AI Writing Coach',
        flag: '🇨🇦'
    },
    {
        quote: "The speaking practice sessions with native speakers boosted my confidence tremendously. I felt prepared on exam day!",
        name: 'Sarah Chen',
        info: 'Scored 7.5 in Academic',
        location: 'Singapore',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        rating: 5,
        course: 'Speaking Masterclass',
        flag: '🇸🇬'
    },
    {
        quote: "From 6.0 to 8.5 in just 3 months! The structured learning path and personalized study plan made all the difference.",
        name: 'Ahmed Hassan',
        info: 'Improved from 6.0 to 8.5',
        location: 'Dubai, UAE',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        rating: 5,
        course: 'Complete IELTS Bundle',
        flag: '🇦🇪'
    },
    {
        quote: "The vocabulary builder and reading strategies helped me achieve my target band score for university admission!",
        name: 'Maria Rodriguez',
        info: 'Scored 8.0 in Academic',
        location: 'Madrid, Spain',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        rating: 5,
        course: 'Reading & Vocabulary Pro',
        flag: '🇪🇸'
    },
    {
        quote: "Excellent platform with comprehensive materials. The practice tests closely mirrored the actual IELTS exam format.",
        name: 'David Kim',
        info: 'Scored 7.5 in General',
        location: 'Seoul, South Korea',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
        rating: 5,
        course: 'Full Practice Suite',
        flag: '🇰🇷'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('testimonials');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 3) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonials = () => {
        setCurrentIndex((prev) => (prev + 3) % testimonialsData.length);
    };

    const prevTestimonials = () => {
        setCurrentIndex((prev) => (prev - 3 + testimonialsData.length) % testimonialsData.length);
    };

    const visibleTestimonials = [
        testimonialsData[currentIndex],
        testimonialsData[(currentIndex + 1) % testimonialsData.length],
        testimonialsData[(currentIndex + 2) % testimonialsData.length]
    ];

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                ⭐
            </span>
        ));
    };

    return (
        <section id="testimonials" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute opacity-20 animate-float`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${10 + Math.random() * 20}px`,
                            height: `${10 + Math.random() * 20}px`,
                            background: `linear-gradient(45deg, ${['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'][Math.floor(Math.random() * 4)]
                                }, ${['#1D4ED8', '#7C3AED', '#059669', '#D97706'][Math.floor(Math.random() * 4)]
                                })`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    />
                ))}

                <div className="absolute top-10 left-10 text-6xl text-blue-200/30 font-serif">"</div>
                <div className="absolute bottom-10 right-10 text-6xl text-purple-200/30 font-serif transform rotate-180">"</div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-green-200 shadow-lg">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>💬 Real Success Stories</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                            What Our Students
                        </span>
                        <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">
                            Say About Us
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join <span className="font-bold text-blue-600">50,000+</span> successful students who achieved their dream IELTS scores
                    </p>

                    <div className="flex justify-center items-center space-x-8 mt-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-500">4.9★</div>
                            <div className="text-sm text-gray-600">Average Rating</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">98%</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">8.2</div>
                            <div className="text-sm text-gray-600">Avg Band Score</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-4 mb-12">
                    <button
                        onClick={prevTestimonials}
                        className="w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
                    >
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:-translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex space-x-2">
                        {Array.from({ length: Math.ceil(testimonialsData.length / 3) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * 3)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / 3) === index
                                    ? 'bg-blue-600 scale-125'
                                    : 'bg-gray-300 hover:bg-blue-400'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonials}
                        className="w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
                    >
                        <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={`${currentIndex}-${index}`}
                            className={`group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 200}ms` }}
                            onMouseEnter={() => setActiveTestimonial(index)}
                            onMouseLeave={() => setActiveTestimonial(-1)}
                        >
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center text-sm animate-bounce">
                                🏆
                            </div>

                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white text-2xl font-serif opacity-90">
                                "
                            </div>

                            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-blue-200">
                                {testimonial.course}
                            </div>

                            <blockquote className="text-gray-700 italic mb-8 text-lg leading-relaxed relative">
                                <span className="text-4xl text-blue-200 absolute -left-2 -top-2 font-serif">"</span>
                                <p className="relative z-10 pl-4">{testimonial.quote}</p>
                                <span className="text-4xl text-blue-200 absolute -right-2 -bottom-4 font-serif">"</span>
                            </blockquote>

                            <div className="flex items-center justify-center mb-6 space-x-1">
                                {renderStars(testimonial.rating)}
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-white group-hover:ring-blue-200 transition-all duration-300"
                                    />
                                    <div className="absolute -bottom-1 -right-1 text-lg">
                                        {testimonial.flag}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-blue-600 font-semibold text-sm">
                                        {testimonial.info}
                                    </p>
                                    <p className="text-gray-500 text-sm flex items-center space-x-1">
                                        <span>📍</span>
                                        <span>{testimonial.location}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="absolute bottom-4 right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold border border-green-200 flex items-center space-x-1">
                                <span>✓</span>
                                <span>Verified</span>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeTestimonial === index ? 'opacity-100' : ''
                                }`}></div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <button className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>🎯 Join 50,000+ Successful Students</span>
                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-8px) rotate(1deg); }
                    50% { transform: translateY(-4px) rotate(-1deg); }
                    75% { transform: translateY(-12px) rotate(0.5deg); }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;