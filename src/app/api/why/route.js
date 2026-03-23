// src/app/api/why/route.js
import { NextResponse } from "next/server";
import { explainCareer } from "@/lib/inferenceEngine";

export async function POST(request) {
  try {
    const { careerName, facts } = await request.json();
    if (!careerName||!facts) return NextResponse.json({error:"Missing careerName or facts"},{ status:400 });
    const explanation = explainCareer(careerName, facts);
    if (!explanation) return NextResponse.json({error:"Career not found"},{ status:404 });
    return NextResponse.json(explanation);
  } catch (err) {
    return NextResponse.json({error:"Internal server error"},{ status:500 });
  }
}
