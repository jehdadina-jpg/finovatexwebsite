import { motion } from 'framer-motion'

const scheduleData = [
    {
        day: "Day 1 – Saturday",
        events: [
            { time: "07:30 AM", title: "Registration & Breakfast" },
            { time: "09:00 AM", title: "Opening Ceremony & Problem Statement" },
            { time: "10:30 AM", title: "Hackathon Official Start & Phase I", highlight: true },
            { time: "01:00 PM", title: "Lunch Break" },
            { time: "02:00 PM", title: "Live Trading Simulation & Phase II", highlight: true },
            { time: "05:00 PM", title: "FinTech Escape Room", highlight: true },
            { time: "07:30 PM", title: "Dinner Break" },
            { time: "08:30 PM", title: "Development Phase III" },
            { time: "09:00 PM", title: "Mentor Checkpoint Round" },
            { time: "12:00 AM", title: "Overnight Development Phase", highlight: true },
        ]
    },
    {
        day: "Day 2 – Sunday",
        events: [
            { time: "07:30 AM", title: "Breakfast" },
            { time: "08:30 AM", title: "Final Development & Debugging", highlight: true },
            { time: "11:00 AM", title: "Fraud Detection Mini-Challenge", highlight: true },
            { time: "12:30 PM", title: "Lunch" },
            { time: "01:30 PM", title: "Final Presentations (Top Teams)" },
            { time: "04:00 PM", title: "Award Ceremony & Closing" },
        ]
    }
]

const ScheduleItem = ({ item, index }: { item: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className={`relative pl-8 py-4 border-l-2 ${item.highlight ? 'border-purple-500' : 'border-white/10'}`}
    >
        <div className={`absolute w-4 h-4 rounded-full -left-[9px] top-5 ${item.highlight ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 'bg-white/20'}`} />
        <span className="text-sm font-mono text-white/50">{item.time}</span>
        <h4 className={`text-lg mt-1 ${item.highlight ? 'text-purple-300 font-medium' : 'text-white/80'}`}>{item.title}</h4>
    </motion.div>
)

const Schedule = () => {
    return (
        <section className="py-24 relative z-10 px-4 bg-black/20">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Itinerary</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        A comprehensive 24-hour schedule packed with intense development phases, interactive simulations, and mini-challenges.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {scheduleData.map((day) => (
                        <div key={day.day}>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold mb-8 flex items-center gap-3 text-white/90"
                            >
                                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
                                {day.day}
                                <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
                            </motion.h3>

                            <div className="ml-4">
                                {day.events.map((event, i) => (
                                    <ScheduleItem key={i} item={event} index={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Schedule
