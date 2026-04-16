"use client";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-black text-white px-6 py-20"
        >
            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-16">
                Education
            </h1>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">

                {/* Vertical Line */}
                <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-800"></div>

                {/* Items */}
                <Education
                    year="2023 - 2027"
                    title="B.Tech in Computer Science"
                    place="IIITDM Kurnool"
                    grade="8.6 CGPA"
                    description="Strong foundation..."
                    image="/education/iiitdmk.jpg"
                />

                <Education
                    year="2021 - 2023"
                    title="Higher Secondary Education"
                    place="Sishya School of Hosur"
                    grade="92.2%"
                    description="Focused on PCM..."
                    image="/education/sishya.jpeg"
                />

                <Education
                    year="2011 - 2021"
                    title="High School Education"
                    place="Asian Christian Academy of India"
                    grade="95.34%"
                    description="Strong academic foundation..."
                    image="/education/aca.jpeg"
                />

            </div>
        </section>
    );
}

function Education({
    year,
    title,
    place,
    description,
    grade,
    image,
}) {
    return (
        <div className="relative pl-12 mb-12 group">

            {/* Timeline Dot */}
            <div className="absolute left-[6px] top-6 w-3 h-3 bg-white rounded-full border-2 border-black group-hover:scale-125 transition"></div>

            {/* Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-white/5 hover:border-white hover:shadow-md hover:shadow-white/10 transition duration-300">

                {/* Image (TOP + BIGGER) */}
                {image && (
                    <div className="mb-4">
                        <img
                            src={image}
                            alt={place}
                            className="w-16 h-16 object-cover rounded-md border border-gray-700"
                        />
                    </div>
                )}

                {/* Content */}
                <div>

                    {/* Title + Year */}
                    <div className="flex justify-between items-start mb-1">
                        <h2 className="text-lg font-semibold">
                            {title}
                        </h2>
                        <span className="text-xs text-gray-500">
                            {year}
                        </span>
                    </div>

                    {/* Place */}
                    <p className="text-gray-300 text-sm">{place}</p>

                    {/* Grade */}
                    {grade && (
                        <p className="text-xs text-gray-400 mt-1">
                            Grade: {grade}
                        </p>
                    )}

                    {/* Description */}
                    {description && (
                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                            {description}
                        </p>
                    )}

                </div>
            </div>
        </div>
    );
}