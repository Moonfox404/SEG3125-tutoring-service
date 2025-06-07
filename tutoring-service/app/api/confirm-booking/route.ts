import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    serviceType: formData.get("serviceType"),
    agent: formData.get("agent"),
    duration: formData.get("duration"),
    costPerHour: formData.get("costPerHour"),
    date: formData.get("date"),
    time: formData.get("time"),
    message: formData.get("message"),
  };

  const confirmationUrl = new URL("/book/confirmation", request.url);
  const response = NextResponse.redirect(confirmationUrl);

  //store the form data in a cookie
  response.cookies.set({
    name: "bookingData",
    value: JSON.stringify(data),
    httpOnly: true,
    maxAge: 60 * 2,
    path: "/",
  });

  return response;
}
