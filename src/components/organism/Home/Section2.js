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

const Section2 = () => {
  return (
    <>
      <section class="section-2 mt-[220px] px-[72px]">
        <h1 className="text-[36px] mb-[100px] font-bold underline decoration-solid  decoration-[20px] decoration-[#ECAF23] decoration-skip-ink-none underline-offset-[-6px]">
          Layanan Kami
        </h1>
        <div className="grid grid-cols-2 gap-16">
          <div className="flex gap-4 shadow-lg px-[20px] py-[80px] rounded-[12px] hover:bg-[#4D194D] hover:text-white transition-all hover:scale-105">
            <Website />
            <div>
              <h6 className="font-bold text-[20px]">Website</h6>
              <p>
                Inkubator IT menyediakan layanan pembuatan website / situs untuk
                kebutuhan bisnis, lomba, maupun pribadi.
              </p>
            </div>
          </div>
          <div className="flex gap-4  shadow-lg px-[20px] py-[80px]  rounded-[12px]  hover:bg-[#4D194D] hover:text-white transition-all hover:scale-105">
            <Mobile />
            <div>
              <h6 className="font-bold text-[20px]">Mobile</h6>
              <p>
                Inkubator IT menyediakan layanan pembuatan aplikasi berbasis
                mobile.
              </p>
            </div>
          </div>
          <div className="flex gap-4  shadow-lg px-[20px] py-[80px]  rounded-[12px]  hover:bg-[#4D194D] hover:text-white transition-all hover:scale-105">
            <Desktop />
            <div>
              <h6 className="font-bold text-[20px]">Desktop</h6>
              <p>
                Inkubator IT menyediakan layanan pembuatan aplikasi berbasis
                dekstop yang dapat dibuka dari perangkat PC / laptop.
              </p>
            </div>
          </div>
          <div className="flex gap-4  shadow-lg px-[20px] py-[80px]  rounded-[12px]  hover:bg-[#4D194D] hover:text-white transition-all hover:scale-105">
            <Lainnya />
            <div>
              <h6 className="font-bold text-[20px]">Lainnya</h6>
              <p>
                Inkubator IT juga menyediakan layanan produk digital lain
                seperti Game, AI/ML, AR/VR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
