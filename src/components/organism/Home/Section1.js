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

const Section1 = () => {
  return (
    <>
      <section className="section-1 bg-gradient-to-r from-[#212F45] to-[#4D194D] px-[100px] pt-[108px]">
        <div className="flex items-center text-white">
          <div>
            <p>Selamat datang di</p>
            <h2 className="text-[56px]  underline decoration-solid  decoration-[20px] decoration-[#ECAF23] decoration-skip-ink-none underline-offset-[-6px]">
              Inkubator IT
            </h2>
            <p>
              Ingin idemu menjadi nyata? Butuh bantuan untuk mengerjakan tugas
              dalam bentuk perangkat lunak? Kamu datang ke tempat yang tepat!
            </p>
            <Button
              onClick={goToAjukanProyek}
              textButton="Ajukan Proyek"
              color="bg-[#39968A] text-white hover:bg-[#ECAF23] transition-all"
            />
          </div>
          <div>
            <Image
              src="/images/laptop-mobile.svg"
              alt="laptop mobile"
              className="hover:cursor-pointer"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div>
          <h1 className="text-right text-white text-[36px] underline decoration-solid  decoration-[20px] decoration-[#ECAF23] decoration-skip-ink-none underline-offset-[-6px]">
            Kenapa Inkubator IT
          </h1>
          <div className="text-white">
            <ul className="inline-flex mt-[76px] items-center gap-4">
              <Thumbs />
              <li>
                <h6 className="font-bold">Terpercaya</h6>
                <p>
                  IIT sudah menjadi layanan penyedia jasa pembuatan perangkat
                  lunak yang dipercaya oleh ratusan klien.
                </p>
              </li>
              <Dollar />
              <li>
                <h6 className="font-bold">Terjangkau</h6>
                <p>
                  Harga jasa yang ditawarkan IIT lebih terjangkau dibanding di
                  tempat lain.
                </p>
              </li>
              <Shield />
              <li>
                <h6 className="font-bold">Terjamin</h6>
                <p>
                  IIT menjamin proyek yang kamu ajukan akan selesai sesuai
                  dengan kesepakatan.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
