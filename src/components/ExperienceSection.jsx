import Experience from "@/components/Experience";

export default function ExperienceSection() {
    return (
        <section id="experience" className="min-h-screen bg-black text-white px-6 py-12">

            <h1 className="text-4xl font-bold mb-10 text-center">
                Experience
            </h1>

            <div className="flex flex-col gap-6 max-w-3xl mx-auto">

                <Experience
                    year="May 2025 – Jul 2025"
                    role="Full Stack Developer Intern"
                    company="Codebrahma Tech Solutions"
                    description="Built a secure LMS admin dashboard using Next.js with RBAC for 3+ roles and permission-based access. Improved performance by 30% (Lighthouse 95) via SSR and optimizations, and developed 20+ reusable UI components with MUI and Framer Motion."
                    tech={["Next.js", "React.js", "Express.js", "Node.js", "UI/UX", "Database Development"]}
                />
            </div>
        </section>
    );
}