"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  BookOpen,
  Award,
  MessageCircle,
  UserPlus,
  Search,
  Network,
  Star,
  Menu,
  X,
  Shield,
  Globe,
  Zap,
  Heart,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Download,
  Share2,
  Clock,
  Target,
  Lightbulb,
  Building,
  Stethoscope,
  Plus,
  Minus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-700">MediConnect VN</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Tính năng", "Cách hoạt động", "Về chúng tôi", "Phản hồi", "Liên hệ"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="hidden md:inline-flex bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg">
                  Tham Gia Ngay
                </Button>
              </motion.div>

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {["Tính năng", "Cách hoạt động", "Về chúng tôi", "Phản hồi", "Liên hệ"].map((item) => (
                    <a key={item} href="#" className="text-gray-600 hover:text-green-600 font-medium">
                      {item}
                    </a>
                  ))}
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full px-6 py-2 font-semibold w-full">
                    Tham Gia Ngay
                  </Button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
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
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-green-200/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
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
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-16 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-7xl font-extrabold text-green-800 mb-8 leading-tight"
            >
              <span className="block">Nền Tảng Mạng Xã Hội</span>
              <span className="block text-emerald-600">Y Khoa Hàng Đầu</span>
              <span className="block">Việt Nam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Kết nối hơn <span className="font-bold text-green-600">15,000+ bác sĩ</span> trên toàn quốc.
              <br />
              Chia sẻ kiến thức, trao đổi kinh nghiệm và phát triển sự nghiệp cùng cộng đồng y khoa chuyên nghiệp.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-xl font-bold shadow-2xl">
                  <UserPlus className="w-6 h-6 mr-2" />
                  Tham Gia Miễn Phí
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full px-12 py-6 text-xl font-semibold bg-white/80"
                >
                  <Play className="w-6 h-6 mr-2" />
                  Xem Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-green-700"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Bảo mật tuyệt đối</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Được chứng nhận</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="font-semibold">15,000+ thành viên</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  animate={currentStat === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-green-200 mb-4 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={currentStat === index ? { color: ["#ffffff", "#fbbf24", "#ffffff"] } : {}}
                  transition={{ duration: 1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">Tính Năng Vượt Trội</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Được thiết kế đặc biệt cho nhu cầu của cộng đồng y khoa Việt Nam với những tính năng tiên tiến nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Users className="w-12 h-12 text-green-600" />,
                title: "Hồ Sơ Chuyên Khoa Toàn Diện",
                description:
                  "Xây dựng hồ sơ chuyên nghiệp với thông tin chuyên khoa, kinh nghiệm, chứng chỉ và thành tựu nghiên cứu của bạn",
                bgColor: "bg-green-100",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-blue-600" />,
                title: "Thư Viện Y Khoa Khổng Lồ",
                description:
                  "Truy cập hàng nghìn tài liệu, nghiên cứu mới nhất, hướng dẫn điều trị và tin tức y khoa được cập nhật liên tục",
                bgColor: "bg-blue-100",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-purple-600" />,
                title: "Trao Đổi Ca Bệnh Trực Tiếp",
                description:
                  "Thảo luận ca bệnh phức tạp, chia sẻ kinh nghiệm điều trị và nhận tư vấn từ các chuyên gia hàng đầu",
                bgColor: "bg-purple-100",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Network className="w-12 h-12 text-orange-600" />,
                title: "Mạng Lưới Chuyên Gia",
                description: "Kết nối với hơn 15,000 bác sĩ từ 50+ chuyên khoa khác nhau trên toàn quốc và quốc tế",
                bgColor: "bg-orange-100",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Award className="w-12 h-12 text-red-600" />,
                title: "Chứng Chỉ & Đào Tạo",
                description:
                  "Tham gia các khóa học trực tuyến, hội thảo chuyên môn và nhận chứng chỉ CME được công nhận",
                bgColor: "bg-red-100",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
                title: "Phân Tích & Thống Kê",
                description: "Theo dõi xu hướng y khoa, thống kê dịch bệnh và báo cáo nghiên cứu từ các cơ sở y tế",
                bgColor: "bg-indigo-100",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((feature, index) => (
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
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div
                    className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">Cách Thức Hoạt Động</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tham gia cộng đồng y khoa chuyên nghiệp chỉ với 4 bước đơn giản
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "1",
                  icon: <UserPlus className="w-12 h-12 text-green-600" />,
                  title: "Đăng Ký & Xác Thực",
                  description:
                    "Tạo tài khoản với thông tin chuyên khoa và xác thực danh tính bác sĩ qua hệ thống bảo mật",
                  image: "/placeholder.svg?height=150&width=200",
                },
                {
                  step: "2",
                  icon: <Search className="w-12 h-12 text-green-600" />,
                  title: "Khám Phá & Kết Nối",
                  description:
                    "Tìm kiếm bác sĩ cùng chuyên khoa, tham gia nhóm thảo luận và xây dựng mạng lưới chuyên nghiệp",
                  image: "/placeholder.svg?height=150&width=200",
                },
                {
                  step: "3",
                  icon: <MessageCircle className="w-12 h-12 text-green-600" />,
                  title: "Tương Tác & Chia Sẻ",
                  description: "Tham gia thảo luận ca bệnh, chia sẻ kinh nghiệm và học hỏi từ các chuyên gia hàng đầu",
                  image: "/placeholder.svg?height=150&width=200",
                },
                {
                  step: "4",
                  icon: <TrendingUp className="w-12 h-12 text-green-600" />,
                  title: "Phát Triển Sự Nghiệp",
                  description:
                    "Nâng cao chuyên môn, mở rộng cơ hội việc làm và xây dựng danh tiếng trong cộng đồng y khoa",
                  image: "/placeholder.svg?height=150&width=200",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center relative"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  <div className="mt-8 mb-6">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-32 object-cover rounded-lg mb-6"
                    />
                  </div>

                  <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About/Team Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">Đội Ngũ Chuyên Gia</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Được dẫn dắt bởi những chuyên gia hàng đầu trong lĩnh vực y khoa và công nghệ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-red-500" />,
                title: "Sứ Mệnh",
                description: "Kết nối và nâng cao chất lượng chăm sóc sức khỏe thông qua việc chia sẻ kiến thức y khoa",
              },
              {
                icon: <Target className="w-12 h-12 text-blue-500" />,
                title: "Tầm Nhìn",
                description: "Trở thành nền tảng y khoa hàng đầu Đông Nam Á, góp phần phát triển ngành y tế Việt Nam",
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
                title: "Giá Trị",
                description: "Chuyên nghiệp, minh bạch, đổi mới và luôn đặt lợi ích bệnh nhân lên hàng đầu",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">Phản Hồi Từ Cộng Đồng</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="text-8xl text-green-200 absolute top-4 left-4 font-serif">"</div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed relative z-10">
                      {testimonials[currentTestimonial].quote}
                    </p>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-green-700 text-xl">{testimonials[currentTestimonial].author}</h4>
                        <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Doctor testimonial"
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-green-50 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-green-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-green-50 transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6 text-green-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? "bg-green-600 scale-125" : "bg-green-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">Câu Hỏi Thường Gặp</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                className="mb-6"
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                    <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      {expandedFaq === index ? (
                        <Minus className="w-6 h-6 text-green-600" />
                      ) : (
                        <Plus className="w-6 h-6 text-green-600" />
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
                        <CardContent className="pt-0 pb-6 px-6">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Sẵn Sàng Tham Gia Cộng Đồng?</h2>
            <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Hãy trở thành một phần của cộng đồng y khoa lớn nhất Việt Nam.
              <br />
              Kết nối, học hỏi và phát triển cùng hàng nghìn bác sĩ chuyên nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-green-700 hover:bg-green-50 rounded-full px-12 py-6 text-xl font-bold shadow-2xl">
                  <UserPlus className="w-6 h-6 mr-2" />
                  Đăng Ký Miễn Phí Ngay
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 rounded-full px-12 py-6 text-xl font-semibold bg-transparent"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Tải Ứng Dụng
                </Button>
              </motion.div>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: <Shield className="w-8 h-8" />, text: "Bảo mật tuyệt đối" },
                { icon: <Globe className="w-8 h-8" />, text: "Kết nối toàn cầu" },
                { icon: <Zap className="w-8 h-8" />, text: "Cập nhật realtime" },
                { icon: <Award className="w-8 h-8" />, text: "Chứng nhận CME" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 text-green-100"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Có thắc mắc hoặc cần hỗ trợ? Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng giúp đỡ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Địa chỉ</p>
                      <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Điện thoại</p>
                      <p className="text-gray-600">+84 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">support@mediconnect.vn</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Giờ làm việc</p>
                      <p className="text-gray-600">T2-T6: 8:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Hỗ Trợ 24/7</h3>
                <p className="mb-6">Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.</p>
                <Button className="bg-white text-green-600 hover:bg-green-50">Chat Ngay</Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chuyên khoa</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nhập tin nhắn của bạn..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 text-lg font-semibold">
                  Gửi Tin Nhắn
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">MediConnect VN</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nền tảng mạng xã hội chuyên biệt dành cho cộng đồng y khoa Việt Nam. Kết nối, chia sẻ và phát triển cùng
                nhau.
              </p>
              <div className="flex space-x-4">
                {["facebook", "linkedin", "twitter", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transform hover:scale-110 transition-all duration-200"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Liên kết nhanh</h3>
              <ul className="space-y-3">
                {["Về chúng tôi", "Tính năng", "Cách hoạt động", "Phản hồi", "Blog", "Sự kiện"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-green-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Hỗ trợ</h3>
              <ul className="space-y-3">
                {["Trung tâm trợ giúp", "Liên hệ", "Báo cáo lỗi", "Yêu cầu tính năng", "API Documentation"].map(
                  (link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-green-400 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Pháp lý</h3>
              <ul className="space-y-3">
                {["Điều khoản sử dụng", "Chính sách bảo mật", "Chính sách cookie", "Quy tắc cộng đồng"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-green-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2025 MediConnect VN. All rights reserved.</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ in Vietnam</span>
                <span>Version 2.1.0</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
