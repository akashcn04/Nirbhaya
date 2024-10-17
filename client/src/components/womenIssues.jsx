import React from "react";

function WomenIssues() {
  const issues = [
    {
      title: "Rape / Attempt to Rape",
      img: "https://ncwwomenhelpline.in/front/images/category/attempt_to_rape.svg",
    },
    {
      title: "Acid Attack",
      img: "https://ncwwomenhelpline.in/front/images/category/acid_attack.svg",
    },
    {
      title: "Harassment of Women at Workplace",
      img: "https://ncwwomenhelpline.in/front/images/category/sexual_harassment.svg",
    },
    {
      title: "Sexual Assault",
      img: "https://ncwwomenhelpline.in/front/images/category/sexual_assault.svg",
    },
    {
      title: "Domestic Violence / Dowry Harassment",
      img: "https://ncwwomenhelpline.in/front/images/category/domestic_violence.svg",
    },
  ];

  return (
    <>
      <div className="w-screen bg-slate-100 py-4" id="issues">
        <div className="items-center justify-center mt-8">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
            Women Issues
          </h1>
          <div className="max-w-[1320px] mx-auto h-auto mt-4">
            <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-10 flex-wrap">
              {issues.map((issue, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer p-4 border-2 border-gray-300 rounded-lg w-[160px] sm:w-[180px] md:w-[200px] h-[220px] sm:h-[250px]"
                  onClick={() => alert(`More details about ${issue.title}`)} // Example action
                >
                  <div className="flex-grow flex justify-center items-center">
                    <img
                      src={issue.img}
                      alt={issue.title}
                      className="w-28 sm:w-32 md:w-36 h-auto transition duration-300 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h1 className="text-center text-sm sm:text-md font-semibold hover:text-pink-600">
                      {issue.title}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
      </div>
      <hr className="my-8 mx-auto w-[90%] border-gray-400" />
    </>
  );
}

export default WomenIssues;
