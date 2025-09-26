import React, { useState, useEffect } from 'react';

const featuresData = [
    {
        icon: '🗣️',
        title: 'Live Speaking Practice',
        description: 'Practice with certified native speakers and get real-time feedback to improve your fluency and confidence.',
        details: ['Real-time pronunciation feedback', 'Native speaker tutors', 'Interactive conversation practice', 'Confidence building exercises'],
        color: 'from-blue-500 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50',
        stats: '50+ Tutors Available',
        badge: 'Most Popular'
    },
    {
        icon: '📝',
        title: 'Unlimited Mock Tests',
        description: 'Access our vast library of full-length mock tests that perfectly simulate the real IELTS exam environment.',
        details: ['500+ practice tests', 'Real exam simulation', 'Detailed performance analytics', 'Time management training'],
        color: 'from-emerald-500 to-green-600',
        bgColor: 'from-emerald-50 to-green-50',
        stats: '500+ Tests Available',
        badge: 'Unlimited Access'
    },
    {
        icon: '🤖',
        title: 'AI Band Score Analysis',
        description: 'Get instant, detailed analysis of your writing and speaking performance with our advanced AI technology.',
        details: ['Instant score prediction', 'Detailed error analysis', 'Improvement suggestions', 'Progress tracking'],
        color: 'from-purple-500 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50',
        stats: '99.8% Accuracy',
        badge: 'AI Powered'
    },
    {
        icon: '📚',
        title: 'Comprehensive Study Materials',
        description: 'Access thousands of practice questions and study guides created by IELTS experts.',
        details: ['10,000+ practice questions', 'Expert-curated content', 'Downloadable resources', 'Mobile-friendly materials'],
        color: 'from-orange-500 to-red-600',
        bgColor: 'from-orange-50 to-red-50',
        stats: '10,000+ Questions',
        badge: 'Expert Created'
    },
    {
        icon: '👥',
        title: 'Community Learning',
        description: 'Connect with fellow IELTS candidates, share experiences, and learn from each other\'s journey.',
        details: ['Study groups', 'Peer feedback', 'Discussion forums', 'Success story sharing'],
        color: 'from-teal-500 to-cyan-600',
        bgColor: 'from-teal-50 to-cyan-50',
        stats: '25,000+ Members',
        badge: 'Community Driven'
    },
    {
        icon: '🎯',
        title: 'Personalized Learning Path',
        description: 'Get a customized study plan based on your current level, target score, and available time.',
        details: ['Adaptive learning algorithm', 'Custom study schedules', 'Weakness identification', 'Goal-oriented planning'],
        color: 'from-violet-500 to-purple-600',
        bgColor: 'from-violet-50 to-purple-50',
        stats: 'Tailored for You',
        badge: 'Personalized'
    }
];

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(-1);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('features');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    const tabs = [
        { id: 'overview', label: 'Overview', icon: '👁️' },
        { id: 'features', label: 'Features', icon: '⚡' },
        { id: 'benefits', label: 'Benefits', icon: '🎯' }
    ];

    return (
        <section id="features" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-10 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${20 + Math.random() * 40}px`,
                            height: `${20 + Math.random() * 40}px`,
                            background: `linear-gradient(45deg, ${['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'][Math.floor(Math.random() * 6)]
                                }, ${['#1D4ED8', '#7C3AED', '#059669', '#D97706', '#DC2626', '#0891B2'][Math.floor(Math.random() * 6)]
                                })`,
                            borderRadius: Math.random() > 0.5 ? '50%' : Math.random() > 0.5 ? '20%' : '0%',
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${3 + Math.random() * 3}s`
                        }}
                    />
                ))}

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200 shadow-lg animate-bounce">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        <span>🚀 Premium Features</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                            Why Choose
                        </span>
                        <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">
                            ProIELTS?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Discover the cutting-edge features that make ProIELTS the #1 choice for
                        <span className="font-bold text-blue-600"> IELTS preparation worldwide</span>
                    </p>

                    <div className="flex justify-center mb-8">
                        <div className="bg-white/80 backdrop-blur-lg rounded-xl p-1 shadow-xl border border-white/20">
                            <div className="flex space-x-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center space-x-2 px-6 sm:px-2 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                            }`}
                                    >
                                        <span className="text-sm">{tab.icon}</span>
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative transform transition-all duration-700 hover:scale-105 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-20 opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(-1)}
                        >
                            <div className={`relative bg-gradient-to-br ${feature.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 backdrop-blur-lg overflow-hidden min-h-[400px] flex flex-col`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                {feature.badge && (
                                    <div className="absolute top-4 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        {feature.badge}
                                    </div>
                                )}

                                <div className="relative mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                    <div className={`relative w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                        <span className="text-4xl filter drop-shadow-lg">{feature.icon}</span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-1">
                                        {feature.description}
                                    </p>

                                    <div className={`space-y-2 mb-6 transform transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}>
                                        {feature.details.map((detail, i) => (
                                            <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={`flex items-center justify-between py-4 px-4 bg-white/60 rounded-2xl backdrop-blur-sm border border-white/40 shadow-inner`}>
                                        <span className="text-sm font-semibold text-gray-700">{feature.stats}</span>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-yellow-400">⭐</span>
                                            <span className="text-sm font-bold text-gray-700">4.9</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    style={{
                                        borderImage: `linear-gradient(45deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]}) 1`
                                    }}>
                                </div>

                                {hoveredCard === index && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                                                style={{
                                                    left: `${20 + i * 12}%`,
                                                    top: `${30 + (i % 2) * 40}%`,
                                                    animationDelay: `${i * 0.2}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 transform scale-105`}></div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Experience All These Features?
                        </h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful students and start your IELTS journey with our premium features
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative px-10 py-4 bg-white hover:bg-gray-50 text-blue-600 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span>🚀 Start Free Trial</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </button>

                            <button className="group px-8 py-4 bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white font-semibold rounded-full text-lg border border-white/30 hover:border-white/50 transition-all duration-300">
                                <span className="flex items-center space-x-2">
                                    <span>📋 View All Features</span>
                                </span>
                            </button>
                        </div>

                        <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-bounce flex items-center justify-center text-2xl">
                            🎯
                        </div>
                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse flex items-center justify-center text-lg">
                            ⚡
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-10px) rotate(2deg); }
                    50% { transform: translateY(-5px) rotate(-2deg); }
                    75% { transform: translateY(-15px) rotate(1deg); }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Features;