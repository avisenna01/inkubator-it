import Instagram from "@/components/atoms/Icons/Instagram";
import Line from "@/components/atoms/Icons/Line";
import Linkedin from "@/components/atoms/Icons/Linkedin";
import Whatsapp from "@/components/atoms/Icons/Whatsapp";
import {
  goToFAQ,
  goToHome,
  goToLayanan,
  goToPortfolio,
} from "@/helpers/utils/navigation";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <Image
        src="/images/footer-wave.svg"
        alt="footer wave"
        width="1440"
        height="162"
        className="mb-[-40px]"
      />
      <div className="flex justify-around bg-[#ECAF23]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Image
              onClick={goToHome}
              src="/images/inkubator-it-black.png"
              alt="inkubator it"
              className="hover:cursor-pointer row-span-2 bg-white rounded-[50%] p-2 w-auto"
              width={80}
              height={80}
            />
            <div className="flex flex-col">
              <p className="text-[30px] font-bold">Inkubator IT</p>
              <p className="text-[16px]">Your IT-Based Solution</p>
            </div>
          </div>
          <div>
            <p className="text-[24px] font-bold">Sosial Media Kami</p>
          </div>
          <div className="flex items-center gap-4">
            <Instagram />
            <Linkedin />
            <Line />
            <Whatsapp />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div>
            <h6 className="text-[24px] font-bold">Hubungi Kami</h6>
            <p className="w-[384px]">
              Sekretariat HMIF Gedung Benny Subianto (Labtek V), Institut
              Teknologi Bandung, Jalan Ganesha No. 10, 40132
            </p>
          </div>
          <div>
            <h6 className="text-[24px] font-bold">Navigasi</h6>
            <p className="cursor-pointer" onClick={goToHome}>
              Tentang
            </p>
            <p className="cursor-pointer" onClick={goToLayanan}>
              Layanan
            </p>
            <p className="cursor-pointer" onClick={goToPortfolio}>
              Portfolio
            </p>
            <p className="cursor-pointer" onClick={goToFAQ}>
              FAQ
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-[16px] bg-[#ECAF23]">
          © Inkubator IT HMIF 2021. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
