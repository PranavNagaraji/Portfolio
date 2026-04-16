export default function ProjectContainer({
    title,
    description,
    tech = [],
    github,
    live,
    image,
}) {
    return (
        <div className="border border-gray-700 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-white hover:scale-[1.02] transition duration-300">

            {/* Image */}
            {image && (
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                </div>
            )}

            <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>

                {/* Description */}
                <p className="text-gray-400 mb-4">{description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, index) => (
                        <span
                            key={index}
                            className="text-xs px-3 py-1 bg-white/10 border border-gray-600 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            className="text-sm border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                        >
                            GitHub
                        </a>
                    )}

                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            className="text-sm bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                        >
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}