// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ResultPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   console.log("RESULT FROM STATE:", location.state);
//   // 🔥 FIX: fallback from localStorage
//   const [result, setResult] = useState(
//     location.state?.result || localStorage.getItem("career")
//   );

//   // 🔥 Save to localStorage
//   useEffect(() => {
//     if (location.state?.result) {
//       console.log("Saving result:", location.state.result);
//       localStorage.setItem("career", location.state.result);
//       setResult(location.state.result);
//     }
//   }, [location.state]);

//   const careerData = {
//     "Business Analyst": {
//       description: "Analyze business problems and provide solutions using data.",
//       skills: ["SQL", "Excel", "Communication"],
//       roadmap: ["Learn SQL", "Learn Excel", "Practice case studies"]
//     },
//     "Software Engineer": {
//       description: "Build software applications and systems.",
//       skills: ["Java", "DSA", "React"],
//       roadmap: ["Learn Java", "Build Projects", "Practice DSA"]
//     }
//   };

//   // ❌ अगर कुछ भी नहीं मिला
//   if (!result) {
//     return (
//       <div className="p-10 text-center text-red-500 font-semibold">
//         ❌ No result found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">

//       <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-xl">

//         <h2 className="text-2xl font-bold text-indigo-600 mb-4 text-center">
//           🎯 Your Career: {result}
//         </h2>

//         <p className="text-gray-600 mb-4 text-center">
//           {careerData[result]?.description || "Career description not available"}
//         </p>

//         <div className="mb-4">
//           <h3 className="font-semibold">🧠 Skills Required:</h3>
//           <ul className="list-disc ml-6">
//             {careerData[result]?.skills?.map((skill, i) => (
//               <li key={i}>{skill}</li>
//             )) || <li>No data</li>}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold">🚀 Roadmap:</h3>
//           <ul className="list-decimal ml-6">
//             {careerData[result]?.roadmap?.map((step, i) => (
//               <li key={i}>{step}</li>
//             )) || <li>No data</li>}
//           </ul>
//         </div>

//         <button
//           onClick={() => navigate("/dashboard")}
//           className="mt-6 w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition"
//         >
//           Go to Dashboard
//         </button>

//       </div>
//     </div>
//   );
// }

// export default ResultPage;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function ResultPage() {
//   const navigate = useNavigate();

//   const [top3, setTop3] = useState([]);

//   // ✅ Load from localStorage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("top3"));

//     console.log("TOP3 DATA:", data); // debug

//     if (data) {
//       setTop3(data);
//     }
//   }, []);

//   if (!top3 || top3.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-lg text-gray-500">No result found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">

//       <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-xl">

//         {/* TITLE */}
//         <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
//           🎯 Your Top Career Matches
//         </h2>

//         {/* TOP 3 LIST */}
//         <div className="space-y-4">

//           {top3.map((item, i) => (
//             <div
//               key={i}
//               className="p-4 bg-gray-50 rounded-xl shadow-sm border flex justify-between items-center"
//             >

//               <div>
//                 <h3 className="text-lg font-semibold">
//                   {i + 1}. {item.career}
//                 </h3>

//                 <p className="text-sm text-gray-500">
//                   Match Score: {(item.score * 100).toFixed(1)}%
//                 </p>
//               </div>

//               {/* PROGRESS BAR */}
//               <div className="w-24 bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
//                   style={{ width: `${item.score * 100}%` }}
//                 />
//               </div>

//             </div>
//           ))}

//         </div>

//         {/* BUTTON */}
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="mt-6 w-full py-2 bg-indigo-500 text-white rounded-xl"
//         >
//           Go to Dashboard
//         </button>

//       </div>
//     </div>
//   );
// }

// export default ResultPage;


import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [top3, setTop3] = useState([]);

  useEffect(() => {
    // 🔥 पहले navigation से data लो
    let data = location.state?.top3;

    // 🔥 अगर navigation से नहीं आया → localStorage से लो
    if (!data) {
      const stored = localStorage.getItem("top3");
      if (stored) {
        data = JSON.parse(stored);
      }
    }

    console.log("FINAL TOP3:", data);

    if (data && data.length > 0) {
      setTop3(data);

      // 🔥 First career dashboard के लिए save करो
      localStorage.setItem("career", data[0].career);
    }
  }, [location.state]);

  // ❌ अगर कुछ नहीं मिला
  if (!top3 || top3.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">
          ❌ No result found (check localStorage or API)
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">

      <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold text-indigo-600 text-center mb-6">
          🎯 Your Top Career Matches
        </h2>

        <div className="space-y-4">

          {top3.map((item, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-xl shadow-sm border flex justify-between items-center"
            >

              <div>
                <h3 className="text-lg font-semibold">
                  {i + 1}. {item.career}
                </h3>

                <p className="text-sm text-gray-500">
                  Match Score: {(item.score * 100).toFixed(1)}%
                </p>
              </div>

              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                  style={{ width: `${item.score * 100}%` }}
                />
              </div>

            </div>
          ))}

        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 w-full py-2 bg-indigo-500 text-white rounded-xl"
        >
          Go to Dashboard
        </button>

      </div>
    </div>
  );
}

export default ResultPage;