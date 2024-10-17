import React, { useRef, useState } from "react";

function Working() {
  const [loading, setLoading] = useState(false); // For showing loading animation
  const [message, setMessage] = useState("");   // For result messages
  const [videoSrc, setVideoSrc] = useState(""); // To store video source URL
  const [detectReady, setDetectReady] = useState(false); // To toggle button to 'Detect Anomaly'
  const [alertMessage, setAlertMessage] = useState(""); // To store alert message
  const [showAlert, setShowAlert] = useState(false); // To manage visibility of alert
  const fileInputRef = useRef(null);            // Ref for file input

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
      const videoURL = URL.createObjectURL(file); // Create URL for the video file

      setLoading(true); // Show loading animation
      setMessage("");   // Reset message
      setVideoSrc("");  // Reset video source
      setDetectReady(false); // Reset detect button status
      setAlertMessage(""); // Reset alert message
      setShowAlert(false); // Hide alert message

      // Simulate video processing delay of 10 seconds
      setTimeout(() => {
        setLoading(false); // Stop loading animation
        setVideoSrc(videoURL); // Show the uploaded video
        setDetectReady(true); // Enable the detect button
        setMessage("Video uploaded successfully and ready for detection!");
      }, 10000); // 10 second delay for video processing
    }
  };

  // Function to trigger file input
  const handleClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle "Detect Anomaly" action
  const handleDetectAnomaly = () => {
    if (detectReady) {
      const currentTime = new Date().toLocaleString(); // Get current time
      const location = "Current Location (simulated)"; // Simulate location

      // Set alert message to be displayed on the screen
      setAlertMessage(`Alert! Anomaly detected at ${location} on ${currentTime}`);
      setShowAlert(true); // Show the alert

      // Reset after showing alert without delay
      setVideoSrc(""); // Remove the video
      setDetectReady(false); // Reset detect button status
      setMessage(""); // Clear message
    }
  };

  // Function to handle alert dismissal
  const handleDismissAlert = () => {
    setShowAlert(false); // Hide the alert
    setAlertMessage(""); // Clear alert message
  };

  return (
    <>
      <div className="w-screen pt-2 bg-slate-100" id="model">
        <h1 className="text-black text-center text-3xl font-semibold mt-1">
          Here's How Our Model Works!
        </h1>

        <div className="mt-8 max-w-[1320px] mx-auto">
          <h1 className="text-2xl text-justify">
            1. <b>CCTV Integration:</b> The system is integrated with existing
            CCTV cameras, continuously monitoring public spaces for any unusual
            or harmful activity.
            <br /><br />
            2. <b>Live Video Analysis:</b> The AI model analyzes the live video
            feed in real-time, using action recognition and anomaly detection
            techniques to identify behaviors that could indicate danger, such as
            physical violence or harassment.
            <br /><br />
            3. <b>Anomaly Detection:</b> When the model detects abnormal
            behavior, it flags it as a potential threat, triggering the next
            step.
            <br /><br />
            4. <b>Real-time Alerts:</b> Once a potential threat is identified,
            the system sends immediate alerts to the nearest police station and
            nearby individuals, providing the location for quick response.
            <br /><br />
            5. <b>Proactive Intervention:</b> Unlike traditional surveillance
            that acts after an incident, this model aims to prevent harm by
            enabling real-time intervention before an incident escalates.
          </h1>
        </div>

        <div className="pt-20 flex justify-center">
          <button
            onClick={detectReady ? handleDetectAnomaly : handleClick} // Trigger file input or Detect action
            className={`relative inline-flex items-center justify-center px-5 py-3 font-bold border-4 rounded-lg 
              ${detectReady ? "bg-green-600 border-green-700 text-white" : "text-red-600 border-red-700 bg-black"}
              group overflow-hidden shadow-lg transition duration-500 ease-in-out hover:bg-red-800 hover:text-black`}
          >
            <span className="absolute inset-0 w-full h-full bg-red-900 opacity-0 group-hover:opacity-100 transition duration-700"></span>
            <span className="relative z-10 transition duration-300 ease-in-out group-hover:scale-110 group-hover:text-red-200">
              {loading
                ? "Processing Video..."
                : detectReady
                ? "Detect Anomaly"
                : "Upload & Detect Anomaly"}
            </span>
            <span className="absolute bottom-0 w-full h-1 bg-red-600 transition-all duration-500 ease-in-out group-hover:h-full group-hover:bg-black"></span>
          </button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept="video/*"
          />
        </div>

        {/* Display loading animation during upload */}
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="loader"></div>
          </div>
        )}

        {/* Display message after upload */}
        {message && (
          <div className="text-center text-lg font-semibold text-green-500 mt-4">
            {message}
          </div>
        )}

        {/* Display alert message when anomaly is detected */}
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-red-600 mb-4">{alertMessage}</h2>
              <button
                onClick={handleDismissAlert}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Show uploaded video */}
        {videoSrc && (
          <div className="mt-4 flex justify-center">
            <div className="w-full max-w-[600px] h-auto p-4">
              <video controls width="100%" src={videoSrc} className="mx-auto"></video>
            </div>
          </div>
        )}
      </div>
      <hr className="my-8 mx-auto w-[90%] border-gray-400" />

      {/* CSS for the loader */}
      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

export default Working;
