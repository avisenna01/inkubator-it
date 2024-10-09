import Button from "@/components/atoms/Button";
import React from "react";

const Carousel = () => {
  return (
    <>
      {" "}
      <div className="flex overflow-x-scroll border-2 border-black rounded carousel carousel-center bg-neutral rounded-box max-w-lg space-x-4 p-4">
        <div className="border carousel-item flex flex-col bg-white p-12">
          <p>Step 1</p>
          <p className="text-[30px]">Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button
            className="mt-[16px]"
            textButton="Selanjutnya"
            color="bg-[#39968B] text-white"
          />
        </div>
        <div className="border carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 2</p>
          <p className="text-[30px]">Diskusi dengan Klien</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button
            className="mt-[16px]"
            textButton="Selanjutnya"
            color="bg-[#39968B] text-white"
          />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 3</p>
          <p className="text-[30px]">Evaluasi Kelayakan Proyek</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button
            className="mt-[16px]"
            textButton="Selanjutnya"
            color="bg-[#39968B] text-white"
          />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 4</p>
          <p className="text-[30px]">Pencarian Programmer</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button
            className="mt-[16px]"
            textButton="Selanjutnya"
            color="bg-[#39968B] text-white"
          />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 5</p>
          <p className="text-[30px]">Pengesahan MoU</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button
            className="mt-[16px]"
            textButton="Selanjutnya"
            color="bg-[#39968B] text-white"
          />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 6</p>
          <p className="text-[30px]">Pengerjaan Proyek</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button
            className="mt-[16px]"
            textButton="Selanjutnya"
            color="bg-[#39968B] text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
