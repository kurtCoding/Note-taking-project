import React from "react";
import data from "../data/data.json";


export default function AboutUs() {


    return (
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
          {data.map((data, index) => (
            <div key={index} className="mb-8 bg-white shadow-md rounded-lg p-6">
                          <div className="flex items-center mb-4">
            <img
              src={data.profilePic}
              alt={`Profile of ${data.name}`}
              className="w-12 h-12 rounded-full mr-4"
            />
              <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
              </div>
              <p className="text-gray-700 mb-2">Title: {data.title}</p>
              <p className="text-gray-700 mb-2">Skills: {data.skills}</p>
              <p className="text-gray-700">Bio: {data.bio}</p>
            </div>
          ))}
        </div>
      );
    }



















//   }



