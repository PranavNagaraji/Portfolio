export default function Education({
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