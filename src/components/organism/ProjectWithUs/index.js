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

const ProjectWithUs = () => {
  return (
    <>
      <section className="section-4 text-center px-[72px] mb-[100px] flex flex-col gap-4 items-center">
        <p className="text-[48px] font-bold w-1/2 text-center m-auto">
          Ingin Membuat Proyek Bersama Kami?
        </p>
        <Button
          textButton="Ajukan Projek"
          color="text-white bg-gradient-to-r from-[#212F45] to-[#4D194D]"
          size="w-[170px]"
        />
      </section>
    </>
  );
};

export default ProjectWithUs;
