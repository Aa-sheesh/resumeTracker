import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="h-[90vh] w-100vw flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[40vw] ">
          <div>
            <FileText className="text-[rgb(13,148,136)] h-20 w-20" />
          </div>
          <h1 className="text-4xl font-bold p-4">Resume Tracker</h1>
          <p className="text-gray-600 text-lg text-center pb-2">
            Create professional resumes and track your job applications in one
            place.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
