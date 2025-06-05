'use client'
import { Button } from "@mui/material";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Angel infotech LLP - Rajkot ",
      period: "Jun 2024",
      description:
        `Completed a 1-month internship as a React Developer, where I built responsive UI components and transformed Figma designs into functional React code.
Gained hands-on experience in real-world projects, focusing on performance optimization, cross-browser compatibility, and agile collaboration.`,
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Hexagon Infosoft Solutions - Ahmedabad",
      period: "Jan 2025 - Jun 2025",
      description:
        ` Worked as a Full Stack Development Intern at Hexagon Infosoft, building web apps using the MERN stack, MySQL, and secure authentication with JWT & OTP.
Developed RESTful APIs, real-time features with Socket.IO, and enhanced dashboards with UI/UX improvements, validations, and deployment experience.`,
    },
 
  ];

  return (
  <section id="experience" className="py-20 px-4 bg-gradient-to-br from-white to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
        Work Experience
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl w-full">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {exp.title}
              </h3>
              <p className="text-sm text-yellow-500 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3 italic">{exp.period}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <Button variant="outlined" size="small">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
