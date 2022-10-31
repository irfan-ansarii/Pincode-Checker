import React from "react";

const Card = ({ inputVal, handleInput, error }) => {
  return (
    <div className="bg-slate-700/50 py-8 px-4 rounded">
      <h1 className="uppercase text-center mb-4">Check Pincode</h1>
      <div className="relative">
        <input
          value={inputVal}
          onChange={handleInput}
          type="text"
          maxLength="6"
          className={`py-3 px-4 outline-none border transition duration-300 w-full bg-slate-900 rounded ${
            error ? "border-red-500" : "border-slate-800"
          }`}
          placeholder="Enter pincode to check details"
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};

export default Card;
