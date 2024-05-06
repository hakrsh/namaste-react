import { SWIGGY_CDN } from "../utils/constants";
const AccordionBody = ({ data }) => {
  return (
    <div className="flex justify-between p-2 m-2 border-b-2 border-gray-200">
      <div className="w-9/12 p-1">
        <p>{data?.name}</p>
        <p>₹{(data?.price || data?.defaultPrice) / 100}</p>
        <p className="text-xs">{data?.description}</p>
      </div>
      <div className="w-3/12 p-1">
        <button className="bg-gray-400 rounded-lg ml-1 p-1 absolute">
          Add
        </button>
        <img className="h-28 w-full" src={SWIGGY_CDN + data?.imageId}></img>
      </div>
    </div>
  );
};

export default AccordionBody;
