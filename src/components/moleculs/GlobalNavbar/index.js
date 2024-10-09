import Button from "@/components/atoms/Button";
import {
  goToAjukanProyek,
  goToFAQ,
  goToHome,
  goToLayanan,
  goToPortfolio,
  goToTentang,
} from "@/helpers/utils/navigation";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-transparent bg-gradient-to-r from-[#212F45] to-[#4D194D] px-[40px] py-[20px]">
      <div>
        <Image
          onClick={goToHome}
          src="/images/inkubator-it.png"
          alt="inkubator it"
          className="hover:cursor-pointer"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-center gap-2">
        <Button onClick={goToTentang} textButton="Tentang" />
        {/* Tentang */}
        {/* </Button> */}
        <Button onClick={goToLayanan} textButton="Layanan" />
        {/* Layanan
      </Button> */}
        <Button onClick={goToPortfolio} textButton="Portfolio" />
        {/* Portfolio
      </Button> */}
        <Button onClick={goToFAQ} textButton="FAQ" />
        {/* FAQ
      </Button> */}
        <Button
          onClick={goToAjukanProyek}
          textButton="Ajukan Proyek"
          color="bg-[#39968A] text-white"
        />
        {/* Ajukan Proyek
      </Button> */}
      </div>
    </div>
  );
};
export default Navbar;
