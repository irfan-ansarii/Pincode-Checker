const Data = ({ data }) => {
  return (
    <div className="overflow-y-auto h-[500px] mt-4">
      {data?.map((val, index) => (
        <div
          className="bg-slate-700/30 py-6 px-4 rounded mb-4 last:mb-0"
          key={index}
        >
          <div className="flex justify-between items-center">
            <div className="pb-2 uppercase">name</div>
            <div className="pb-2 uppercase">{val.Name}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="pb-2 uppercase">district</div>
            <div className="pb-2 uppercase">{val.District}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="uppercase">state</div>
            <div className="uppercase">{val.State}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
