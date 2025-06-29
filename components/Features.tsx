"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, MessageCircle, Network, Award, TrendingUp } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      title: "Hồ Sơ Chuyên Khoa Toàn Diện",
      description:
        "Xây dựng hồ sơ chuyên nghiệp với thông tin chuyên khoa, kinh nghiệm, chứng chỉ và thành tựu nghiên cứu của bạn",
      bgColor: "bg-green-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
      title: "Thư Viện Y Khoa Khổng Lồ",
      description:
        "Truy cập hàng nghìn tài liệu, nghiên cứu mới nhất, hướng dẫn điều trị và tin tức y khoa được cập nhật liên tục",
      bgColor: "bg-blue-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-purple-600" />,
      title: "Trao Đổi Ca Bệnh Trực Tiếp",
      description: "Thảo luận ca bệnh phức tạp, chia sẻ kinh nghiệm điều trị và nhận tư vấn từ các chuyên gia hàng đầu",
      bgColor: "bg-purple-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Network className="w-8 h-8 md:w-12 md:h-12 text-orange-600" />,
      title: "Mạng Lưới Chuyên Gia",
      description: "Kết nối với hơn 15,000 bác sĩ từ 50+ chuyên khoa khác nhau trên toàn quốc và quốc tế",
      bgColor: "bg-orange-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Award className="w-8 h-8 md:w-12 md:h-12 text-red-600" />,
      title: "Chứng Chỉ & Đào Tạo",
      description: "Tham gia các khóa học trực tuyến, hội thảo chuyên môn và nhận chứng chỉ CME được công nhận",
      bgColor: "bg-red-100",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-indigo-600" />,
      title: "Phân Tích & Thống Kê",
      description: "Theo dõi xu hướng y khoa, thống kê dịch bệnh và báo cáo nghiên cứu từ các cơ sở y tế",
      bgColor: "bg-indigo-100",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6">
            Tính Năng Vượt Trội
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Được thiết kế đặc biệt cho nhu cầu của cộng đồng y khoa Việt Nam với những tính năng tiên tiến nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6 md:p-8">
                <div
                  className={`${feature.bgColor} w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
