import { getApiService } from "@/services";
import type { MessageRequestArgs } from "@/types";
import type { APIRoute } from "astro";

// * why is this nessesary?
export const prerender = false;

export const POST: APIRoute = async ({ request, ...ctx }) => {
  const cookie = ctx.cookies.get("last-message")?.value;
  const nextTry = Date.now() + 1800000;
  if (cookie && parseInt(cookie) <= nextTry) {
    return new Response(
      JSON.stringify({
        error: "MessageTimeout",
        message: "You can send messages every 30 minutes",
      }),
      {
        status: 400,
      },
    );
  }

  const body: MessageRequestArgs | Error = await request
    .json()
    .then((d) => ({ title: d.title, email: d.email, content: d.content }))
    .catch((e) => e);

  if (body instanceof Error) {
    console.error(body);
    return new Response(
      JSON.stringify({ error: "BadRequest", message: "Missing data" }),
      { status: 400 },
    );
  }

  const gres = await getApiService()
    .sendMessage(body)
    .catch((e: Error) => e);

  if (!gres || gres instanceof Error) {
    console.error(gres);
    return new Response(
      JSON.stringify({ error: "InternalServerError", message: gres?.message }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({ status: "Ok", message: "succesfully message created" }),
    { status: 200, headers: { "Set-Cookie": "last-message=" + nextTry } },
  );
};
