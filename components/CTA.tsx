"use client"

import { motion } from "framer-motion"
import { UserPlus, Download, Shield, Globe, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const socialProof = [
    { icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, text: "Bảo mật tuyệt đối" },
    { icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />, text: "Kết nối toàn cầu" },
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, text: "Cập nhật realtime" },
    { icon: <Award className="w-6 h-6 md:w-8 md:h-8" />, text: "Chứng nhận CME" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 md:mb-8">Sẵn Sàng Tham Gia Cộng Đồng?</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-green-100 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Hãy trở thành một phần của cộng đồng y khoa lớn nhất Việt Nam.
            <br className="hidden md:block" />
            Kết nối, học hỏi và phát triển cùng hàng nghìn bác sĩ chuyên nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold shadow-2xl w-full sm:w-auto">
                <UserPlus className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Đăng Ký Miễn Phí Ngay
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 rounded-full px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold bg-transparent w-full sm:w-auto"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Tải Ứng Dụng
              </Button>
            </motion.div>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {socialProof.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-2 text-green-100"
              >
                {item.icon}
                <span className="text-xs md:text-sm font-medium text-center">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
