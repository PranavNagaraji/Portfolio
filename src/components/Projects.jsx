import ProjectContainer from "./ProjectContainer";

export default function Projects() {
    return (
        <section id="projects" className="relative bg-[#050505] min-h-screen pt-32 pb-40 px-6 overflow-hidden">

            {/* Title Section */}
            <div className="max-w-7xl mx-auto w-full mb-16 lg:mb-24 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 px-2 lg:px-8">
                <div className="flex-1">
                    <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#555555] tracking-tighter leading-[0.85] uppercase">
                        Featured <br className="md:hidden" /> Work
                    </h1>
                </div>

                <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-md pb-2">
                    <div className="w-16 md:w-24 h-[2px] bg-white/20 mb-6"></div>
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#888888] leading-snug tracking-tight">
                        A curated selection of my <br />
                        <span className="text-white font-bold">technical projects.</span>
                    </p>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
                <ProjectContainer
                    image="/gathr.png"
                    title="Gathr"
                    description="A scalable marketplace platform with RBAC and real-time features."
                    tech={["Next.js", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "Clerk.js"]}
                    github="https://github.com/pranavnagaraji/gathr"
                    live="https://gathr-se.vercel.app"
                />

                <ProjectContainer
                    image="/athletenet.png"
                    title="AthleteNet"
                    description="Full-stack sports platform for athletes, coaches, and clubs with dashboards, team management, bookings, and real-time chat."
                    tech={["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO"]}
                    github="https://github.com/pranavnagaraji/athletenet"
                    live="https://athletenet.vercel.app/"
                />

                <ProjectContainer
                    title="TaskOps"
                    description="Full-stack service management platform with RBAC, 25+ APIs, OTP auth, workflows, and real-time updates."
                    tech={["React.js", "Node.js", "Express.js", "Oracle DB", "Socket.IO"]}
                    github="https://github.com/PranavNagaraji/TaskOps"
                />

                <ProjectContainer
                    title="Driver Drowsiness Config"
                    description="Real-time driver drowsiness detection using a 2-stage pipeline with Haar-based face/eye detection and CNN-based eye-state classification (~20 FPS). Designed a modular pipeline for preprocessing, detection, and classification with scope for alert systems."
                    tech={["Python", "OpenCV", "TensorFlow", "CNN"]}
                    github="https://github.com/PranavNagaraji/DriverDrowsiness"
                />
            </div>

            {/* Background elements */}
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
        </section>
    );
}