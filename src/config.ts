/** Social links for About, Person JSON-LD `sameAs`, and header. */
export const PUBLIC_PROFILES = {
  linkedIn: "https://mayumiphoebe.com/",
  x: "https://mayumiphoebe.com/",
} as const;

export const SITE = {
  website: "https://mayumiphoebe.com/", // replace this with your deployed domain
  author: "Mayumi Phoebe",
  profile: "https://mayumiphoebe.com/",
  desc: "A personal space sharing essays, poems, and stories by Mayumi Phoebe.",
  title: "Mayumi Phoebe",
  ogImage: "mayumi-og-default.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 60 * 1000, // 15 hours
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/asiaunion/GSF-Blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // Keep aligned with astro.config defaultLocale to avoid mixed language signals.
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
