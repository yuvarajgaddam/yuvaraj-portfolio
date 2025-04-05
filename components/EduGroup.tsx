import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  edu: {
    id: number;
    title: string;
    subTitle: string;
    list: string[];
  };
};

const EduGroup: React.FC<Props> = ({ edu }) => {
  
  return (
    <div className="edu-group mb-4">
      <div className="overflow-hidden">
        <h3
          className={`edu-heading text-marrsyellow dark:text-carriyellow text-lg font-medium`}
        >
          {edu.title}
        </h3>
      </div>
      <div className="overflow-hidden">
        <span className={`edu-info text-slate-500 dark:text-slate-200 italic`}>
          {edu.subTitle}
        </span>
      </div>
      <ul
        role="list"
        className=" marker:text-marrsyellow dark:marker:text-carriyellow list-disc pl-6 space-y-1 mt-1"
      >
        {edu.list.map((li) => (
          <li key={li} className={`edu-list`}>
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EduGroup;
