import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
// import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import SkillsSection from "@/sections/SkillSection";

export const meta = {
  description:
    "Yuvaraj Gaddam is a full-stack developer based in Hyderabad, Telangana. He is passionate about writing codes and developing applications to solve real-life challenges.",
  author: "Yuvaraj Gaddam",
  type: "website",
  // ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  siteName: "Yuvaraj Gaddam",
  imageAlt: "Yuvaraj Gaddam portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Yuvaraj Gaddam - A Full-stack Developer"
        // url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsyellow selection:text-bglight dark:selection:bg-carriyellow dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            {/* <ProjectSection /> */}
            <SkillsSection />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer /> 
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const blogPosts = getAllPosts([
//     "coverImage",
//     "coverImageAlt",
//     "slug",
//     "title",
//     "excerpt",
//     "datetime",
//     "featured",
//   ]);

//   return {
//     props: {
//       blogPosts,
//     },
//   };
// };

export default Home;
