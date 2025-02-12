import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaPalette, FaChartLine, FaLightbulb } from "react-icons/fa";

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg">
      {/* About Section */}
      <section id="about" className="text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/rifki.jpg" 
            alt="Rifki Rahmat Azis"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-4">Rifki Rahmat Azis</h1>
          <p className="text-gray-200 mt-2">
            Mahasiswa yang memiliki minat dalam pengembangan web dan teknologi.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="space-y-2 text-lg">
          <li className="flex items-center gap-2"><FaCode /> HTML, CSS, JavaScript</li>
          <li className="flex items-center gap-2"><FaCode /> React.js, Next.js</li>
          <li className="flex items-center gap-2"><FaCode /> Node.js, Express.js</li>
          <li className="flex items-center gap-2"><FaCode /> MySQL, MongoDB</li>
        </ul>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <ul className="space-y-2 text-lg">
          <li className="flex items-center gap-2"><FaPalette /> Web Development</li>
          <li className="flex items-center gap-2"><FaLightbulb /> UI/UX Design</li>
          <li className="flex items-center gap-2"><FaChartLine /> SEO Optimization</li>
          <li className="flex items-center gap-2"><FaLightbulb /> Technical Consulting</li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <p className="text-gray-200">
          Berikut adalah beberapa proyek yang telah saya kerjakan:
        </p>
        <ul className="space-y-2 text-lg">
          <li>🔹 Website Company Profile</li>
          <li>🔹 Dashboard Admin</li>
          <li>🔹 Landing Page Bisnis</li>
          <li>🔹 Aplikasi Manajemen Data</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaEnvelope /> rifkiacil8@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaPhone /> +62 812-3456-7890
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaMapMarkerAlt /> Sumedang, Indonesia
        </p>
      </section>
    </div>
  );
}