import React from "react";
import { useRef, useState } from "react";
import axios from "axios";

function working() {
  return (
    <>
      <div className="w-screen h-[700px] pt-2 bg-slate-100 " id="model">
        <h1 className="text-black text-center text-3xl font-semibold mt-1">
          Heres How Our Model Work !
        </h1>

        <div className=" mt-8 max-w-[1320px] mx-auto">
          <h1 className="text-2xl text-justify">
            1. <b>CCTV Integration:</b> The system is integrated with existing
            CCTV cameras, continuously monitoring public spaces for any unusual
            or harmful activity.
            <br />
            <br />
            2. <b>Live Video Analysis:</b> The AI model analyzes the live video
            feed in real-time, using action recognition and anomaly detection
            techniques to identify behaviors that could indicate danger, such as
            physical violence or harassment.
            <br />
            <br />
            3. <b>Anomaly Detection:</b> When the model detects abnormal
            behavior, it flags it as a potential threat, triggering the next
            step.
            <br />
            <br />
            4. <b>Real-time Alerts:</b> Once a potential threat is identified,
            the system sends immediate alerts to the nearest police station and
            nearby individuals, providing the location for quick response.
            <br />
            <br />
            5. <b>Proactive Intervention:</b> Unlike traditional surveillance
            that acts after an incident, this model aims to prevent harm by
            enabling real-time intervention before an incident escalates.
          </h1>
        </div>

        <div className="pt-20 flex justify-center">
          <button
            className="relative inline-flex items-center justify-center px-5 py-3 font-bold text-red-600 border-4 border-red-700 rounded-lg bg-black group overflow-hidden shadow-lg transition duration-500 ease-in-out hover:bg-red-800 hover:text-black"
          >
            <span className="absolute inset-0 w-full h-full bg-red-900 opacity-0 group-hover:opacity-100 transition duration-700"></span>
            <span className="relative z-10 transition duration-300 ease-in-out group-hover:scale-110 group-hover:text-red-200">
              Upload & Detect Anomaly
            </span>
            <span className="absolute bottom-0 w-full h-1 bg-red-600 transition-all duration-500 ease-in-out group-hover:h-full group-hover:bg-black"></span>
          </button>
        </div>
      </div>
      <hr className="my-8 mx-auto w-[90%] border-gray-400" />
    </>
  );
}

export default working;
