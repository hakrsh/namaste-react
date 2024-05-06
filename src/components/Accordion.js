import AccordionBody from "./AccordionBody";
const Accordion = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="w-6/12 mt-4 m-auto bg-gray-50 p-2 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShowIndex()}
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
