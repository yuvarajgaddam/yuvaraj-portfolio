import React, { useEffect } from 'react'
import { gsap } from 'gsap';


const skills = {
  backend: [
    { name: 'Java', img: 'https://www.svgrepo.com/show/452234/java.svg' },
    { name: 'Spring', img: 'https://www.svgrepo.com/show/376350/spring.svg' },
    { name: 'Node.js', img: 'https://www.svgrepo.com/show/439238/nodejs.svg' },
    { name: 'MySQL', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968313.png' },
    { name: 'GraphQl', img: 'https://www.svgrepo.com/show/353834/graphql.svg' },
    { name: 'Redis', img: 'https://www.svgrepo.com/show/354272/redis.svg' },

  ],
  frontend: [
    { name: 'HTML', img: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png' },
    { name: 'React', img: 'https://cdn-icons-png.flaticon.com/128/875/875209.png' },
    { name: 'Next.js', img: 'https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75' },
    { name: 'JavaScript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
    { name: 'Typescript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png' },
    { name: 'CSS', img: 'https://www.svgrepo.com/show/452185/css-3.svg' },
  ],
  other: [
    { name: 'AWS', img: 'https://icon2.cleanpng.com/20180804/yko/41f7da7415a28aaafcbc8881a89de8ad.webp' },
    { name: 'Nginx', img: 'https://www.svgrepo.com/show/354115/nginx.svg' },
    { name: 'Docker', img: 'https://www.svgrepo.com/show/448221/docker.svg' },
    { name: 'Jenkins', img: 'https://www.svgrepo.com/show/373699/jenkins.svg' },
    { name: 'Appdynamics', img: 'https://connect.redhat.com/s3api/prod-s3api/appdynamics_logo.png' },
    { name: 'Git', img: 'https://cdn-icons-png.flaticon.com/128/15466/15466163.png' },
  ],
};

const SkillSection = () => {
  return (
    <section id="skills" className="skills-section pt-20 pb-12 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-carriyellow">My Technical Skills</h2>

      {/* Backend Skills */}
      <div className="skills-category mb-12">
        <h3 className="text-2xl font-semibold mb-4 dark:text-carriyellow">Backend</h3>
        <div className="grid grid-cols-4 gap-6">
          {skills.backend.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-item text-center transform -translate-y-2 transition duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgba(255,223,0,0.6)] rounded-lg ${index === 4 ? "col-start-2 col-span-1" : index === 5 ? "col-start-3 col-span-1" : ""
                }`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend Skills */}
      <div className="skills-category mb-12">
        <h3 className="text-2xl font-semibold mb-4 dark:text-carriyellow">Frontend</h3>
        <div className="grid grid-cols-4 gap-6">
          {skills.frontend.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-item text-center transform -translate-y-2 transition duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgba(255,223,0,0.6)] rounded-lg  ${index === 4 ? "col-start-2 col-span-1" : index === 5 ? "col-start-3 col-span-1" : ""
                }`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Technologies */}
      <div className="skills-category mb-12">
        <h3 className="text-2xl font-semibold mb-4 dark:text-carriyellow">Other Technologies</h3>
        <div className="grid grid-cols-4 gap-6">
          {skills.other.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-item text-center transform -translate-y-2 transition duration-300 hover:scale-110 hover:shadow-[0_4px_15px_rgba(255,223,0,0.6)] rounded-lg  ${index === 4 ? "col-start-2 col-span-1" : index === 5 ? "col-start-3 col-span-1" : ""
                }`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-2"
              />
              <p className="text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;