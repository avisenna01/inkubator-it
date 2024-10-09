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
import Section1 from "@/components/organism/Home/Section1";
import Section2 from "@/components/organism/Home/Section2";
import Section3 from "@/components/organism/Home/Section3";
import Section4 from "@/components/organism/Home/Section4";

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
        <Section1 />
        <Image
          src="/images/wave.svg"
          width="1440"
          height="262"
          className="absolute mt-[-100px] z-[-50] min-w-screen"
        />
        <Section2 />
        <Section3 />
        <Section4 />
      </Layout>
    </>
  );
}
