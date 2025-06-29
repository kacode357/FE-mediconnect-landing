import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MediConnect',
  description: 'MediConnect là nền tảng mạng xã hội y khoa hàng đầu Việt Nam, nơi kết nối bác sĩ, chuyên gia y tế, và cộng đồng. Chia sẻ kiến thức, kinh nghiệm, và tìm kiếm thông tin y tế đáng tin cậy.',
  generator: 'kalus',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
