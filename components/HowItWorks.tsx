"use client"

import { motion } from "framer-motion"
import { UserPlus, Search, MessageCircle, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      icon: <UserPlus className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      title: "Đăng Ký & Xác Thực",
      description: "Tạo tài khoản với thông tin chuyên khoa và xác thực danh tính bác sĩ qua hệ thống bảo mật",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      step: "2",
      icon: <Search className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      title: "Khám Phá & Kết Nối",
      description: "Tìm kiếm bác sĩ cùng chuyên khoa, tham gia nhóm thảo luận và xây dựng mạng lưới chuyên nghiệp",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      step: "3",
      icon: <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      title: "Tương Tác & Chia Sẻ",
      description: "Tham gia thảo luận ca bệnh, chia sẻ kinh nghiệm và học hỏi từ các chuyên gia hàng đầu",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      step: "4",
      icon: <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      title: "Phát Triển Sự Nghiệp",
      description: "Nâng cao chuyên môn, mở rộng cơ hội việc làm và xây dựng danh tiếng trong cộng đồng y khoa",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6">
            Cách Thức Hoạt Động
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tham gia cộng đồng y khoa chuyên nghiệp chỉ với 4 bước đơn giản
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center relative"
              >
                <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>

                <div className="mt-4 md:mt-8 mb-4 md:mb-6">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-24 md:h-32 object-cover rounded-lg mb-4 md:mb-6"
                  />
                </div>

                <div className="bg-green-100 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
