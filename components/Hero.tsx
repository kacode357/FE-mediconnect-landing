"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { UserPlus, Play, Shield, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Medical professionals collaborating"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 md:w-20 md:h-20 bg-green-200/30 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-12 lg:p-16 shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-green-800 mb-6 md:mb-8 leading-tight"
          >
            <span className="block mt-4">Nền Tảng Mạng Xã Hội</span>
            <span className="block text-emerald-600">Y Khoa Hàng Đầu</span>
            <span className="block">Việt Nam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Kết nối hơn <span className="font-bold text-green-600">15,000+ bác sĩ</span> trên toàn quốc.
            <br className="hidden md:block" />
            Chia sẻ kiến thức, trao đổi kinh nghiệm và phát triển sự nghiệp cùng cộng đồng y khoa chuyên nghiệp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-2xl w-full sm:w-auto">
                <UserPlus className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Tham Gia Miễn Phí
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold bg-white/80 w-full sm:w-auto"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Xem Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-green-700"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">Bảo mật tuyệt đối</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">Được chứng nhận</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">15,000+ thành viên</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
