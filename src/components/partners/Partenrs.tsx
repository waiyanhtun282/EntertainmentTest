import Card from "../common/card/Card"

const Partenrs = () => {
    const partnerArr =Array(8).fill('');
  return (
    <section className=" container mx-auto py-3">
      <h1 className="lg:text-3xl font-semibold text-center lg:py-5 py-3 text-2xl">Our Partners</h1>
      <div className=" lg:my-3    grid lg:grid-cols-4   lg:gap-3 grid-cols-2  my-2  md:justify-items-center  gap-2 ">

      {
        partnerArr?.map((part,index) =>(
            <Card className=" md:w-[300px] md:h-[150px]   w-[150px] h-[150px]     rounded-sm bg-gray-200" key={part+index}/>
        ))
      }
        
      </div>
    </section>
  )
}

export default Partenrs
