import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight, Zap } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-purple-600/30 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                >
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium tracking-wide text-blue-200">Organized by Finance and Tech Club (FTC)</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent"
                >
                    FINOVATEX<br />2026
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 font-light"
                >
                    24-Hour FinTech Innovation Summit. Redefining the future of finance through technology.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row gap-6 mb-16"
                >
                    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <Calendar className="w-6 h-6 text-purple-400" />
                        <div className="text-left">
                            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Dates</p>
                            <p className="text-sm font-medium">28th – 29th March</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <MapPin className="w-6 h-6 text-blue-400" />
                        <div className="text-left">
                            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Format</p>
                            <p className="text-sm font-medium">Internal + External</p>
                        </div>
                    </div>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden transition-all hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_40px_rgba(100,108,255,0.4)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Register Now
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
            </div>
        </section>
    )
}

export default Hero
