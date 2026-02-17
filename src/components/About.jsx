import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Users, Lightbulb, ArrowRight } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <BookOpen className="w-6 h-6 text-finance-navy" />,
            title: "Structured Exploration",
            desc: "Deep dive into seamless pathways in finance, accounting, and management.",
            color: "bg-finance-gold"
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-finance-navy" />,
            title: "Career Growth",
            desc: "Navigate diverse opportunities with a clear, strategic roadmap.",
            color: "bg-finance-emerald"
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Expert Insights",
            desc: "Direct mentorship from industry leaders who have walked the path.",
            color: "bg-blue-500"
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-finance-navy" />,
            title: "Empowerment",
            desc: "Make confident, data-backed decisions about your professional future.",
            color: "bg-yellow-300"
        }
    ];

    return (
        <section id="about" className="py-24 bg-finance-navy relative">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h4 className="text-finance-gold font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h4>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                            Bridging the gap between <br className="hidden md:block" /> academic theory and reality.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 max-w-sm text-lg">
                            We provide the compass for commerce students to navigate the complex world of finance.
                        </p>
                    </motion.div>
                </div>

                {/* Clean Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-finance-lightNavy/20 p-8 rounded-xl border border-white/5 hover:border-finance-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
                        >
                            {/* Hover Accent Gradient */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${feature.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>

                            {/* Subtle Background Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-lg bg-finance-navy border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-finance-gold group-hover:border-finance-gold/30 transition-colors shadow-lg`}>
                                    {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                                </div>

                                <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-finance-gold transition-colors">{feature.title}</h3>

                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 group-hover:border-white/20 transition-colors">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
