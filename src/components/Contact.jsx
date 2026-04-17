import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import Icon from "./Icon";

export default function Socials() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
        >
            {/* Title */}
            <h1 className="text-4xl font-bold mb-6 text-center">
                Contact Me
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 mb-10 text-center max-w-md">
                Feel free to reach out for collaborations, projects, or just to connect.
            </p>

            {/* Icons */}
            <div className="flex gap-6">

                <div className="flex flex-col items-center group">
                    <Icon icon={FaGithub} href="https://github.com/pranavnagaraji" />
                    <p className="text-xs mt-2 text-gray-400 group-hover:text-white transition">
                        GitHub
                    </p>
                </div>

                <div className="flex flex-col items-center group">
                    <Icon icon={FaLinkedin} href="https://linkedin.com/in/pranav-nagaraji" />
                    <p className="text-xs mt-2 text-gray-400 group-hover:text-white transition">
                        LinkedIn
                    </p>
                </div>

                <div className="flex flex-col items-center group">
                    <Icon icon={SiGmail} href="mailto:pranavnagaraji22@gmail.com" />
                    <p className="text-xs mt-2 text-gray-400 group-hover:text-white transition">
                        Gmail
                    </p>
                </div>

                <div className="flex flex-col items-center group">
                    <Icon icon={SiLeetcode} href="https://leetcode.com/u/PranavNagaraji/" />
                    <p className="text-xs mt-2 text-gray-400 group-hover:text-white transition">
                        Leetcode
                    </p>
                </div>

            </div>

            {/* Divider */}
            <div className="w-full max-w-md mt-16 border-t border-gray-800"></div>

            {/* Footer */}
            <p className="text-gray-500 text-sm mt-6 text-center">
                © {new Date().getFullYear()} Pranav. All rights reserved.
            </p>
        </section>
    );
}