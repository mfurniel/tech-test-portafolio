import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  const allowedRoutes = ["/", "/es/", "/en/"];

  if (
    allowedRoutes.includes(pathname) ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/_image")
  ) {
    return next();
  }

  return Response.redirect(new URL("/", context.url), 302);
});
