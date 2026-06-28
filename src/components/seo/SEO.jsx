import { Helmet } from "react-helmet-async";

const SITE = {
  name: "Shahbaz Ansari",
  url: "https://shahbazansari.pro",
  image: "https://shahbazansari.pro/og-image.png",
  author: "Shahbaz Ansari",

  title: "Full Stack Web Developer",

  description:
    "Professional Full Stack Web Developer specializing in React, Next.js, MERN Stack, Node.js, modern websites, dashboards, APIs, and high-performance web applications.",

  keywords:
    "Shahbaz Ansari, Full Stack Web Developer, React Developer, MERN Stack Developer, Next.js Developer, JavaScript Developer, Node.js Developer, Portfolio, Frontend Developer, Backend Developer",
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
  const pageTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | ${SITE.title}`;

  const canonical =
    path === "/"
      ? SITE.url
      : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: SITE.author,

    url: SITE.url,

    image: SITE.image,

    jobTitle: "Full Stack Web Developer",

    description: SITE.description,

    sameAs: [
      "https://www.instagram.com/shahbaz_ansari_dev/",
      "https://www.linkedin.com/in/shahbaz-web-developer",
      "https://github.com/shahbazansari-dev",
    ],

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
      "REST API",
      "Responsive Web Design",
    ],
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />

      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE.author} />

      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />

      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta
        property="og:image:alt"
        content="Shahbaz Ansari - Full Stack Web Developer"
      />

      <meta property="og:locale" content="en_US" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      <meta
        name="twitter:image:alt"
        content="Shahbaz Ansari - Full Stack Web Developer"
      />

      <meta name="twitter:url" content={canonical} />

      {/* JSON-LD */}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
