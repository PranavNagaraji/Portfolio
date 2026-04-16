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
                place="Sishya School of Hosur"
                description="Focused on Physics, Chemistry, and Mathematics with strong analytical problem-solving and conceptual understanding."
            />
            <Education
                year="2011 - 2021"
                title="High School Education"
                grade="95.34%"
                place="Asian Christian Academy of India"
                description="Built a strong academic foundation with consistent performance and active participation in academics and extracurricular activities."
            />
        </section>
    );
}

function Education({
    year,
    title,
    place,
    description,
    grade
}) {
    return (
        <div className="border border-gray-700 rounded-xl p-5 bg-white/5 backdrop-blur-md hover:border-white transition duration-300">
            {/* Year */}
            <p className="text-sm text-gray-400 mb-1">{year}</p>
            {/* Title */}
            <h2 className="text-xl font-semibold">{title}</h2>
            {/* GRADE */}
            {grade && (
                <p className="text-gray-400 mt-2 text-sm">
                    grade: {grade}
                </p>
            )}
            {/* Place */}
            <p className="text-gray-300">{place}</p>
            {/* Description */}
            {description && (
                <p className="text-gray-400 mt-2 text-sm">
                    {description}
                </p>
            )}
        </div>
    );
}