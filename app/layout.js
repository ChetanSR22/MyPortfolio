import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chetan's Portfolio",
  description: "Welcome to the portfolio of Chetan S Wankhade, a dedicated and creative web developer based in Yavatmal. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React.js, I build responsive, user-friendly websites and applications. Browse my projects, learn about my skills, and get in touch to collaborate on innovative web solutions. Whether you're a business or recruiter, I'm always excited to take on new challenges in modern frontend development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="Math.random()">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
