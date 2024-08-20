// app/api/products/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const recruiting = [
    {
      image: "logo1.png",
      name: "Maersk Line",
      rating: "4.6",
      reviews: "2k+ reviews",
    },
    {
      image: "logo2.png",
      name: "MSC",
      rating: "4.6",
      reviews: "2k+ reviews",
    },
    {
      image: "logo3.png",
      name: "CMA CGM Group",
      rating: "4.6",
      reviews: "2k+ reviews",
    },
    {
      image: "logo4.png",
      name: "MEC",
      rating: "4.6",
      reviews: "2k+ reviews",
    },
    {
      image: "logo5.png",
      name: "AP Moller-Maersk",
      rating: "4.6",
      reviews: "2k+ reviews",
    },
  ];
  return NextResponse.json(recruiting);
}
