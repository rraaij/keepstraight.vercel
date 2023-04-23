import createIntlMiddleware from "next-intl/middleware";

export default createIntlMiddleware({
  locales: ["nl", "en"],
  defaultLocale: "en",
});

export const config = {
  // skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
