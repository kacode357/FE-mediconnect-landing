"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "MediConnect VN có miễn phí không?",
      answer:
        "Có, MediConnect VN hoàn toàn miễn phí cho tất cả bác sĩ và nhân viên y tế. Chúng tôi tin rằng việc chia sẻ kiến thức y khoa không nên bị giới hạn bởi chi phí.",
    },
    {
      question: "Làm thế nào để xác thực danh tính bác sĩ?",
      answer:
        "Chúng tôi có quy trình xác thực nghiêm ngặt bao gồm kiểm tra bằng cấp, chứng chỉ hành nghề và xác nhận từ cơ sở y tế. Quá trình này đảm bảo chỉ những chuyên gia y tế được cấp phép mới có thể tham gia.",
    },
    {
      question: "Thông tin bệnh nhân có được bảo mật không?",
      answer:
        "Tuyệt đối. Chúng tôi tuân thủ nghiêm ngặt các quy định về bảo mật thông tin y tế. Mọi thông tin được mã hóa và chỉ những người có thẩm quyền mới có thể truy cập.",
    },
    {
      question: "Tôi có thể sử dụng trên điện thoại không?",
      answer:
        "Có, MediConnect VN được tối ưu hóa cho mọi thiết bị. Bạn có thể truy cập qua trình duyệt web hoặc tải ứng dụng di động để có trải nghiệm tốt nhất.",
    },
    {
      question: "Làm thế nào để tham gia các nhóm chuyên khoa?",
      answer:
        "Sau khi đăng ký và xác thực, bạn có thể tìm kiếm và tham gia các nhóm chuyên khoa phù hợp. Mỗi nhóm có moderator là các chuyên gia hàng đầu trong lĩnh vực đó.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Những thắc mắc phổ biến về MediConnect VN
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 md:mb-6"
            >
              <Card className="overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {expandedFaq === index ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <CardContent className="pt-0 pb-4 md:pb-6 px-4 md:px-6">
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
