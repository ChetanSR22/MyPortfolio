import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import avtar from "../public/avtar.png"; // Ensure the file extension matches your actual image file
import { FaBeer, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function MyComponent() {
  return <FaBeer color="white" />;
}


const skills = {
  "Core Technologies": [
    "JavaScript",
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "Tools & Platforms": ["Git", "GitHub", "Vercel", "Webpack", "NPM", "Yarn"],
  "Backend & Databases": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Supabase",
  ],
  "Testing & Quality": ["Jest", "React Testing Library", "ESLint", "Prettier"],
  "UI & Design": ["Figma", "Framer Motion", "Headless UI", "Radix UI"],
  Hobbies: ["Video Editing", "Coding", "Singing"],
};

// import backg from "./public/backg.avif"

export default function Home() {
  return (
    <>
      <div>
        <main className="px-5 bg-gray-950 text-amber-100 ">
          <section className="min-h-162.5">
            <nav className="py-5 mb-12 flex justify-between">
              <h6 className=" text-md bg-gradient-to-r from-gray-500 to-red-500 text-white px-4 py-2 border-none rounded-lg font-mono">
                Coded By Chetan
              </h6>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8 font-mono"
                    href="https://github.com/ChetanSR22"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </nav>
            <div className="h-40 text-center pt-10">
              <h2 className="font-mono text-5xl py-2 text-white-600 hover:text-purple-500 shadow-2xs md:;text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                {" "}
                CH3TAN{" "}
              </h2>
              <h3 className="font-mono md:text-3xl"> Web Devloper</h3>
              <p className="font-mono text-md leading-8 md:text-xl">
                Hello there! This is me Chetan, I am a Web-Developer.
              </p>
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <Image src={avtar} alt="Image" width={500} height={500} />
            </div>
          </section>

          <section>
            <div>
              <h3 className="font-mono text-3xl py-1  hover:text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Want to make websites? Then this note is for you :
              </h3>
              <p className="font-mono text-md py-2 leading-5 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Hello there! Connect with me by clicking the social media icons at the end of the page.
              </p>
            </div>
            <div>
              <h1 className="flex text-3xl font-mono py-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                Some of my skills are as Follows:
              </h1>
              <section
                id="skills"
                className="py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl"
              >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                          {category}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <li
                              key={skill}
                              className="bg-white dark:bg-gray-800 text-sm px-3 py-1 rounded-full shadow text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
        <footer className="bg-gray-950">
          {" "}
          <div className="p-10 flex justify-center gap-5  h-20  ">
            <a href="https://x.com/its_chetan747">
              <FaTwitter
                className="size-7 hover:cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                color="white"
              ></FaTwitter>
            </a>
            <a href="https://www.instagram.com/chetannn_3/?__pwa=1 ">
              <FaInstagram
                className="size-7 hover:cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                color="white"
              ></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/chetan-wankhade-142697361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin
                className="size-7 hover:cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                color="white"
              ></FaLinkedin>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
