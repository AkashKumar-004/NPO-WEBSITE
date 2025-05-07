import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { getservices } from "../API/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Shelter = () => {
  const [shelter,setshelter]=useState([]);
  const navigate=useNavigate();
  const {token,isAdmin}=useSelector((state)=>state.user);
  useEffect(()=>{
    const fetchdata=async()=>{
      const response=await getservices();
      console.log(response);
      const data=Array.isArray(response.data)? response.data:[];
      const filterd=data.filter((data)=>data.category==="Shelter")
      setshelter(filterd);
    }
    fetchdata();
  },[])
  const handleclick=()=>{
    {token || isAdmin ? (
      navigate('/donation')
    ):(
      alert('Login to Continue. 😀' )
    )};
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c2c] to-[#111119] text-white px-6 py-10 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-center mb-10 text-emerald-400">
        Shelter Services
      </h1>
      {shelter.length===0 ? (
        <p className="text-center text-gray-400 text-lg mt-8">
        No shelter services available. Please check back later.
      </p>
      ):(
      <div className="grid gap-8 max-w-5xl mx-auto">
        {shelter.map((foundation, index) => (
          <div
            key={index}
            className="bg-[#1f1f2e] rounded-2xl shadow-xl p-6 space-y-4 hover:shadow-emerald-600/30 transition-shadow"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {foundation.name}
              </h2>
              <p className="text-sm text-gray-400">{foundation.location}</p>
            </div>

            <p className="text-sm text-gray-300">{foundation.description}</p>

            <div className="text-sm text-gray-400 space-y-2 pt-2">
              <p>
                <span className="text-white font-medium">History:</span>{" "}
                {foundation.history}
              </p>
              <p>
                <span className="text-white font-medium">Impact:</span>{" "}
                {foundation.impact}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-700 mt-3 gap-4">
              <a
                href={`mailto:${foundation.contact}`}
                className="flex items-center text-gray-300 hover:text-white text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                {foundation.contact}
              </a>
              <button
                onClick={handleclick}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-2 rounded-xl"
              >
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Shelter;
