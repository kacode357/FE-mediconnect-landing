"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Có thắc mắc hoặc cần hỗ trợ? Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng giúp đỡ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Thông Tin Liên Hệ</h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-green-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Địa chỉ</p>
                    <p className="text-gray-600 text-sm md:text-base">123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-green-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Điện thoại</p>
                    <p className="text-gray-600 text-sm md:text-base">+84 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-green-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Email</p>
                    <p className="text-gray-600 text-sm md:text-base">support@mediconnect.vn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-green-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Giờ làm việc</p>
                    <p className="text-gray-600 text-sm md:text-base">T2-T6: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Hỗ Trợ 24/7</h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.
              </p>
              <Button className="bg-white text-green-600 hover:bg-green-50 text-sm md:text-base">Chat Ngay</Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Gửi Tin Nhắn</h3>

            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                  <input
                    type="text"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                    placeholder="Nhập email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Chuyên khoa</label>
                <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base">
                  <option>Chọn chuyên khoa</option>
                  <option>Tim mạch</option>
                  <option>Nhi khoa</option>
                  <option>Ngoại khoa</option>
                  <option>Nội khoa</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tin nhắn</label>
                <textarea
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm md:text-base"
                  placeholder="Nhập tin nhắn của bạn..."
                ></textarea>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 md:py-3 text-base md:text-lg font-semibold">
                Gửi Tin Nhắn
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
