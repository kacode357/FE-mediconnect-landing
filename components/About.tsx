"use client"

import { motion } from "framer-motion"
import { Heart, Target, Lightbulb } from "lucide-react"

export default function About() {
  const teamMembers = [
    {
      name: "TS.BS. Nguyễn Thành Long",
      position: "Giám đốc Y khoa",
      image: "/placeholder.svg?height=300&width=300",
      description: "20+ năm kinh nghiệm trong lĩnh vực tim mạch",
    },
    {
      name: "ThS. Trần Minh Hà",
      position: "Giám đốc Công nghệ",
      image: "/placeholder.svg?height=300&width=300",
      description: "Chuyên gia công nghệ y tế và AI",
    },
    {
      name: "BS. Lê Thị Mai",
      position: "Trưởng phòng Nội dung",
      image: "/placeholder.svg?height=300&width=300",
      description: "Chuyên gia về giáo dục y khoa",
    },
    {
      name: "KS. Phạm Văn Đức",
      position: "Trưởng phòng Phát triển",
      image: "/placeholder.svg?height=300&width=300",
      description: "15+ năm kinh nghiệm phát triển phần mềm",
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8 md:w-12 md:h-12 text-red-500" />,
      title: "Sứ Mệnh",
      description: "Kết nối và nâng cao chất lượng chăm sóc sức khỏe thông qua việc chia sẻ kiến thức y khoa",
    },
    {
      icon: <Target className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />,
      title: "Tầm Nhìn",
      description: "Trở thành nền tảng y khoa hàng đầu Đông Nam Á, góp phần phát triển ngành y tế Việt Nam",
    },
    {
      icon: <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />,
      title: "Giá Trị",
      description: "Chuyên nghiệp, minh bạch, đổi mới và luôn đặt lợi ích bệnh nhân lên hàng đầu",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6">
            Đội Ngũ Chuyên Gia
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Được dẫn dắt bởi những chuyên gia hàng đầu trong lĩnh vực y khoa và công nghệ
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 leading-tight">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2 md:mb-3 text-sm md:text-base">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 md:p-8 bg-gray-50 rounded-2xl"
            >
              <div className="flex justify-center mb-4 md:mb-6">{value.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
