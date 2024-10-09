import Button from "@/components/atoms/Button";
import React from "react";

const Carousel = () => {
  return (
    <>
      {" "}
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 1</p>
          <p>Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button textButton="Selanjutnya" color="bg-[#39968B] text-white" />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 2</p>
          <p>Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button textButton="Selanjutnya" color="bg-[#39968B] text-white" />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 3</p>
          <p>Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button textButton="Selanjutnya" color="bg-[#39968B] text-white" />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 4</p>
          <p>Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button textButton="Selanjutnya" color="bg-[#39968B] text-white" />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 5</p>
          <p>Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button textButton="Selanjutnya" color="bg-[#39968B] text-white" />
        </div>
        <div className="carousel-item flex flex-col bg-white w-3/4 p-12">
          <p>Step 6</p>
          <p>Mengisi form request</p>
          <p>
            Pertama isi form pengajuan proyek dan jelaskan detail dari proyek
            yang ingin kamu ajukan.
          </p>
          <Button textButton="Selanjutnya" color="bg-[#39968B] text-white" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
