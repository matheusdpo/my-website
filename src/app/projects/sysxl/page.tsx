"use client";

import Layout from "@/app/components/Layout";
import Link from "next/link";
import Image from "next/image";
import sysxlScreenshot from "@/assets/1_picture.jpeg"; // Exemplo de screenshot do projeto

export default function SysXLPage() {
  return (
    <Layout>
      {/* Project Documentation */}
      <section className="flex flex-col justify-between items-center w-full max-w-6xl mt-20">
        <div className="text-left max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            SysXL - Project Documentation
          </h2>
          <p className="text-lg text-gray-400 mt-6 font-mono">
            SysXL is a system built in Java and JavaFX to capture information
            from a database via JDBC and return it in Excel using Apache POI.
            This project was developed to streamline data extraction and
            reporting processes for Sociedade Extrativa Dolomia Ltda ®.
          </p>

          {/* Screenshot do Projeto */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Project Screenshot
            </h3>
            <div className="mt-6">
              <Image
                src={sysxlScreenshot}
                alt="SysXL Screenshot"
                width={800}
                height={450}
                className="rounded-lg border-2 border-blue-400"
              />
              <p className="text-gray-400 mt-2 text-sm font-mono">
                Figura 1: Interface do SysXL para seleção de dados e geração de
                relatórios.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Project Details
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-4 font-mono">
              <li>Built with Java and JavaFX for the front-end.</li>
              <li>Uses JDBC to connect to the database.</li>
              <li>Apache POI library for generating Excel files.</li>
              <li>Designed to handle large datasets efficiently.</li>
              <li>Customizable reports based on user input.</li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Technologies Used
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-4 font-mono">
              <li>Java</li>
              <li>JavaFX</li>
              <li>JDBC</li>
              <li>Apache POI</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Exemplo de Código */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Code Example
            </h3>
            <div className="mt-6 bg-gray-800 p-6 rounded-lg">
              <pre className="text-gray-400 font-mono overflow-x-auto">
                <code>
                  {`// Exemplo de código Java para conexão com o banco de dados
public Connection connectToDatabase() {
    Connection conn = null;
    try {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "root";
        String password = "password";
        conn = DriverManager.getConnection(url, user, password);
        System.out.println("Connected to the database!");
    } catch (SQLException e) {
        e.printStackTrace();
    }
    return conn;
}`}
                </code>
              </pre>
            </div>
            <p className="text-gray-400 mt-2 text-sm font-mono">
              Código 1: Método para conexão com o banco de dados MySQL usando
              JDBC.
            </p>
          </div>

          {/* Challenges and Solutions */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Challenges and Solutions
            </h3>
            <p className="text-gray-400 mt-4 font-mono">
              One of the main challenges was handling large datasets without
              compromising performance. To address this, we implemented batch
              processing and optimized database queries. Additionally, we used
              Apache POIs streaming API to generate Excel files efficiently.
            </p>
          </div>

          {/* Future Improvements */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Future Improvements
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-4 font-mono">
              <li>
                Add support for more database types (e.g., PostgreSQL, MongoDB).
              </li>
              <li>Implement a web-based interface using Spring Boot.</li>
              <li>Add user authentication and role-based access control.</li>
              <li>Integrate with cloud storage for saving reports.</li>
            </ul>
          </div>

          {/* Back to Projects */}
          <div className="mt-12">
            <Link
              href="/#projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition font-mono"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
