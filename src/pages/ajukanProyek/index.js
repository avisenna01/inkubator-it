import Input from "@/components/atoms/Input";
import Title from "@/components/atoms/Title";
import Layout from "@/components/templates/Layout";
import React from "react";

const AjukanProyekPage = () => {
  return (
    <>
      <Layout>
        <div className="p-[80px]">
          <Title color="text-black">Formulir Pengajuan Proyek</Title>
          <p>Sudah siap untuk mengajukan proyek?</p>
          <p>Yuk, isi formulir di bawah ini!</p>
          <p>*) Wajib diisi</p>
          <Input name="Nama" label="Nama Lengkap" placeholder="John doe" />
        </div>
      </Layout>
    </>
  );
};

export default AjukanProyekPage;
