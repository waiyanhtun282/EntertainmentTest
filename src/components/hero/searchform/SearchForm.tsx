import Buttton from "../../common/button/Buttton";
import Input from "../../common/input/Input";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './searchform.css';

const SearchForm = () => {
  return (
    <article className="searchForm">
      <div className=" parentInputForm ">
        <BsSearch   className=" lg:text-[25px] md:text-[20px] text-gray-500  text-[20px]" />
        <div className=" w-[100%]">
          <Input
            className="inputForm"
            placeholder="Search For artist,event ,and funs"
          />
        </div>
      </div>
      {/* for gene */}
      <div className=" gene">
        <h3>Gene</h3>
        <MdOutlineKeyboardArrowDown size={22} className="cursor-pointer" />
      </div>
      <Buttton className=" btn">Search</Buttton>
    </article>
  );
};

export default SearchForm;
