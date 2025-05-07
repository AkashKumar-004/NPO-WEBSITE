import React from 'react';
import { useNavigate } from 'react-router-dom';
import Welcome from './Welcome';
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans">
      <section className="flex flex-col justify-center items-center text-center px-4 py-24">
        <h1 className="text-5xl font-extrabold mb-6 text-cyan-400">“Be the Change You Wish to See in the World.”</h1>
       <div className="">
        
        <Welcome/>  
        </div>
        <p className="text-xl text-gray-200 max-w-2xl">
          Join hands with us in building a better tomorrow. Every small effort creates a ripple of hope for someone in need.
        </p>
      </section>
      <section className="bg-white bg-opacity-10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl mx-auto max-w-6xl text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-300 mb-4">OUR VISION</h2>
        <p className="text-lg font-medium text-gray-100">
          To create a society where every individual—regardless of background—has access to education, health, and opportunity. 
          We aim to bridge gaps and build empowered communities through sustainable development.
        </p>
      </section>
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-extrabold text-pink-400 mb-6">You Can Make a Difference</h2>
        <p className="text-lg text-gray-200 max-w-xl mx-auto mb-8">
          Your support empowers children, women, and families to lead better lives. Every contribution counts—your kindness lights the way.
        </p>
        <button
          onClick={() => navigate('/services')}
          className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-semibold text-lg shadow-md hover:scale-105 transition"
        >
          Donate Now
        </button>
      </section>
      <section className="bg-white bg-opacity-10 backdrop-blur-2xl rounded-3xl p-10 shadow-xl max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-300 mb-4">ABOUT US</h2>
        <p className="text-lg text-gray-200 mb-6">
          We are a non-profit organization driven by compassion and innovation. Our mission is to uplift lives through grassroots action, partnerships, and sustainable programs.
        </p>
        <blockquote className="italic text-indigo-300 text-xl max-w-2xl mx-auto mb-6">
          “Alone we can do so little; together we can do so much.” — Helen Keller
        </blockquote>
        <button
          onClick={() => navigate('/about')}
          className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full text-white font-medium hover:scale-105 transition"
        >
          Learn More
        </button>
      </section>
    </div>
    </>
  );
};

export default Home;
