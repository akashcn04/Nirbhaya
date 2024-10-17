import React from 'react'
import Banner from "../../public/assets/banner_Project.jpg"

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100" id="about">
      {/* Banner Section */}
      <div className="relative w-full pt-2 overflow-hidden">
        <img
          src={Banner}
          alt="Banner"
          className="w-auto md:w-full h-[150px] md:h-[350px] object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>

      {/* Helpline Information */}
      <div className="max-w-full mx-auto bg-slate-100 py-6 font-semibold">
        <div className="flex flex-col space-y-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-12 md:space-x-60 px-4">
          <div className="flex items-center space-x-5">
            <img
              className="w-9 max-w-full animate-pulse"
              src="https://ncwwomenhelpline.in/front/images/toll.svg"
              alt="Toll Icon"
            />
            <div className="text-sm sm:text-base">
              For any issue related to Violence against Women
              <br />
              <span className="text-purple-500">
                Please Call on Helpline:
                <span className="hover:text-black cursor-pointer transition-colors duration-300 ml-1">
                  7827-170-170
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <img
              className="w-9 max-w-full animate-pulse"
              src="https://ncwwomenhelpline.in/front/images/toll.svg"
              alt="Toll Icon"
            />
            <div className="text-sm sm:text-base">
              For any emergency assistance
              <br />
              <span className="text-purple-500">
                Please call women helpline number:
                <span className="hover:text-black cursor-pointer transition-colors duration-300 ml-1">
                  112
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative max-w-[95%] sm:max-w-[90%] md:max-w-[1100px] mx-auto bg-slate-100 py-8 px-4 sm:px-6 font-semibold pt-10 mt-5 text-pretty space-y-8 border border-gray-300 rounded-lg overflow-hidden shadow-xl">
        {/* Sliding Background Color */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 transform translate-y-full hover:translate-y-0 transition-all duration-500 ease-in-out"></div>

        <div className="text-center relative z-10">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            With NIRBHAYA, we are committed to enhancing public safety, with a
            particular focus on protecting women in public spaces. Our mission
            is to prevent incidents before they happen by leveraging technology
            to detect potential threats and provide real-time alerts to law
            enforcement and nearby individuals. We believe that safety is a
            right, not a privilege, and with our innovative approach, we aim to
            create a safer environment for everyone. Our system integrates
            seamlessly into existing CCTV infrastructures, ensuring that help is
            on the way when it’s needed most.
          </p>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">WHY WE NEED TO DO IT?</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
            Women’s safety remains a significant concern globally, and
            traditional surveillance methods are often reactive, stepping in
            only after an incident has occurred. Our solution is different: it’s
            proactive. We aim to intervene before harm can happen, utilizing
            real-time anomaly detection and rapid alert systems to empower both
            individuals and law enforcement.
          </p>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">OUR VISION</h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mt-4">
            We envision a world where public spaces are safe for all, where
            technology plays a critical role in ensuring security, and where
            preventive measures take precedence over reactive solutions. With
            our project, we are taking the first step toward that future.
          </p>
        </div>
      </div>

      {/* Slogan Section */}
      <div className="flex justify-center mt-12 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 text-center">
          AI Protects Women
        </h2>
      </div>

      <hr className="my-8 mx-auto w-[90%] border-gray-400" />
    </div>
  )
}

export default About
