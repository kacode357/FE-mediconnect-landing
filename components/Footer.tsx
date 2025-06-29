"use client"

import { Network, Share2 } from "lucide-react"

export default function Footer() {
  const quickLinks = ["Về chúng tôi", "Tính năng", "Cách hoạt động", "Phản hồi", "Blog", "Sự kiện"]
  const supportLinks = ["Trung tâm trợ giúp", "Liên hệ", "Báo cáo lỗi", "Yêu cầu tính năng", "API Documentation"]
  const legalLinks = ["Điều khoản sử dụng", "Chính sách bảo mật", "Chính sách cookie", "Quy tắc cộng đồng"]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Network className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white">MediConnect VN</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Nền tảng mạng xã hội chuyên biệt dành cho cộng đồng y khoa Việt Nam. Kết nối, chia sẻ và phát triển cùng
              nhau.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {["facebook", "linkedin", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-200"
                >
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Liên kết nhanh</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-200 text-sm md:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Hỗ trợ</h3>
            <ul className="space-y-2 md:space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-200 text-sm md:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Pháp lý</h3>
            <ul className="space-y-2 md:space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-400 transition-colors duration-200 text-sm md:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              © 2025 MediConnect VN. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm text-gray-400">
              <span>Made with ❤️ in Vietnam</span>
              <span>Version 2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
