// app/api/products/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const companies = [
    {
      image: "logo1.png",
    },
    {
      image: "logo2.png",
    },
    {
      image: "logo3.png",
    },
    {
      image: "logo4.png",
    },
    {
      image: "logo1.png",
    },
    {
      image: "logo2.png",
    },
    {
      image: "logo3.png",
    },
    {
      image: "logo4.png",
    },
    {
      image: "logo1.png",
    },
    {
      image: "logo2.png",
    },
    {
      image: "logo3.png",
    },
    {
      image: "logo4.png",
    },
  ];
  return NextResponse.json(companies);
}
