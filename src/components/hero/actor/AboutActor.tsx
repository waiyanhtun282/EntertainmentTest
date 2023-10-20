import Card from "../../common/card/Card";
import FigureCaption from "../../common/card/FigureCaption";
import "./actor.css";

const AboutActor = () => {
  const arrActor = Array(3).fill("");
  return (
    <div className=" container mx-auto">
      <div className="    md:flex   md:justify-between ">
        {arrActor?.map((act, index) => (
          <div className="mainActorCard" key={index}>
            <Card className=" actorCard" />
            <FigureCaption
              figCaption=" text-center"
              h3="text-black  text-[18px] font-medium  my-3 md:my-2 "
              figName="Lorem"
            >
              <p className="max-w-xs md:text-[15px] md:max-w-[200px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias animi possimus soluta?
              </p>
            </FigureCaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutActor;
