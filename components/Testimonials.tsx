"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "MediConnect VN đã thay đổi hoàn toàn cách tôi tiếp cận và chia sẻ kiến thức y khoa. Tôi có thể kết nối với các chuyên gia hàng đầu và cập nhật những nghiên cứu mới nhất một cách dễ dàng.",
      author: "TS.BS. Nguyễn Văn Minh",
      position: "Trưởng khoa Tim mạch, Bệnh viện Chợ Rẫy",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Nền tảng này không chỉ giúp tôi mở rộng mạng lưới chuyên nghiệp mà còn tạo cơ hội hợp tác nghiên cứu quốc tế. Giao diện thân thiện và tính năng phong phú thực sự ấn tượng.",
      author: "PGS.TS. Trần Thị Lan Anh",
      position: "Phó Giám đốc Bệnh viện Bạch Mai",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Là một bác sĩ trẻ, tôi rất trân trọng cơ hội được học hỏi từ các tiền bối và chia sẻ kinh nghiệm với đồng nghiệp. MediConnect VN chính là cầu nối hoàn hảo cho cộng đồng y khoa.",
      author: "BS.CKI. Lê Hoàng Nam",
      position: "Bác sĩ Nhi khoa, Bệnh viện Nhi Trung ương",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Tính năng trao đổi ca bệnh trực tuyến đã giúp tôi có thêm nhiều góc nhìn từ các chuyên gia khác nhau. Điều này rất có ý nghĩa trong việc đưa ra quyết định điều trị tốt nhất cho bệnh nhân.",
      author: "TS.BS. Phạm Minh Tuấn",
      position: "Trưởng khoa Ngoại Tổng hợp, Bệnh viện 108",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6">
            Phản Hồi Từ Cộng Đồng
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Những chia sẻ chân thực từ các bác sĩ đang sử dụng MediConnect VN
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="text-6xl md:text-8xl text-green-200 absolute top-2 md:top-4 left-2 md:left-4 font-serif">
                "
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex mb-4 md:mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 italic mb-6 md:mb-8 leading-relaxed relative z-10">
                    {testimonials[currentTestimonial].quote}
                  </p>

                  <div className="flex items-center space-x-3 md:space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].author}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-green-700 text-lg md:text-xl">
                        {testimonials[currentTestimonial].author}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base">{testimonials[currentTestimonial].position}</p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Doctor testimonial"
                    className="w-full h-48 md:h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-3 md:p-4 hover:bg-green-50 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-3 md:p-4 hover:bg-green-50 transition-colors duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 md:space-x-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? "bg-green-600 scale-125" : "bg-green-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
