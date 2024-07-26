import React, { useState, useEffect } from "react";
import "./App.css";
import { Rate } from "antd";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  
  const [selectedStar, setSelectedStar] = useState<number>(Number(localStorage.getItem('rating')) || 4);

  useEffect(() => {
    localStorage.setItem('rating', selectedStar.toString());
  }, [selectedStar]);

  const handleClickStar = (value: number) => {
    setSelectedStar(value);
    toast.success(`You rated ${value} stars!`);
  };  

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  return (
    <>
      <div className="flex justify-center items-center h-[700px] bg-gray-100">
        <div className="w-[500px] h-[250px] bg-white text-center flex items-center justify-center rounded-[15px] shadow-md">
          <div>
            <h1 className="text-xl font-bold mb-4">
              How many stars would you give to our <br /> online Code Editor
            </h1>
            <Rate
              tooltips={desc}
              allowHalf
              value={selectedStar}
              onChange={handleClickStar}
              className="custom-rate mb-4"
            />
            <p className="text-gray-700">
              Excellent! We're thrilled to hear you had such a positive experience.
              <br />
              Thank you for choosing our platform.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
