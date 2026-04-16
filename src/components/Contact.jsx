import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Icon from "./Icon";

export default function Socials() {
    return (
        <div className="flex flex-col gap-4 bg-black text-white px-6 py-12 min-h-screen" id="contact">
            <h1 className="text-4xl font-bold mb-10 text-center">Contact Me!</h1>
            <div className="flex gap-4 text-2xl">
                <Icon icon={FaGithub} href="https://github.com/pranavnagaraji" />
                <Icon icon={FaLinkedin} href="https://linkedin.com/in/pranav-nagaraji" />
                <Icon icon={SiGmail} href="mailto:pranavnagaraji22@gmail.com" />
            </div>
        </div>
    );
}