import Title from "@/components/atoms/Title";
import Layout from "@/components/templates/Layout";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <Layout>
        <div className="pt-[40px]">
          <Title className="text-center" color="text-black">
            Portfolio
          </Title>
          <div className="flex justify-center my-[40px]">
            <iframe
              src="https://docs.google.com/document/d/1mSmqjZFBDHW9dXd-CGfu9odwFOwu2FFup7s_YSsaiHU/preview"
              width="700"
              height="600"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PortfolioPage;
