import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/_image")) {
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
