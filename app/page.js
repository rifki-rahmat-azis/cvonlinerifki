"use client";

import { useState, useEffect } from "react";

const data = [
  { no: 1, nim: "123456", nama: "Rifki Rahmat Azis", gender: "Laki-laki", prodi: "Informatika", kelas: "IF-1", semester: 6, alamat: "Sumedang", hobby: "Tenis Meja", citacita: "Software Engineer" },
  { no: 2, nim: "654321", nama: "Aisyah Putri", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-2", semester: 4, alamat: "Bandung", hobby: "Membaca", citacita: "Data Analyst" }
];

export default function StudentTable() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4">
      {isDesktop ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">No</th>
              <th className="border border-gray-300 p-2">NIM</th>
              <th className="border border-gray-300 p-2">Nama</th>
              <th className="border border-gray-300 p-2">Gender</th>
              <th className="border border-gray-300 p-2">Prodi</th>
              <th className="border border-gray-300 p-2">Kelas</th>
              <th className="border border-gray-300 p-2">Semester</th>
              <th className="border border-gray-300 p-2">Alamat</th>
              <th className="border border-gray-300 p-2">Hobby</th>
              <th className="border border-gray-300 p-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no} className="text-center">
                <td className="border border-gray-300 p-2">{item.no}</td>
                <td className="border border-gray-300 p-2">{item.nim}</td>
                <td className="border border-gray-300 p-2">{item.nama}</td>
                <td className="border border-gray-300 p-2">{item.gender}</td>
                <td className="border border-gray-300 p-2">{item.prodi}</td>
                <td className="border border-gray-300 p-2">{item.kelas}</td>
                <td className="border border-gray-300 p-2">{item.semester}</td>
                <td className="border border-gray-300 p-2">{item.alamat}</td>
                <td className="border border-gray-300 p-2">{item.hobby}</td>
                <td className="border border-gray-300 p-2">{item.citacita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="grid gap-4">
          {data.map((item) => (
            <div key={item.no} className="border p-4 rounded-lg shadow-md bg-white">
              <p><strong>No:</strong> {item.no}</p>
              <p><strong>NIM:</strong> {item.nim}</p>
              <p><strong>Nama:</strong> {item.nama}</p>
              <p><strong>Gender:</strong> {item.gender}</p>
              <p><strong>Prodi:</strong> {item.prodi}</p>
              <p><strong>Kelas:</strong> {item.kelas}</p>
              <p><strong>Semester:</strong> {item.semester}</p>
              <p><strong>Alamat:</strong> {item.alamat}</p>
              <p><strong>Hobby:</strong> {item.hobby}</p>
              <p><strong>Cita-cita:</strong> {item.citacita}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
