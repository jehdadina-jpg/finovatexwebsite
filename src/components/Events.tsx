import { motion } from 'framer-motion'
import { Code2, TrendingUp, ShieldAlert, Lock } from 'lucide-react'

const events = [
    {
        title: "FinTech Hackathon",
        subtitle: "24-Hour Core Event",
        description: "Develop working prototypes in areas like Digital Lending, UPI Optimization, and RegTech. Mandatory deliverables include architecture and business plans.",
        icon: Code2,
        color: "text-blue-400",
        bgHover: "hover:bg-blue-600/10",
        borderHover: "group-hover:border-blue-500/50"
    },
    {
        title: "Live Trading Simulation",
        subtitle: "Virtual Trading Competition",
        description: "Trade using virtual capital in a 2-hour window with real-time tracking. Learn portfolio allocation and behavioral finance under pressure.",
        icon: TrendingUp,
        color: "text-green-400",
        bgHover: "hover:bg-green-600/10",
        borderHover: "group-hover:border-green-500/50"
    },
    {
        title: "FinTech Escape Room",
        subtitle: "Interactive Crisis Simulation",
        description: "'Digital Bank Under Cyber Attack - 60 Minutes to Secure the System'. Solve stages involving suspicious logins and market crash rebalancing.",
        icon: Lock,
        color: "text-red-400",
        bgHover: "hover:bg-red-600/10",
        borderHover: "group-hover:border-red-500/50"
    },
    {
        title: "Fraud Detection Mini-Challenge",
        subtitle: "Data-Based Risk Analysis",
        description: "Analyze a simulated dataset to identify suspicious activity and propose rules. Introduces AML monitoring and transaction risk management.",
        icon: ShieldAlert,
        color: "text-purple-400",
        bgHover: "hover:bg-purple-600/10",
        borderHover: "group-hover:border-purple-500/50"
    }
]

const Events = () => {
    return (
        <section className="py-24 relative z-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Summit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Events</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto">
                        Experience 4 high-octane events designed to test your financial acumen, coding skills, and strategic thinking.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event, index) => {
                        const Icon = event.icon
                        return (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-pointer ${event.bgHover}`}
                            >
                                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300 ${event.borderHover}`} />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                        <Icon className={`w-7 h-7 ${event.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                                    <div className={`text-sm tracking-widest uppercase font-bold mb-4 ${event.color}`}>
                                        {event.subtitle}
                                    </div>
                                    <p className="text-white/60 leading-relaxed font-light">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Events
