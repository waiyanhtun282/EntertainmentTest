import Card from "../common/card/Card";
import FigureCaption from "../common/card/FigureCaption";
import SearchForm from "./searchform/SearchForm";
import "./hero.css";
import AboutActor from "./actor/AboutActor";

const figureCaptionArr = [
  {
   id:11,
   caption:"Member Exclusie",
  },
  {
    id: 12,
    caption: "Concerts",
  },
  {
    id: 13,
    caption: "Arts",
  },
  {
    id: 14,
    caption: "Sports",
  },
  {
    id: 15,
    caption: "Funs",
  },
  {
    id: 16,
    caption: "Nights",
  },
];

const Hero = () => {
  return (
    <main className="  mb-10  md:mt-[100px] md:mb-6  mt-[80px]">
      <header className=" container mx-auto">
        {/* for search form */}
       <SearchForm />
        {/* for image card */}
        <section className="cardMain ">
          {/* <aside className="relative ">
            <Card className=" bg-gray-200 w-[300px] h-[410px]   rounded-sm">
              <FigureCaption
                figCaption="absolute top-[50%] left-[20%]  "
                h3="text-black  text-[20px] font-medium"
                figName="Member Exclusie"
              ></FigureCaption>
              </Card>
          
          </aside> */}

          {/* <div className="cardTwo"> */}
            {figureCaptionArr?.map((figc, index) => (
              <div key={figc.id + index} className={`relative ${index ==0 ? 'lg:row-span-2  ' :''}`}>
                <Card
                
                className={` ${index ===0 ? 'lg:h-full' : ''} bg-gray-200  lg:w-[300px]  rounded-sm  md:w-[200px] md:h-[200px] w-[160px] h-[160px]`}
              />
                <FigureCaption
                  figCaption="absolute md:top-[48%] md:left-[30%] top-[40%] left-[30%]"
                  h3="text-black  lg:text-[20px] text-[17px] font-medium"
                  figName={figc.caption}
                ></FigureCaption>
              </div>
              
            ))}
          {/* </div> */}
        </section>
      </header>
      {/* for hero2 actor */}
      <section className="bg-gray-200 py-3">
       <AboutActor />
      </section>
    </main>
  );
};

export default Hero;
