import { User2 } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
        <div className="w-full flex flex-col items-center py-16 px-4">
          <div className="w-full max-w-6xl bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl">
            <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-12">VISION</h2>
            <div className="flex flex-col md:flex-row justify-between gap-8 text-center">
              <div className="flex-1 p-6 bg-gradient-to-br from-indigo-700 to-purple-700 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                Work as a catalyst in bringing sustainable change in the lives of lesser privileged children and families with a life-cycle approach of development.
              </div>
              <div className="flex-1 p-6 bg-gradient-to-br from-indigo-700 to-purple-700 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                Enable the civil society across the world to engage proactively in the change process through the philosophy of civic driven change.
              </div>
              <div className="flex-1 p-6 bg-gradient-to-br from-indigo-700 to-purple-700 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                Adopt the highest standards of governance to emerge as a leading knowledge and technology-driven, innovative, and scalable development institution.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-16 px-4">
          <div className="max-w-5xl w-full bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl text-center">
            <h2 className="text-4xl font-extrabold text-purple-400 mb-6">MISSION</h2>
            <p className="text-lg font-medium leading-loose text-gray-100">
              Foundation aims to empower underprivileged children, youth, and women through education, healthcare, and livelihood programs.
              It links corporate competitiveness with social initiatives while promoting good governance and civic driven change.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center py-16 px-4">
          <div className="max-w-6xl w-full bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl">
            <h2 className="text-4xl font-extrabold text-teal-400 mb-10">HOW WE WORK</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Social Venture Philanthropy</h3>
                <p className="text-lg font-medium text-gray-100">
                  SVP is an innovative model based on venture capital. The foundation identifies and implements development projects through credible organizations, focusing on scalability and sustainability while fostering leadership and accountability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Outreach</h3>
                <p className="text-lg font-medium text-gray-100">
                  The Foundation implements development interventions directly, ensuring engagement for sustained outcomes, particularly in remote rural areas, partnering with local stakeholders for greater impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-16 px-4">
          <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl text-center">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-10">CREATOR</h2>
            <div className="flex justify-center gap-6">
              {['AKASHKUMAR S'].map((name, idx) => (
                <div key={idx} className="flex flex-col items-center bg-gradient-to-br from-purple-700 to-indigo-800 p-6 rounded-xl shadow-xl transform hover:scale-110 transition-all duration-300">
                  <User2 className="w-16 h-16 mb-4 text-white" />
                  <div className="text-xl font-semibold text-white">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
