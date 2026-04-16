import ProjectContainer from "./ProjectContainer";
export default function Projects() {
    return (
        <section className="h-screen flex flex-col gap-2 items-center justify-center bg-black text-white max-w-screen min-h-screen" id="projects">
            <h1 className="text-4xl font-bold">Projects</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <ProjectContainer
                    image="/gathr.png"
                    title="Gathr"
                    description="A scalable marketplace platform with RBAC and real-time features."
                    tech={["Next.js", "Node.js", "Express.js", "PostgreSQL", "Socket.IO", "Clerk.js"]}
                    github="https://github.com/pranav-nagaraji/gathr"
                    live="https://gathr-se.vercel.app"
                />

                <ProjectContainer
                    image="/athletenet.png"
                    title="AthleteNet"
                    description="Full-stack sports platform for athletes, coaches, and clubs with dashboards, team management, bookings, and real-time chat."
                    tech={["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO"]}
                    github="https://github.com/pranav-nagaraji/athletenet"
                    live="https://athletenet.vercel.app/"
                />

                <ProjectContainer
                    title="TaskOps"
                    description="Full-stack service management platform with RBAC, 25+ APIs, OTP auth, workflows, and real-time updates."
                    tech={["React.js", "Node.js", "Express.js", "Oracle DB", "Socket.IO"]}
                    github="https://github.com/PranavNagaraji/TaskOps"
                />

                <ProjectContainer
                    title="Driver Drowsiness Detection System"
                    description="Real-time driver drowsiness detection using a 2-stage pipeline with Haar-based face/eye detection and CNN-based eye-state classification (~20 FPS). Designed a modular pipeline for preprocessing, detection, and classification with scope for alert systems."
                    tech={["Python", "OpenCV", "TensorFlow", "CNN"]}
                    github="https://github.com/PranavNagaraji/DriverDrowsiness"
                />
            </div>
        </section>
    );
}