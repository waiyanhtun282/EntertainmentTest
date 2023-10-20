import React from "react";
import Card from "../common/card/Card";
import FigureCaption from "../common/card/FigureCaption";
import "./trendNow.css";

const TrendNow = () => {
  const trendsArr = Array(3).fill("");
  return (
    <section className=" container mx-auto py-3 md:py-2">
      {/* for heading */}
      <h1 className="trendH1">Trending Now</h1>
      {/* for card   */}
      <div className="lg:flex lg:justify-between  grid md:grid-cols-2 gap-3  md:justify-items-center ">
        {trendsArr?.map((index, trend) => (
          <div key={index + trend} className="   ">
            <Card className=" bg-gray-200 lg:w-[350px] lg:h-[300px] rounded-sm w-[300px] h-[250px]" />
            <FigureCaption
              figCaption=" lg:my-5 my-3"
              h3=" lg:text-[20px]  font-medium  p-2 bg-gray-200 max-w-[150px]    text-center  rounded-tr-[40px] rounded-bl-[40px] text-[18px]    "
              figName="Lorem ipsum"
            >
              <h3 className="max-w-sm lg:my-5 text-[17px] my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                natus doloribus architecto sed?
              </h3>

              <p className=" text-[17px]">loream,lorem , 12.00am</p>
            </FigureCaption>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendNow;
