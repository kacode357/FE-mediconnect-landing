"use client"

import { useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
import { Users, MessageCircle, Building, Stethoscope } from "lucide-react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function MediConnectLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

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

  const stats = [
    { number: "15,000+", label: "Bác sĩ đã tham gia", icon: <Users className="w-8 h-8" /> },
    { number: "50+", label: "Chuyên khoa", icon: <Stethoscope className="w-8 h-8" /> },
    { number: "200+", label: "Bệnh viện liên kết", icon: <Building className="w-8 h-8" /> },
    { number: "1,000+", label: "Ca bệnh được thảo luận", icon: <MessageCircle className="w-8 h-8" /> },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Stats stats={stats} currentStat={currentStat} />
      <Features />
      <HowItWorks />
      <About teamMembers={teamMembers} />
      <Testimonials
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        nextTestimonial={nextTestimonial}
        prevTestimonial={prevTestimonial}
      />
      <FAQ faqs={faqs} expandedFaq={expandedFaq} setExpandedFaq={setExpandedFaq} />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
