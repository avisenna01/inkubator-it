import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/components/templates/Layout";
import Button from "@/components/atoms/Button";
import { goToAjukanProyek } from "@/helpers/utils/navigation";
import Thumbs from "@/components/atoms/Icons/Thumbs";
import Dollar from "@/components/atoms/Icons/Dollar";
import Shield from "@/components/atoms/Icons/Shield";
import Website from "@/components/atoms/Icons/Website";
import Desktop from "@/components/atoms/Icons/Desktop";
import Lainnya from "@/components/atoms/Icons/Lainnya";
import Mobile from "@/components/atoms/Icons/Mobile";
import Carousel from "@/components/moleculs/Carousel";

const Section3 = () => {
  return (
    <>
      <section className="section-3 my-[128px] px-[72px]">
        <p className="text-[48px] font-bold mb-[60px]">
          Bagaimana Cara Kerjanya?
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-bold">Step 1</p>
              <p className="text-[14px]">Mengisi form Request</p>
            </div>
            <div>
              <p className="font-bold">Step 2</p>
              <p className="text-[14px]">Diskusi dengan Klien</p>
            </div>
            <div>
              <p className="font-bold">Step 3</p>
              <p className="text-[14px]">Evaluasi Kelayakan Proyek</p>
            </div>
            <div>
              <p className="font-bold">Step 4</p>
              <p className="text-[14px]">Pencarian Programmer</p>
            </div>
            <div>
              <p className="font-bold">Step 5</p>
              <p className="text-[14px]">Pengesahan MoU</p>
            </div>
            <div>
              <p className="font-bold">Step 6</p>
              <p className="text-[14px]">Pengerjaan Proyek</p>
            </div>
          </div>
          {/* <Carousel /> */}
        </div>
      </section>
    </>
  );
};

export default Section3;
