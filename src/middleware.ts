import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Excluir rutas importantes
  const excludedPaths = ["/robots.txt", "/_image"];

  if (excludedPaths.some((path) => url.pathname.startsWith(path))) {
    return next();
  }

  if (url.pathname !== "/") {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }

  return next();
});
