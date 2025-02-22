"use client";

import Layout from "@/app/components/Layout";

export default function About() {
  const timelineData = [
    {
      year: "2017",
      title: "Hello, World!",
      description:
        "Wrote my first line of code, marking the beginning of my journey into programming. This moment sparked my passion for technology and problem-solving.",
    },
    {
      year: "2018",
      title: "Starting My Degree in Computer Science",
      description:
        "Began my formal education in Computer Science, diving deep into algorithms, data structures, and software development fundamentals.",
    },
    {
      year: "2020",
      title: "First Internship Experience",
      description:
        "Landed my first internship, where I gained hands-on experience in software development, teamwork, and project management. This was a crucial step in applying theoretical knowledge to real-world problems.",
    },
    {
      year: "2020",
      title: "My First Professional Software",
      description:
        "Developed my first professional-grade software, a milestone that solidified my confidence in building scalable and efficient solutions.",
    },
    {
      year: "2021",
      title: "Graduated in Computer Science",
      description:
        "Completed my degree with a focus on software development and artificial intelligence. Graduation marked the culmination of years of hard work and learning.",
    },
    {
      year: "2022",
      title: "Working Remotely",
      description:
        "Transitioned to remote work, adapting to new workflows and tools while contributing to distributed teams and delivering high-quality software.",
    },
    {
      year: "2024",
      title: "Starting Personal Projects",
      description:
        "Began dedicating time to personal projects, exploring new technologies, and building innovative solutions to expand my skill set and creativity.",
    },
    {
      year: "2025",
      title: "Launching My Own Company",
      description:
        "Founded my own tech company, aiming to create cutting-edge solutions and make a meaningful impact in the industry. This marks the beginning of a new chapter in my career.",
    },
  ];

  const nextStepsData = [
    {
      year: "2025",
      title: "Expanding My Company",
      description:
        "Focus on scaling my tech company, exploring new markets, and building a strong team to deliver innovative solutions.",
    },
    {
      year: "2025",
      title: "First certification",
      description:
        "Obtained my first certification in Linux Essentials, showcasing my expertise in Linux systems and open-source technologies.",
    },
    {
      year: "...",
      title: "...",
      description:
        "...",
    },
  ];

  return (
    <Layout>
      <section className="flex flex-col md:flex-row justify-between items-center max-w-6xl mt-20">
        <div className="text-left max-w-149 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          <p className="text-lg text-gray-400 mt-6 font-mono">
            Hello! My name is Matheus de Paulo Oliveira, I’m 24 years old, and
            I’m a Java Developer with a strong focus on problem-solving through
            technology. I hold a degree in Computer Science from Anhanguera
            University and have 5 years of experience in backend development.
          </p>

          <p className="text-lg text-gray-400 mt-6 font-mono">
            Throughout my career, I’ve had the opportunity to collaborate on a
            variety of projects, including process automation, RESTful API
            development, and desktop application creation. My expertise lies in
            backend development, with strong proficiency in programming
            languages such as Java, Python, JavaScript, and ShellScript. I’m
            also skilled in frameworks like Spring Boot, Hibernate, React, and
            React Native for mobile applications. I have hands-on experience
            with relational databases like MySQL and PostgreSQL, as well as
            non-relational databases such as MongoDB. Additionally, I’m
            knowledgeable in DevOps and infrastructure tools, including Linux,
            Docker, RabbitMQ, and AWS Cloud.
          </p>

          <p className="text-lg text-gray-400 mt-6 font-mono">
            As a native Brazilian, I’m fluent in Portuguese and have an
            upper-intermediate level of English (B2). I’m also currently
            learning Georgian (A1) as a personal challenge. At the moment, I’m
            focused on enhancing my skills in messaging systems like RabbitMQ
            and Apache Kafka, as well as deepening my knowledge of AWS and
            Docker. If you like what you see and are interested in
            collaborating, feel free to reach out—I’d love to connect and create
            something amazing together!{" "}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mt-20 w-full max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
          My Journey
        </h3>
        <div className="relative">
          <div className="absolute h-full border-l-2 border-blue-400 left-1/2 transform -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center mb-8`}
            >
              <div className="w-1/2 px-4">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
              <div className="w-1/2 px-4 text-center">
                <span className="text-2xl font-bold text-purple-400">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps Timeline Section */}
      <section className="mt-20 w-full max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
          Next Steps
        </h3>
        <div className="relative">
          <div className="absolute h-full border-l-2 border-blue-400 left-1/2 transform -translate-x-1/2"></div>
          {nextStepsData.map((item, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center mb-8`}
            >
              <div className="w-1/2 px-4">
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
              <div className="w-1/2 px-4 text-center">
                <span className="text-2xl font-bold text-purple-400">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
