import Title from "@/components/atoms/Title";
import MiniNavbar from "@/components/moleculs/MiniNavbar";
import ProjectWithUs from "@/components/organism/ProjectWithUs";
import Layout from "@/components/templates/Layout";
import Image from "next/image";
import React from "react";

const LayananPage = () => {
  return (
    <>
      <Layout>
        <div className="p-[100px]">
          <Title className="mb-[20px]" color="text-black">
            Layanan Kami
          </Title>
          <MiniNavbar />
          <div className="flex gap-8">
            <div>
              <p className="text-[48px]">Website</p>
              <p>
                Website sudah menjadi kebutuhan utama untuk bisnis
                memperkenalkan atau menjual produk atau jasa mereka. Website
                juga kini menjadi salah satu cara marketing dan branding dari
                bisnis. Website bisa menjadi solusi untuk kebutuhan bisnismu
                karena bisa dibuka darimana saja.
              </p>
            </div>
            <Image src="/images/layanan-website.svg" width="300" height="400" />
          </div>
        </div>

        <div>
          <ProjectWithUs />
        </div>
      </Layout>
    </>
  );
};

export default LayananPage;
