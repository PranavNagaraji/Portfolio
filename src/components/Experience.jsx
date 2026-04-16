export default function Experience({
    year,
    role,
    company,
    description,
    tech = [],
}) {
    return (
        <div className="border border-gray-700 rounded-xl p-5 bg-white/5 backdrop-blur-md hover:border-white transition duration-300" id="experience">
            {/* Year */}
            <p className="text-sm text-gray-400 mb-1">{year}</p>
            {/* Role */}
            <h2 className="text-xl font-semibold">{role}</h2>
            {/* Company */}
            <p className="text-gray-300 mb-2">{company}</p>
            {/* Description */}
            {description && (
                <p className="text-gray-400 text-sm mb-3">
                    {description}
                </p>
            )}
            {/* Tech Stack */}
            {tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 bg-white/10 border border-gray-600 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}