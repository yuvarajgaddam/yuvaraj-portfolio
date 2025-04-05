import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import heroSection from "../public/heroSerctionImg.png";
import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {

  return (
    <div
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section id="about" className="about-section">
        <RoughNotationGroup>
          <div className="text-center">
            <h2 className="section-heading dark:text-carriyellow">About Me</h2>
          </div>
          <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]">
              <div className="relative w-72">
                <svg
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsyellow dark:fill-carriyellow absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </svg>

                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl">
                  <Image
                    src={heroSection}
                    width={1700}
                    height={1790}
                    loading="lazy"
                    alt="Yuvaraj Gaddam profile picture"
                    className="rounded-md"
                  />
                </div>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsyellow dark:fill-carriyellow absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </svg>
              </div>
            </div>

            <p className="col-start-1 col-end-3 row-start-2 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-4 lg:mt-auto about-intro">
              I have 3 years of experience in web application development,
              working across both frontend and backend technologies.
              I've also gained hands-on experience with AWS, building and deploying scalable applications.
            </p>

            <div
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-start"
            >
              <p className="edu-bg my-4  dark:text-carriyellow text-lg">Here is my work experience.</p>
              {workExperience.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
              <p className="edu-bg my-4  dark:text-carriyellow text-lg">Here is my educational background.</p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div>
          </div>
        </RoughNotationGroup>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "B.Tech in Computing Secience and Engineering",
    subTitle: "MallaReddy Engineering College | 2018 - 2022",
    list: [
      "Graduated with CGPA 8.4",
    ],
  }
];

const workExperience = [
  {
    id: 1,
    title: "Application Developer at DBS Tech",
    subTitle: "2022 - present",
    list: [
      "Developed and maintained web applications using Spring, Node.js, ReactJs and NextJs",
      "Worked with AWS services to deploy and manage applications.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  }
];

export default AboutSection;
