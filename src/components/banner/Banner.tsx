import Card from "../common/card/Card";
import FigureCaption from "../common/card/FigureCaption";
import "./banner.css";

const Banner = () => {
  const banner = Array(3).fill("");
  return (
    <article className=" container mx-auto  py-3 md:py-2 md:z-10">
      <div className="relative ">
        <Card className="bannerCard" />
        <FigureCaption
          figCaption="bannerFigCaption "
          h3="bannerH3"
          figName="Banner"
        ></FigureCaption>
        <div className="bannerSmall  ">
          {banner.map((index, ban) => (
            <p key={index+ban} className=" bannerP"></p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Banner;
