export default function Icon({ icon: IconComp, label, href }) {
    const content = (
        <div className="relative group flex flex-col items-center">

            {/* Icon */}
            <div className="p-3 border border-gray-700 rounded-xl hover:border-white hover:scale-110 transition duration-300 cursor-pointer">
                <IconComp className="w-8 h-8" />
            </div>

            {/* Tooltip */}
            {label && (
                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
                    {label}
                </span>
            )}

        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
}