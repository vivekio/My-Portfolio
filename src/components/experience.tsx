// 'use client'
// import { Button } from "@mui/material";

// export default function Experience() {
//   const experiences = [
//     {
//       id: 1,
//       title: "Frontend Developer Intern",
//       company: "Angel infotech LLP - Rajkot ",
//       period: "Jun 2024",
//       description:
//         `Completed a 1-month internship as a React Developer, where I built responsive UI components and transformed Figma designs into functional React code.
// Gained hands-on experience in real-world projects, focusing on performance optimization, cross-browser compatibility, and agile collaboration.`,
//     },
//     {
//       id: 2,
//       title: "Full Stack Developer Intern",
//       company: "Hexagon Infosoft Solutions - Ahmedabad",
//       period: "Jan 2025 - Jun 2025",
//       description:
//         ` Worked as a Full Stack Development Intern at Hexagon Infosoft, building web apps using the MERN stack, MySQL, and secure authentication with JWT & OTP.
// Developed RESTful APIs, real-time features with Socket.IO, and enhanced dashboards with UI/UX improvements, validations, and deployment experience.`,
//     },

//   ];

//   return (
//   <section id="experience" className="py-20 px-4 bg-gradient-to-br from-white to-gray-100">
//       <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
//         Work Experience
//       </h2>

//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full">
//           {experiences.map((exp) => (
//             <div
//               key={exp.id}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-1">
//                 {exp.title}
//               </h3>
//               <p className="text-sm text-yellow-500 font-medium">{exp.company}</p>
//               <p className="text-sm text-gray-400 mb-3 italic">{exp.period}</p>
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 {exp.description}
//               </p>
//               <Button variant="outlined" size="small">
//                 Learn More
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

export default function Experience() {
  const experiences = [
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Actowiz Solutions Pvt. Ltd  - Ahmedabad",
      period: "Jun 2025 - Present",
      description: `Creating high-performance MERN applications by building intuitive, dynamic UIs, integrating third-party APIs, and managing complex data workflows with optimized MongoDB queries.`,
      level: "step-2",
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Hexagon Infosoft Solutions - Ahmedabad",
      period: "Jan 2025 - Jun 2025",
      description: `Worked as a Full Stack Development Intern using MERN stack, MySQL, JWT, OTP auth, Socket.IO, and REST APIs.`,
      level: "step-2",
    },
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Angel Infotech LLP - Rajkot",
      period: "Jun 2024",
      description: `Completed a 1-month internship as a React Developer, where I built responsive UI components and transformed Figma designs into functional React code.`,
      level: "step-1",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[3px] h-full bg-gray-300"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative mb-20 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Dot in center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-1">
              <div className="w-5 h-5 bg-yellow-500 rounded-full border-4 border-white shadow-md"></div>
            </div>

            {/* Card */}
            <div
              className={`w-[45%] p-6 bg-white rounded-xl shadow-md border border-gray-200`}
            >
              <p className="text-sm font-bold text-yellow-500">{exp.period}</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-1">
                {exp.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">{exp.company}</p>

              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
