import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Footer from "@/components/globals/Footer"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Tayler Burke - Full-Stack Developer",
  description:
    "Portfolio Website for an entrepreneurial Full-Stack Developer named Tayler Burke with a passion for creating end-to-end solutions. Collaboration and communication are the cornerstone of my workflow. With previous experience running businesses, I offer more than just writing code.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-white overflow-x-clip w-screen`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
