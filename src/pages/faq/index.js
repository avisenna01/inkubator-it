import Title from "@/components/atoms/Title";
import QA from "@/components/moleculs/QA";
import Layout from "@/components/templates/Layout";
import React from "react";

const FAQPage = () => {
  return (
    <>
      <Layout>
        <div className="p-20">
          <Title color="text-black">Frequently Asked Question</Title>
          <QA
            q="Bagaimana cara mengajukan request project?"
            a="Request project dapat dilakukan dengan mengisi form pada halaman Request di link berikut"
          />
          <QA
            q="Apa saja yang harus disiapkan saat mengajukan request project?"
            a="Menentukan jenis dan tujuan proyek yang ingin diajukan.
          Membuat deskripsi dari proyek yang ingin diajukan.
          Mempertimbangkan deadline dan biaya proyek sesuai kompleksitas proyek yang ingin diajukan.
          Jika proyek sudah memiliki rancangan dan desain tampilan, proyek yang diajukan akan diproses lebih cepat."
          />
          <QA
            q="Bagaimana alur pengerjaan projek?"
            a="Melakukan pengajuan proyek dengan mengisi form di Request a Project | Inkubator IT
          Dalam waktu tiga hari setelah proyek diajukan, pihak Manajer Proyek Inkubator IT akan menghubungi Anda untuk melakukan diskusi.
          Melakukan pengesahan MoU.
          Pengembangan proyek dilakukan sampai waktu yang telah ditentukan.
          Melakukan Handover dan tanda tangan kontrak."
          />
          <QA
            q="Products apa saja yang dicover oleh inkubator IT?"
            a="Pada umumnya, produk yang ditawarkan oleh Inkubator IT adalah sebagai berikut.
Website
Aplikasi Android
Aplikasi iOS
Game
Prototype
Mockup
Selain produk yang ditawarkan di atas, pengaju dapat menulis jenis proyek lainnya sesuai yang diinginkan."
          />
          <QA
            q="Apakah perlu membuat akun terlebih dahulu?"
            a="Tidak perlu, jika ingin mengajukan proyek, hanya mengisi form request proyek saja di link berikut"
          />
        </div>
      </Layout>
    </>
  );
};

export default FAQPage;
