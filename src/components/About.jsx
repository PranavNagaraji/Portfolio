import Education from "./Education";

export default function About() {
    return (
        <section className="min-h-screen max-w-screen bg-black text-white flex flex-col items-center justify-center gap-6" id="about">

            <h1 className="text-4xl font-bold mb-6">Education</h1>
            <Education
                year="2023 - 2027"
                title="B.Tech in Computer Science"
                place="IIITDM Kurnool"
                grade="8.6"
                description="Strong foundation in Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and Socket Programming, with practical implementation experience."
            />
            <Education
                year="2021 - 2023"
                title="Higher Secondary Education"
                grade="92.2%"
                place="Sishya Institute of Education"
                description="Focused on Physics, Chemistry, and Mathematics with strong analytical problem-solving and conceptual understanding."
            />
            <Education
                year="2011 - 2021"
                title="High School Education"
                grade="95.34%"
                place="Asian Christian High School"
                description="Built a strong academic foundation with consistent performance and active participation in academics and extracurricular activities."
            />
        </section>
    );
}