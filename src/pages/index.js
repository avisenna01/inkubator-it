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

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Layout>
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
        <Image
          src="/images/wave.svg"
          width="1440"
          height="262"
          className="absolute mt-[-100px] z-[-50] min-w-screen"
        />
        <section class="section-2 mt-[220px] px-[72px] mb-">
          <h1 className="text-[36px] mb-[10px] font-bold underline decoration-solid  decoration-[20px] decoration-[#ECAF23] decoration-skip-ink-none underline-offset-[-6px]">
            Layanan Kami
          </h1>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex gap-4 shadow-lg px-[20px] py-[80px] rounded-[12px]">
              <Website />
              <div>
                <h6 className="font-bold text-[20px]">Website</h6>
                <p>
                  Inkubator IT menyediakan layanan pembuatan website / situs
                  untuk kebutuhan bisnis, lomba, maupun pribadi.
                </p>
              </div>
            </div>
            <div className="flex gap-4  shadow-lg px-[20px] py-[80px]  rounded-[12px]">
              <Mobile />
              <div>
                <h6 className="font-bold text-[20px]">Mobile</h6>
                <p>
                  Inkubator IT menyediakan layanan pembuatan aplikasi berbasis
                  mobile.
                </p>
              </div>
            </div>
            <div className="flex gap-4  shadow-lg px-[20px] py-[80px]  rounded-[12px]">
              <Desktop />
              <div>
                <h6 className="font-bold text-[20px]">Desktop</h6>
                <p>
                  Inkubator IT menyediakan layanan pembuatan aplikasi berbasis
                  dekstop yang dapat dibuka dari perangkat PC / laptop.
                </p>
              </div>
            </div>
            <div className="flex gap-4  shadow-lg px-[20px] py-[80px]  rounded-[12px]">
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
        <section className="section-3 mt-[128px]">
          <p className="text-[48px] font-bold">Bagaimana Cara Kerjanya?</p>
        </section>
        <section className="section-4 text-center">
          <p className="text-[48px] font-bold">
            Ingin Membuat Proyek Bersama Kami?
          </p>
          <Button
            textButton="Ajukan Projek"
            color="text-white bg-gradient-to-r from-[#212F45] to-[#4D194D]"
          />
        </section>
      </Layout>
    </>
  );
}
