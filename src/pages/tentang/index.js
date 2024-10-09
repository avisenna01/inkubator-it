import Title from "@/components/atoms/Title";
import Card from "@/components/moleculs/Card";
import ProjectWithUs from "@/components/organism/ProjectWithUs";
import Layout from "@/components/templates/Layout";
import React from "react";

const TentangPage = () => {
  return (
    <>
      <Layout>
        <div className="p-20">
          <Title color="text-black">Tentang Inkubator IT</Title>
          <p>
            Inkubator IT merupakan sebuah gerakan keprofesian yang diusung saat
            kepengurusan Lyco Adhi Purwoko sebagai ketua HMIF pada 2011/2012.
            Hal ini terbuka bagi seluruh massa HMIF dan dijalankan sesuai dengan
            keinginan massa HMIF. Dengan kata lain, Inkubator IT merupakan suatu
            bentuk keprofesian HMIF dimana mengedepankan keterlibatan anggota
            himpunan sebagai individu yang dapat berkembang dalam dunia
            keinformatikaan.
          </p>
          <Title color="text-black" className="mt-[100px] text-right">
            Visi dan Misi
          </Title>
          <div>
            <p className="font-semibold text-[24px]">Visi</p>
            <ul>
              <li>
                - Terbentuknya komunitas IT sebagai wadah aktualisasi
                keprofesian massa HMIF.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-[24px]">Misi</p>
            <ul>
              <li>
                - Membentuk dan mengembangkan komunitas berbasis keilmuan
                informatika.
              </li>
              <li>
                - Menyalurkan dan mengembangkan potensi anggota Inkubator IT
                melalui pembelajaran dan aktualisasi diri.
              </li>
              <li>
                - Memotivasi minat anggota untuk berinovasi sebagai
                bentukpengembangan keilmuan informatika.
              </li>
              <li>
                - Mendukung keberjalanan HMIF dengan mendapatkan sumber dana
                dari pengerjaan proyek.xz
              </li>
            </ul>
          </div>
          <Title color="text-black" className="mt-[100px]">
            Prinsip Kami
          </Title>
          <div className="flex justify-center gap-6 mb-[120px]">
            <Card title="Integritas">
              Kami memegang nilai-nilai integritas dan transparansi dalam
              pengerjaan proyek.
            </Card>
            <Card title="Kolaborasi">
              Dalam pengerjaan proyek terdapat banyak pihak yang terlibat. Untuk
              itu kolaborasi antar pihak sangat dijunjung tinggi oleh Inkubator
              IT.
            </Card>
            <Card title="Aktif">
              Inkubator IT aktif mengembangkan anggota dan layanannya sesuai
              dengan perkembangan teknologi.
            </Card>
          </div>
          <ProjectWithUs />
        </div>
      </Layout>
    </>
  );
};

export default TentangPage;
