import { Helmet } from "react-helmet-async";

const SITE = {
  name: "Shahbaz Ansari",
  url: "https://www.shahbazansari.pro",
  image: "https://www.shahbazansari.pro/og-image.png",
  author: "Shahbaz Ansari",

  title: "Full-Stack Web Developer",

  description:
    "Full-Stack Web Developer from Pakistan specializing in React, Next.js, Node.js, responsive websites, and custom web applications.",

  keywords:
    "Shahbaz Ansari, Full-Stack Web Developer, React Developer, Next.js Developer, Node.js Developer, MERN Stack Developer, Web Developer Pakistan",
};

const SEO = ({
  title,
  description = SITE.description,
  keywords = SITE.keywords,
  path = "/",
  image = SITE.image,
  type = "website",
  noIndex = false,
}) => {
  // If a complete title is provided, use it exactly as written.
  // This prevents duplicate "Shahbaz Ansari" at the end.
  const pageTitle = title || `${SITE.name} | ${SITE.title}`;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const canonical =
    normalizedPath === "/" ? SITE.url : `${SITE.url}${normalizedPath}`;

  const robots = noIndex ? "noindex,nofollow" : "index,follow";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.author,
    url: SITE.url,
    image: SITE.image,
    jobTitle: SITE.title,
    description: SITE.description,

    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Frontend Development",
      "Backend Development",
      "REST APIs",
      "Responsive Web Design",
      "Web Application Development",
    ],

    sameAs: [
      "https://www.instagram.com/shahbaz_ansari_dev/",
      "https://www.linkedin.com/in/shahbaz-web-developer",
      "https://github.com/shahbazansari-dev",
    ],
  };

  return (
    <Helmet prioritizeSeoTags>
      {/* Basic SEO */}
      <html lang="en" />

      <title>{pageTitle}</title>

      <meta name="description" content={description} />

      {/* Kept for compatibility, but Google does not use this for ranking */}
      <meta name="keywords" content={keywords} />

      <meta name="author" content={SITE.author} />

      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />

      <meta property="og:site_name" content={SITE.name} />

      <meta property="og:title" content={pageTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta property="og:image" content={image} />

      <meta property="og:image:secure_url" content={image} />

      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta
        property="og:image:alt"
        content="Shahbaz Ansari - Full-Stack Web Developer"
      />

      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      <meta
        name="twitter:image:alt"
        content="Shahbaz Ansari - Full-Stack Web Developer"
      />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;