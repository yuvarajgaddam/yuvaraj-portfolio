import Head from "next/head";

export interface Meta {
  description?: string;
  author?: string;
  siteName?: string;
  coverImage?: string;
  coverImageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
}

type Props = {
  title: string;
  meta?: Meta;
  url?: string;
};

const AppHead: React.FC<Props> = ({
  title,
  url = `${process.env.NEXT_PUBLIC_URL}/`,
  meta,
}) => {
  let author = "Yuvaraj Gaddam";
  let description =
    "Yuvaraj Gaddam is a passionate full-stack developer specializing in React, Next.js, Spring Boot, and AWS. Explore my portfolio to learn more about my skills and projects.";
  let siteName = "Yuvaraj Gaddam Portfolio";
  let type = "website";
  let coverImage: string | undefined;
  let coverImageAlt: string | undefined;
  let ogImage: string | undefined;
  let ogImageAlt: string | undefined;

  if (meta) {
    author = meta.author ? meta.author : author;
    description = meta.description ? meta.description : description;
    siteName = meta.siteName ? meta.siteName : siteName;
    type = meta.type ? meta.type : type;
    coverImage = meta.coverImage && meta.coverImage;
    coverImageAlt = meta.coverImageAlt && meta.coverImageAlt;
    ogImage = meta.ogImage && meta.ogImage;
    ogImageAlt = meta.ogImageAlt && meta.ogImageAlt;
  }

  let appOgImage = `${process.env.NEXT_PUBLIC_URL}/profilePhoto.png`; // Replace with your actual image path
  let appOgImageAlt = "Yuvaraj Gaddam's Portfolio";

  if (ogImage) {
    appOgImage = ogImage;
  } else if (!ogImage && coverImage) {
    appOgImage = coverImage;
  }

  if (ogImageAlt) {
    appOgImageAlt = ogImageAlt;
  } else if (!ogImageAlt && coverImageAlt) {
    appOgImageAlt = coverImageAlt;
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={appOgImage} />
      <meta property="og:image:alt" content={appOgImageAlt} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={appOgImage} />
      <meta name="twitter:image:alt" content={appOgImageAlt} />
      <link rel="canonical" href={url} />
      <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Yuvaraj Gaddam",
        "url": url,
        "sameAs": [
          "https://www.linkedin.com/in/yuvaraj-gaddam-bba64817a/",
          "https://github.com/yuvarajgaddam",
        ],
        "jobTitle": "Full-Stack Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "DBS Tech"
        },
        "image": appOgImage,
        "description": description
      }),
    }}
  />
    </Head>
  );
};

export default AppHead;