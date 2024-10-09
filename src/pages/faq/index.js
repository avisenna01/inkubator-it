import Title from "@/components/atoms/Title";
import QA from "@/components/moleculs/QA";
import React from "react";

const FAQPage = () => {
  return (
    <div>
      <Title color="text-black">Frequently Asked Question</Title>
      <QA
        q="Bagaimana cara mengajukan request project?"
        a="Request project dapat dilakukan dengan mengisi form pada halaman Request di link berikut"
      />
      <QA />
      <QA />
    </div>
  );
};

export default FAQPage;
