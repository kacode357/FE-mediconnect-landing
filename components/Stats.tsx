"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Stethoscope, Building, MessageCircle } from "lucide-react"

export default function Stats() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { number: "15,000+", label: "Bác sĩ đã tham gia", icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
    { number: "50+", label: "Chuyên khoa", icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" /> },
    { number: "200+", label: "Bệnh viện liên kết", icon: <Building className="w-6 h-6 md:w-8 md:h-8" /> },
    { number: "1,000+", label: "Ca bệnh được thảo luận", icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" /> },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                animate={currentStat === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
                className="text-green-200 mb-3 md:mb-4 flex justify-center"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2"
                animate={currentStat === index ? { color: ["#ffffff", "#fbbf24", "#ffffff"] } : {}}
                transition={{ duration: 1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-green-100 text-sm md:text-lg leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
