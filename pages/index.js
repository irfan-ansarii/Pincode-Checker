import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Data from "../components/Data";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (pincode) => {
    setLoading(true);
    setError(false);

    if (pincode.length == 6) {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const json = await res.json();

      if (json[0].Status.toLowerCase() == "success") {
        setData(json[0].PostOffice);
        localStorage.setItem("pincode", pincode);
      } else {
        setError("Invalid Pincode");
        localStorage.removeItem("pincode");
      }
    } else {
      setError("Invalid Pincode");
    }

    setLoading(false);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setError("");
    if (!isNaN(value)) {
      setInputVal(value);
    }
    if (value.length == 6) {
      fetchData(value);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    const localPin = localStorage.getItem("pincode");
    if (localPin) {
      setInputVal(localPin);
      fetchData(localPin);
    }
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-900 py-20">
      <div className="text-white max-w-[500px] mx-auto">
        <Card inputVal={inputVal} handleInput={handleInput} error={error} />
        {loading && <Loader />}
        {data && <Data data={data} />}
      </div>
    </div>
  );
}
