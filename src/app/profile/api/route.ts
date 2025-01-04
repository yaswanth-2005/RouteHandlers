import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultsPerPage", "20");

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);
  console.log(cookies().get("resultsPerPage"));

  return new Response("<h1>Profile API Data</h2>", {
    headers: {
      "Content-Type": "text/html", // getting the response based on the content-type from the server..
      "Set-Cookie": "theme=dark",
    },
  });
}
// Getting Headers in the Route Handlers..
