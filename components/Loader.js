const Loader = () => {
  return (
    <div className="bg-slate-700/50 py-4 px-4 rounded mt-4">
      <div className="flex flex-col space-y-2 animate-pulse">
        <div className="w-11/12 h-3 bg-slate-600 rounded"></div>
        <div className="w-10/12 h-2 bg-slate-600 rounded"></div>
        <div className="w-9/12 h-2 bg-slate-600 rounded"></div>
      </div>
    </div>
  );
};

export default Loader;
