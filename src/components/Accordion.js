import AccordionBody from "./AccordionBody";
import { useState } from "react";
const Accordion = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="w-6/12 mt-4 m-auto bg-gray-50 p-2 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShowItems(!showItems)}
      >
        <span className="font-bold">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems &&
        data?.itemCards?.map((c) => {
          return <AccordionBody key={c?.card?.info?.id} data={c?.card?.info} />;
        })}
    </div>
  );
};

export default Accordion;
