// import { serve } from "./deps.ts";

// const PORT = 1993;
// const s = serve(`0.0.0.0:${PORT}`);
// const body = new TextEncoder().encode("tyin tyin Hello World\n");

// console.log(`Server started on port ${PORT}`);
// for await (const req of s) {
//   req.respond({ body });
// }


import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
});